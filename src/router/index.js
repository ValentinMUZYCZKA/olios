import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/Accesories',
    name: 'Accesories',
    component: function () {
      return import(/* webpackChunkName: "Accesories" */ '../views/Accesories.vue')
    }
  },
  {
    path: '/Categories',
    name: 'Categories',
    component: function () {
      return import(/* webpackChunkName: "Categories" */ '../views/Categories.vue')
    }
  },
  {
    path: '/ForKids',
    name: 'ForKids',
    component: function () {
      return import(/* webpackChunkName: "ForKids" */ '../views/ForKids.vue')
    }
  },
  {
    path: '/Kitchen',
    name: 'Kitchen',
    component: function () {
      return import(/* webpackChunkName: "Kitchen" */ '../views/Kitchen.vue')
    }
  },
  {
    path: '/LivingRoom',
    name: 'LivingRoom',
    component: function () {
      return import(/* webpackChunkName: "LivingRoom" */ '../views/LivingRoom.vue')
    }
  },
  {
    path: '/Office',
    name: 'Office',
    component: function () {
      return import(/* webpackChunkName: "Office" */ '../views/Office.vue')
    }
  },
  {
    path: '/Basket',
    name: 'Basket',
    component: function () {
      return import(/* webpackChunkName: "Basket" */ '../views/Basket.vue')
    }
  },
  {
    path: '/Search',
    name: 'Search',
    component: function () {
      return import(/* webpackChunkName: "Search" */ '../views/Search.vue')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
