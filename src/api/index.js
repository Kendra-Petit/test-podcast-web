import { create } from "apisauce";

const api = create ({
    baseURL: "https://cors-anywhere.herokuapp.com/https://itunes.apple.com/",

})
const endpoints = {
    getPodcastsList(qty){
        return api.get(`us/rss/toppodcasts/limit=${qty}/genre=1310/json`)
        .then(({ data }) => data?.feed?.entry)
    },
    getPodcastDetail(id){
        return api.get(`lookup?id=${id}`)
        .then(({ data }) => data)
    },
}
export default endpoints