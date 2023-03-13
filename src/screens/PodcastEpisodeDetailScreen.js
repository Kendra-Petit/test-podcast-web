import { useNavigate, useParams } from 'react-router-dom'

const PodcastEpisodeDetailScreen = () => {
    const routerNavigate = useNavigate()
    const { podcastId } = useParams()

    return (
        <div className="PodcastEpisodeDetailScreen px-6 pb-6">
            <p onClick={() => routerNavigate(-1)}>Go back</p>
            <p className='w-full text-center'>Episode {podcastId}</p>
        </div>
    )
}
export default PodcastEpisodeDetailScreen
