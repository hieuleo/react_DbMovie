import axios from 'axios';

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY || 'd4627862d17c429f5b5285fb09aeb150';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

const getTmdbUrl = (path, params = {}) => {
    const url = new URL(`${TMDB_BASE_URL}${path}`);
    url.searchParams.set('api_key', TMDB_API_KEY);

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
            url.searchParams.set(key, value);
        }
    });

    return url.toString();
};

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
    const url = getTmdbUrl('/discover/movie', {'language': 'en-US', region: 'US', sort_by: 'popularity.desc', include_adult: false, include_video: false, page, 'release_date.gte': current, 'release_date.lte': future, with_release_type: '3|2'})
    const response = await axios.get(url);
    const data = response.status === 200 ? response.data : {}
    return data;
}

// Api discover // popular.
async function getMoviesDiscover  (pages) {
    const Url = getTmdbUrl('/discover/movie', {language: 'en-US', sort_by: 'popularity.desc', include_adult: false, include_video: false, page: pages})
    const response = await axios.get(Url);
    const data = response.status === 200 ? response.data : {};
    return data
}

// now Playing
async function getMoviesNowPlaying  (pages) {
    const Url = getTmdbUrl('/movie/now_playing', {language: 'en-US', page: pages})
    const response = await axios.get(Url);
    const data = response.status === 200 ? response.data : {};
    return data
}

async function getTvOnTheAir(pages) {
    const Url = getTmdbUrl('/tv/on_the_air', {language: 'en-US', page: pages});
    const response = await axios.get(Url);
    const data = response.status === 200 ? response.data : {};
    return data;
}

// Detail movie
async function getDetailMovie(id, language) {
    const Url = getTmdbUrl(`/movie/${id}`, {language, append_to_response: 'videos,images', include_image_language: `${language},null`})
    const response = await axios.get(Url);
    const data = response.status === 200 ? response.data : {};
    return data
}

async function getDetailTv(id, language) {
    const Url = getTmdbUrl(`/tv/${id}`, {language, append_to_response: 'videos,images', include_image_language: `${language},null`})
    const response = await axios.get(Url);
    const data = response.status === 200 ? response.data : {};
    return data
}

// recommended Search & highly rated:
async function getRecommendedSearch(pages) {
    const Url = getTmdbUrl('/movie/top_rated', {language: 'en-US', page: pages})
    const response = await axios.get(Url);
    const data = response.status === 200 ? response.data : {};
    return data
};

// lists Search:
async function getSearchMovie(keyword, pages) {
    const Url = getTmdbUrl('/search/movie', {language: 'en-US', query: keyword, page: pages, include_adult: true})
    const response = await axios.get(Url);
    const data = response.status === 200 ? response.data : {};
    return data
};

// movie detail proposal.
async function getProposalDetails(movie_id, page){
    const Url = getTmdbUrl(`/movie/${movie_id}/recommendations`, {language: 'en-US', page});
    const response = await axios.get(Url);
    const data = response.status === 200 ? response.data : {};
    return data;
};

async function getCastAndCrewDetails( movie_id, language){
    const Url = getTmdbUrl(`/movie/${movie_id}/credits`, {language});
    const response = await axios.get(Url);
    const data = response.status === 200 ? response.data : {};
    return data;
}

async function getCommentsMovies( movie_id, language, page){
    const Url = getTmdbUrl(`/movie/${movie_id}/reviews`, {language, page});
    const response = await axios.get(Url);
    const data = response.status === 200 ? response.data : {};
    return data;
}

async function getReviewDetails(review_id) {
    const Url = getTmdbUrl(`/review/${review_id}`);
    const response = await axios.get(Url);
    const data = response.status === 200 ? response.data : {};
    return data;
}

async function getPersonDetails(person_id, language) {
    const Url = getTmdbUrl(`/person/${person_id}`, {language});
    const response = await axios.get(Url);
    const data = response.status === 200 ? response.data : {};
    return data;
}

async function getPersonMovieCredits(person_id, language) {
    const Url = getTmdbUrl(`/person/${person_id}/movie_credits`, {language});
    const response = await axios.get(Url);
    const data = response.status === 200 ? response.data : {};
    return data;
}

export const Api = {
    getApiOfUpcoming,
    getMoviesDiscover,
    getMoviesNowPlaying,
    getTvOnTheAir,
    getRecommendedSearch,
    getSearchMovie,
    // detail
    getDetailMovie,
    getDetailTv,
    getProposalDetails,
    getCastAndCrewDetails,
    getCommentsMovies,
    getReviewDetails,
    getPersonDetails,
    getPersonMovieCredits,
}
