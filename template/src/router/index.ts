import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../view/Home.vue'),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    // 处理登录拦截
    // console.log(to)
    // let isLogin = localStorage.getItem('isLogin')
    // if (to.meta.login) {
    //     if (window.$public.checkWebEndTime()) {
    //         window.$public.loginOut()
    //         next('login')
    //     } else {
    //         window.$public.setWebEndTime()
    //     }
    //     if (to.name != 'login' && isLogin != 'true') {
    //         window.$message.warning('暂未登录，请先登录')
    //         next('login')
    //     }
    // } else if (to.name == 'login' && isLogin == 'true') {
    //     window.$message.success('您已登录')
    //     next('home')
    // }
    next()
})

export default router
