import axios from 'axios'
import qs from 'qs'
import API from '@/services/api'

const BASE_URL = "http://118.25.42.197:9930/api";

function get(path, params) {
    return axios.get(BASE_URL + path, {
        params: params, paramsSerializer: params => {
            return qs.stringify(params, {indices: false})
        }
    })
}

export const GlobalService = {
    getMovieCategorie:p => get(API.MovieCategorie, p),
    getMovieList:p => get(API.MovieList, p),
    getMovieYear:p => get(API.MovieYear, p)
}