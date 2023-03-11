import { useNavigate } from 'react-router-dom'

const PodcastDetailScreen = () => {
    const routerNavigate = useNavigate()

    const handleSeeEpisodeDetail = (episodeId) => {
        routerNavigate(`./episode/${episodeId}`)
    }

    return (
        <div className="PodcastDetailScreen">
         <p>PodcastDetailScreen</p>
         <p onClick={() => handleSeeEpisodeDetail(45)}>go to episode detail</p>
        </div>
    )
}
export default PodcastDetailScreen
