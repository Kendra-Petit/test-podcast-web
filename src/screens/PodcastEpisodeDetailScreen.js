import { useNavigate } from 'react-router-dom'

const PodcastEpisodeDetailScreen = () => {
    const routerNavigate = useNavigate()

    return (
        <div className="PodcastEpisodeDetailScreen">
            <p>PodcastEpisodeDetailScreen</p>
            <p onClick={() => routerNavigate(-1)}>go back</p>
        </div>
    )
}
export default PodcastEpisodeDetailScreen
