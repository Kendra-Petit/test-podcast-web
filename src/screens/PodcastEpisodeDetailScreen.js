import { useEffect, useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import api from "../api"
import { STORED_DATA_KEY } from '../entities'
import { DetailSidebarCard } from '../components'

const PodcastEpisodeDetailScreen = () => {
    const { podcastId, episodeId } = useParams()
    const [podcastDetail, setPodcastDetail] = useState([])
    const [podcastEpisodes, setPodcastEpisodes] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchPodcastDetail = (id) => {
        setIsLoading(true)
        return api.getPodcastDetail(id)
            .then(data => {
                const formattedItems = data?.results.map(item => ({
                    title: item?.trackCensoredName,
                    date: item?.releaseDate,
                    duration: item?.trackTimeMillis,
                    id: item?.trackId,
                    audio: item?.feedUrl,
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

    const podcastEpisode = useMemo(() => {
        return podcastEpisodes.find(({ id }) => id == episodeId) || {}
    }, [podcastEpisodes, episodeId])

    return (
        <div className="PodcastEpisodeDetailScreen px-6 pb-6">
            {isLoading && <div className="flex justify-center items-center">
                <i className='pi pi-spinner animate-spin text-2xl text-blue-500'></i>
            </div>}
            {!isLoading && !Object.keys(podcastDetail).length && <p className='w-full text-center'>Failed to load data!</p>}
            {!isLoading && !!Object.keys(podcastDetail).length && (
                <div className="flex gap-4 mt-4 flex-col md:flex-row">
                    <DetailSidebarCard {...podcastDetail} />
                    <div className="border border-gray-200 drop-shadow-sm p-4 w-full h-fit rounded">
                        <p className="font-bold mb-2 ml-2">{podcastEpisode?.title}</p>
                        <audio src={podcastEpisode?.trackViewUrl} controls="controls" preload="none" className="w-full"></audio>
                    </div>
                </div>
            )}
        </div>
    )
}
export default PodcastEpisodeDetailScreen
