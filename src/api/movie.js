import http from '@/utils/http'

const movie = {
    getMovieList(keyword, movie_year, categories, pageNum, pageSize) {
        return http.get('/api/movies/movie-list', {
            keyword,
            movie_year,
            categories,
            pageNum,
            pageSize
        })
    },
    getMovieCategorie() {
        return http.get('/api/movies/categories')
    },
    getMovieYear() {
        return http.get('/api/movies/years')
    },
    getMovieDetail(movieId) {
        return http.get('/api/movies/detail/' + movieId)
    },
    getMovieRatings(movieId) {
        return http.get('/api/movies/ratings/' + movieId)
    },
    getMovieActors(movieId) {
        return http.get('/api/movies/actors/' + movieId)
    }
}

export default movie
