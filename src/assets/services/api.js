import axios from 'axios';
// Up coming & movie-time
const getApiOfUpcoming = async (page,month) => {
    // createDate.
    const getCurrents = new Date();
    const getFutures = new Date();
    getFutures.setTime(getCurrents.getTime() + (month*30*24*60*60*1000)) // plus 90 day future time. (129600 la so phut trong 90 ngay)
    // get day
    let currentDate = getCurrents.getDate();
    currentDate = currentDate < 10 ? "0" + currentDate : currentDate
    let futureDate = getFutures.getDate();
    futureDate = futureDate < 10 ? "0" + futureDate : futureDate
    // get month
    let currentMonth = getCurrents.getMonth() +1;
    currentMonth = currentMonth < 10 ? "0" + currentMonth : currentMonth
    let futureMonth = getFutures.getMonth() +1;
    futureMonth = futureMonth < 10 ? "0" + futureMonth : futureMonth
    // get year
    let currentYear = getCurrents.getFullYear();
    let futureYear = getFutures.getFullYear();
    // format-dates
    let current = `${currentYear}-${currentMonth}-${currentDate}`;
    let future = `${futureYear}-${futureMonth}-${futureDate}`;
    // call Api 
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&release_date.gte=${current}&release_date.lte=${future}&with_release_type=3|2`
    const response = await axios.get(url);
    const data = response.status === 200 ? response.data : {}
    return data;
}

// Api discover // popular.
async function getMoviesDiscover  (pages) {
    const Url = `https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pages}`
    const response = await axios.get(Url);
    const data = response.status === 200 ? response.data : {};
    return data
}

// now Playing
async function getMoviesNowPlaying  (pages) {
    const Url = `https://api.themoviedb.org/3/movie/now_playing?api_key=d4627862d17c429f5b5285fb09aeb150&language=en-US&page=${pages}`
    const response = await axios.get(Url);
    const data = response.status === 200 ? response.data : {};
    return data
}

// Detail movie
async function getDetailMovie(id, language) {
    const Url = `https://api.themoviedb.org/3/movie/${id}?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=${language}&append_to_response=videos,images&include_image_language=${language},null`
    const response = await axios.get(Url);
    const data = response.status === 200 ? response.data : {};
    return data
}

// recommended Search & highly rated:
async function getRecommendedSearch(pages) {
    const Url = `https://api.themoviedb.org/3/movie/top_rated?api_key=d4627862d17c429f5b5285fb09aeb150&language=en-US&page=${pages}`
    const response = await axios.get(Url);
    const data = response.status === 200 ? response.data : {};
    return data
}

// lists Search:
async function getSearchMovie(keyword, pages) {
    const Url = `https://api.themoviedb.org/3/search/movie?api_key=d4627862d17c429f5b5285fb09aeb150&language=en-US&query=${keyword}&page=${pages}&include_adult=true`
    const response = await axios.get(Url);
    const data = response.status === 200 ? response.data : {};
    return data
}
export const Api = {
    getApiOfUpcoming,
    getMoviesDiscover,
    getMoviesNowPlaying,
    getDetailMovie,
    getRecommendedSearch,
    getSearchMovie,
}