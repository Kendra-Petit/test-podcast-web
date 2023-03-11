import { useNavigate } from 'react-router-dom'

const PodcastsListScreen = () => {
    const routerNavigate = useNavigate()

    const handleSeePodcastDetail = (podcastId) => {
        console.log(podcastId)
        routerNavigate(`${podcastId}`)
    }

    return (
        <div className="PodcastsListScreen">
         <p>PodcastsListScreen</p>
         <p onClick={() => handleSeePodcastDetail(21)}>go podcast to detail</p>
        </div>
    )
}
export default PodcastsListScreen
