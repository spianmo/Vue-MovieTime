import http from '@/utils/http'

const user = {
    login(user) {
        return http.post('/api/admin/login', {
            username: user.username,
            password: user.password
        })
    }
}

export default user
