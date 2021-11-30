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
    },
    deleteMovie(id) {
        return http.delete('/api/movies/admin/delete/' + id)
    },
    addMovie(editMode, data) {
        if (editMode) {
            return http.put('/api/movies/admin/update', null, data)
        } else {
            return http.post('/api/movies/admin/create', null, data)
        }
    },
    getAllTypes () {
        return http.get('/api/movies/categories')
    },

    getAllYear () {
        return http.get('/api/movies/years')
    },

    getDirectors (keyword) {
        let url = '/api/movies/directors'
        if (keyword) {
            url += '?keyword=' + keyword
        }
        return http.get(url)
    },
}

export default movie
