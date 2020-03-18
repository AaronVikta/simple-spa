import Vue from 'vue'
import VueRouter from 'vue-router'
import {userRoutes} from './components/user/user.routes'
Vue.use(VueRouter)

const routes =[...userRoutes]

export const router= new VueRouter({
  routes
})
