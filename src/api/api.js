import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "f58d54599157906a9f7b5fd1330fe4a1";


const endpoints = {
    originals: "/discover/tv",
    trending: "/trending/all/week",
    now_playing: "/movie/now_playing",
    popular: "/movie/popular",
    top_rated: "/movie/top_rated",
    upcoming: "/movie/upcoming",
};

export const fetchData = (param) => {
    return axios.get(`${URL}${endpoints[param]}?api_key=${API_KEY}`)
}