import { useEffect, useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import api from "../api"
import { PodcastCard } from '../components'
import { STORED_DATA_KEY, FETCH_QTY } from '../entities'

const PodcastsListScreen = () => {
    const routerNavigate = useNavigate()
    const [podcastList, setPodcastList] = useState([])
    const [filterValue, setFilterValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleClickOnPodcast = (podcastId) => {
        routerNavigate(`podcast/${podcastId}`)
    }
    const fetchPodcastsList = () => {
        setIsLoading(true)
        return api.getPodcastsList(FETCH_QTY)
            .then(data => {
                const formattedList = data.map((item) => ({
                    name: item['im:name']?.label,
                    image: item['im:image'][0]?.label,
                    author: item['im:artist']?.label,
                    summary: item.summary?.label,
                    id: item.id?.attributes?.['im:id']

                }))
                setPodcastList(formattedList)
                const now = new Date().getTime()
                const oneDayInSecs = 24 * 60 * 60
                localStorage.setItem(STORED_DATA_KEY, JSON.stringify({ value: formattedList, expiry: now + oneDayInSecs}))
            })
            .finally(() => setIsLoading(false))
    }
    const filteredPodcastList = useMemo(() => {
        return podcastList.filter(({ name, author }) => {
            const lowerCaseName = name.toLowerCase()
            const lowerCaseFilter = filterValue.toLowerCase()
            const lowerCaseAuthor = author.toLowerCase()
            return lowerCaseName.includes(lowerCaseFilter) || lowerCaseAuthor.includes(lowerCaseFilter)})
    }, [podcastList, filterValue])

    useEffect(() => {
        const currentStoredData = localStorage.getItem(STORED_DATA_KEY)
        if (currentStoredData) {
            const item = JSON.parse(currentStoredData)
            const lastFetchIsOld = new Date().getTime() > item.expiry
            if (lastFetchIsOld) fetchPodcastsList()
            else setPodcastList(item.value)
        } else fetchPodcastsList()
    }, [])

    return (
        <div className="PodcastsListScreen px-6 pb-6">
            <div className="flex justify-end">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <p className='bg-blue-500 p-1 text-xs text-white font-bold rounded'>{FETCH_QTY}</p>
                    <input type="text" name="filter" id="filter" placeholder="Filter podcasts..." className="border border-gray-200 py-1 px-2 rounded" value={filterValue} onChange={(e) => setFilterValue(e.target.value)} />
                </div>
            </div>
            {isLoading && <p className='w-full text-center'>loading...</p>}
            <div className='grid grid-cols-4 gap-4'>
                {!isLoading && !!filteredPodcastList.length && filteredPodcastList.map((podcast, idx) => <PodcastCard key={idx} { ...podcast } handleClickOnPodcast={handleClickOnPodcast} />)}
            </div>
        </div>
    )
}
export default PodcastsListScreen
