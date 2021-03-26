import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Best from './views/Best.vue'
import Deals from './views/Deals.vue'
import NotFound from './views/404.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/best', component: Best },
    { path: '/deals', component: Deals },
    { path: '/:pathMatch(.*)*', component: NotFound }
]

export const router = createRouter({
    history:createWebHistory(),
    routes
})