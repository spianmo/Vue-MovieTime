import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
    base: process.env.BASE_URL,
    mode: "hash",
    routes: [
        {
            path: '/',
            redirect: '/index'
        }, {
            path: "/index",
            name: 'index',
            component: () => import('@/views/Index')
        }, {
            path: '/movie-search',
            name: 'movie-search',
            component: () => import('@/views/MovieSearch')
        }, {
            path: '/self-made',
            name: 'self-made',
            component: () => import('@/views/SelfMade')
        }, {
            path: '/rank',
            name: 'rank',
            component: () => import('@/views/Rank')
        }, {
            path: '/community',
            name: 'community',
            component: () => import('@/views/Community')
        }, {
            path: '/video',
            name: 'video',
            component: () => import('@/views/Video')
        }, {
            path: '/movie-detail/:id',
            name: 'movie-detail',
            component: () => import('@/views/MovieDetail')
        }, {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login')
        }, {
            path: '/admin',
            name: 'admin',
            component: () => import('@/views/admin'),
            children: [
                {
                    path: 'list-movie',
                    name: 'list-movie',
                    component: () => import('@/views/admin/movies/MovieList')
                }, {
                    path: 'create-movie',
                    name: 'create-movie',
                    component: () => import('@/views/admin/movies/MovieAdd')
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    let token = localStorage.getItem("userToken");
    if (to.fullPath.startsWith("/admin") && token == null) {
        next({path: '/login'})
    }
    if (to.fullPath.startsWith("/login") && token != null){
        next({path: '/admin'})
    }
    next();
})

export default router
