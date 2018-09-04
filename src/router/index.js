import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import GetCode from '@/components/GetCode'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
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
