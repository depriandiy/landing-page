import { createRouter, createWebHistory, createMemoryHistory, createWebHashHistory } from 'vue-router'

const router = createRouter({
    scrollBehavior() {
        return { top: 0 }
    },
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // Main Layout
        {
            path: '/',
            name: 'Landing Page',
            component: () => import('../pages/Landing.vue'),
        },
        {
            path: '/test',
            name: 'Scroll Page',
            component: () => import('../pages/ScrollPage.vue'),
        },
    ]
})

export default router