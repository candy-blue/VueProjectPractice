import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
    },
    {
        path: '/router',
        component: () => import('@/views/routerTest/index.vue'),
        children: [
            {
                path: 'routerTest/:content',
                component: () => import('@/views/routerTest/params.vue'),
                name:'routerTest'
            },
            {
                path: 'routerTest2',
                component: () => import('@/views/routerTest/query.vue'),
                name:'routerTest2'
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router