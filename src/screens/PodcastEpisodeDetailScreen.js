import { useParams } from 'react-router-dom'

const PodcastEpisodeDetailScreen = () => {
    const { podcastId } = useParams()

    return (
        <div className="PodcastEpisodeDetailScreen px-6 pb-6">
            <p className='w-full text-center'>Episode {podcastId}</p>
        </div>
    )
}
export default PodcastEpisodeDetailScreen
