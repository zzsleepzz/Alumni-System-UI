import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw
} from 'vue-router';



const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path: '/donation',
            component: () => import('.pages/Donation.vue') 
        },
        {
            path: '/alumni',
            component: () => import('.pages/Alumni.vue') 
        }
    ]
})

export default router