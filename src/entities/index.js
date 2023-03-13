export const STORED_DATA_KEY = 'podcasts'
export const FETCH_QTY = 100

export const LIST_FIELDS = [
   {
       key: 'title',
       label: 'Title',
       widthClassname: 'w-full'
   },
   {
       key: 'date',
       label: 'Date',
       widthClassname: 'w-40',
       formatValue: (date) => new Date(date).toLocaleDateString("en-US")
   },
   {
       key: 'duration',
       label: 'Duration',
       widthClassname: 'w-40',
       formatValue: (milisecs) => {
           var seconds = new Date(milisecs).getUTCSeconds()
           var minutes = new Date(milisecs).getUTCMinutes()
           if (!milisecs) return '-'
           else return (minutes < 10 ? `0${minutes}` : minutes) + ":" + (seconds < 10 ? `0${seconds}` : seconds)
       }
   },
]