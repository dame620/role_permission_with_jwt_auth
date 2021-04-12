/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Permissions from './components/Permissions.vue';
import NotAuthorized from './components/NotAuthorized.vue';
import Roles from './components/Roles.vue';
import Users from './components/Users.vue'

Vue.use(VueRouter)

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
 const routes=[
    {
        path:'/home',
        component: Home
    },
    
    {
        path: '/login',
        name: 'login',
        props: true,
        component: Login,
        meta: {
            authRequired: 'false',
        },
    },
    {
        path: '/permissions',
        name: 'permissions',
        props: true,
        component: Permissions,
        meta: {
          authRequired: 'true',
        },
    },
      {
        path: '/not-authorized',
        name: 'not-authorized',
        props: true,
        component: NotAuthorized,
        meta: {
          authRequired: 'false',
        },
      },

      {
        path: '/users',
        name: 'users',
        props: true,
        component: Users,
        meta: {
          authRequired: 'false',
        },
      },
      {
        path: '/roles',
        name: 'roles',
        props: true,
        component: Roles,
        meta: {
          authRequired: 'false',
        },   
      }

    
]
const router=new VueRouter({routes})

const app = new Vue({
    el: '#app',
    router: router
});
