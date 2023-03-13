import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from "../api"
import { STORED_DATA_KEY, LIST_FIELDS } from '../entities'

const PodcastDetailScreen = () => {
    const routerNavigate = useNavigate()
    const { podcastId } = useParams()
    const [podcastDetail, setPodcastDetail] = useState([])
    const [podcastEpisodes, setPodcastEpisodes] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const handleSeeEpisodeDetail = (episodeId) => {
        routerNavigate(`./episode/${episodeId}`)
    }
    const fetchPodcastDetail = (id) => {
        setIsLoading(true)
        return api.getPodcastDetail(id)
            .then(data => {
                const formattedItems = data?.results.map(item => ({
                    title: item?.trackCensoredName,
                    date: item?.releaseDate,
                    duration: item?.trackTimeMillis,
                    id: item?.trackId,
                }))
                if (data) setPodcastEpisodes(formattedItems)
            })
            .finally(() => setIsLoading(false))
    }
    useEffect(() => {
        if (podcastId) fetchPodcastDetail(podcastId)

        const storedData = localStorage.getItem(STORED_DATA_KEY)
        if (podcastId && storedData) {
            const parsedStoredData = JSON.parse(storedData)
            const currentPodcast = parsedStoredData?.value?.find(p => p?.id === podcastId)
            if (currentPodcast) setPodcastDetail(currentPodcast)
        }
    }, [podcastId])


    return (
        <div className="PodcastDetailScreen px-6 pb-6">
            {isLoading && <p className='w-full text-center'>loading...</p>}
            {!isLoading && !Object.keys(podcastDetail).length && <p className='w-full text-center'>Failed to load data!</p>}
            {!isLoading && !!Object.keys(podcastDetail).length && (
                <div className="flex gap-4 mt-4 flex-col md:flex-row">
                    <div className="Card w-full md:w-60 border border-gray-200 drop-shadow-sm p-4 flex flex-col items-center rounded">
                        <div
                            className="PodcastImage rounded overflow-hidden h-40 w-full bg-center bg-cover"
                            style={{ backgroundImage: `url('${podcastDetail?.image}')` }}
                        />
                        <p className="pt-2 border-t border-gray-200 mt-4 text-base font-semibold w-full">{podcastDetail?.name}</p>
                        <p className="text-sm text-gray-500 w-full italic">By {podcastDetail?.author}</p>
                        <p className="pt-2 border-t border-gray-200 mt-4 text-sm font-semibold w-full">Description:</p>
                        <p className="text-sm text-gray-500 w-full italic">By {podcastDetail?.summary}</p>
                    </div>
                    <div className='Episodes flex flex-col gap-2 w-full'>
                        <div className="Title border border-gray-200 drop-shadow-sm p-2 w-full rounded">
                            <p className="font-bold">Episodes</p>
                        </div>
                        <div className="List border border-gray-200 drop-shadow-sm p-2 w-full rounded">
                            <div className="ListHeader flex border-b border-gray-300 pb-2 px-2">
                                {LIST_FIELDS.map(({ key, label, widthClassname }) => <p key={`header-${key}`} className={`${widthClassname} font-bold`}>{label}</p>)}
                            </div>
                            <div className="ListBody">
                                {podcastEpisodes.map((episode, idx) => (
                                    <div className={`ListRow flex py-1 px-2 cursor-pointer ${idx % 2 === 0 ? 'bg-gray-200' : 'bg-gray-100'}`} onClick={() => handleSeeEpisodeDetail(episode.id)} key={`episode-${episode.id}`}>
                                        {LIST_FIELDS.map(({ key, widthClassname, formatValue }, index) => <p key={`episode-field-${key}-${index}`} className={`${widthClassname} text-blue-900`}>{formatValue ? formatValue(episode[key]) : episode[key]}</p>)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default PodcastDetailScreen
