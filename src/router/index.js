import { createRouter, createWebHistory } from 'vue-router'

import Level1 from '../views/Level1.vue'

const routes = [
    { path: '/', component: Level1 }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
