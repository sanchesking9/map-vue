import Vue from 'vue'
import Router from 'vue-router'
import AddPlacePage from '@/pages/AddPlacePage'
import HomePage from '@/pages/HomePage'
import DetailsPage from '@/pages/DetailsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/add',
      name: 'add',
      component: AddPlacePage
    },
    {
      path: '/details/:id',
      name: 'details',
      component: DetailsPage
    }
  ]
})
