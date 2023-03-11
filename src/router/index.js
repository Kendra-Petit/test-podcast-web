import { PodcastsListScreen, PodcastDetailScreen, PodcastEpisodeDetailScreen } from '../screens'
const ROOT_SLUG = ''

const appRoutes = [
   {
      path: `${ROOT_SLUG}/`,
      name: 'Podscasts List',
      component: PodcastsListScreen,
   },
   {
      path: `${ROOT_SLUG}/:podcastId`,
      name: 'Podcast Detail',
      component: PodcastDetailScreen,
   },
   {
      path: `${ROOT_SLUG}/:podcastId/episode/:episodeId`,
      name: 'Podcast Episode Detail',
      component: PodcastEpisodeDetailScreen,
   },
]

export default appRoutes