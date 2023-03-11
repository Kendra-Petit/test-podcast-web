const PodcastCard = ({ image, name, author, id, handleClickOnPodcast}) => {
   return (
      <div className="PodcastCard cursor-pointer" onClick={() => handleClickOnPodcast(id)}>
         <div className="h-10"></div>
         <div className="border border-gray-200 drop-shadow-sm relative min-h-10 px-4 py-2 flex flex-col items-center">
            <div
               className="PodcastImage h-20 w-20 rounded-full overflow-hidden absolute right-1/2 -translate-y-1/2 translate-x-1/2"
               style={{ backgroundImage: `url('${image}')` }}
            />
            <p className="pt-12 text-base leading-4 uppercase font-semibold text-center">{name}</p>
            <p className="text-sm text-gray-500 font-semibold text-center mt-2">Author: {author}</p>
         </div>
      </div>
   )
 }
 export default PodcastCard
