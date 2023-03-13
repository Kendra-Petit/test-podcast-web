import { PodcastsListScreen, PodcastDetailScreen, PodcastEpisodeDetailScreen } from '../screens'
const ROOT_SLUG = ''

const appRoutes = [
   {
      path: `${ROOT_SLUG}/`,
      name: 'Podscasts List',
      component: PodcastsListScreen,
   },
   {
      path: `${ROOT_SLUG}/podcast/:podcastId`,
      name: 'Podcast Detail',
      component: PodcastDetailScreen,
   },
   {
      path: `${ROOT_SLUG}/podcast/:podcastId/episode/:episodeId`,
      name: 'Podcast Episode Detail',
      component: PodcastEpisodeDetailScreen,
   },
]

export default appRoutes