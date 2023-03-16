const DetailSidebarCard = ({ image, name, author, summary }) => {
   return (
      <div className="DetailSidebarCard w-full md:w-60 border border-gray-200 drop-shadow-sm p-4 flex flex-col items-center rounded">
      <div
          className="PodcastImage rounded overflow-hidden h-40 w-full bg-center bg-cover"
          style={{ backgroundImage: `url('${image}')` }}
      />
      <p className="pt-2 border-t border-gray-200 mt-4 text-base font-semibold w-full">{name}</p>
      <p className="text-sm text-gray-500 w-full italic">By {author}</p>
      <p className="pt-2 border-t border-gray-200 mt-4 text-sm font-semibold w-full">Description:</p>
      <p className="text-sm text-gray-500 w-full italic">By {summary}</p>
  </div>
   )
 }
 export default DetailSidebarCard
