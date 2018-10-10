import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Home/Index'
import GetCode from '@/components/Login/GetCode'
import Login from '@/components/Login/Index'
import CreateProject from '@/components/Home/CreateProject'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: []
    },
    {
      path: '/create',
      component: CreateProject
    },
    {
      path: '/code',
      name: 'GetCode',
      component: GetCode
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
