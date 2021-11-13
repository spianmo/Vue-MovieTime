import http from '@/utils/http'

const menu = {
    getMenu() {
        return http.get('/api/admin/menus')
    }
}

export default menu
