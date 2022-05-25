import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import {createRouter,createWebHistory} from 'vue-router'
import axios  from 'axios';

import homepageComp from './components/home.vue'
import detailsComp from './components/details.vue'
import detailSecComp from './components/details1.vue'
const routes=[
    {
        path:'/', 
        component:homepageComp,
       
    },
    {
        path:'/home',
        component:homepageComp,
    },
    {
        path:'/details',
        component:detailsComp,
    },
    {
        path:'/details/:id',
        component:detailsComp,
        props:true

    },
    {
        path:'/details1',
        component:detailSecComp,
    }
]

axios.defaults.baseURL='http://localhost:3000/'
const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
