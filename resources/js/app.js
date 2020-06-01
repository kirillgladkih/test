require('./bootstrap');

window.Vue = require('vue')

import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import App from './App'


Vue.use(VueAxios)
Vue.use(VueRouter, axios)

const routes = [
    {
        name        : 'home',
        path        : '/',
        component   : () => import('./components/Home.vue')
    },
]

const router = new VueRouter({
    mode     : 'history',
    routes   : routes
});

const app = new Vue({
    router : router,
    render : h => h(App) 
}).$mount('#app')

