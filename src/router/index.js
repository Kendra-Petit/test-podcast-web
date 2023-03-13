import { PodcastsListScreen, PodcastDetailScreen, PodcastEpisodeDetailScreen } from '../screens'

const appRoutes = [
   {
      path: `/`,
      name: 'Podscasts List',
      component: PodcastsListScreen,
   },
   {
      path: `/podcast/:podcastId`,
      name: 'Podcast Detail',
      component: PodcastDetailScreen,
   },
   {
      path: `/podcast/:podcastId/episode/:episodeId`,
      name: 'Podcast Episode Detail',
      component: PodcastEpisodeDetailScreen,
   },
]

export default appRoutes