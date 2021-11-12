import Vue from 'vue'
import VueRouter from 'vue-router'

// 1. 通过Vue.use()安装router插件
Vue.use(VueRouter)

// 2. 创建VueRouter实例对象
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
    console.log("路由beforeEach方法：", to, "当前登录用户：", localStorage);
    let token = localStorage.getItem("usertoken");
    if (to.fullPath.startsWith("/admin") && token == null) {
        console.log("未进行后台管理登录，跳转到登录");
        next({path: '/login'})
    }
    next();
})

export default router
