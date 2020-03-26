import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home'
import Index from '../pages/index'
import Login from '../pages/login'
import Product from '../pages/product'
import Detail from '../pages/detail'
import Cart from '../pages/cart'
import Order from '../pages/order'
import OrderConfirm from '../pages/orderConfirm'
import OrderList from '../pages/orderList'
import OrderPay from '../pages/orderPay'
import AliPay from '../pages/aliPay'

import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index
      },
      {
        path: '/product/:id',
        name: 'product',
        component: Product
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  }, {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    children: [
      {
        path: 'confirm',
        name: 'order-confirm',
        component: OrderConfirm
      },
      {
        path: 'list',
        name: 'order-list',
        component: OrderList
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: OrderPay
      },
      {
        path: 'alipay',
        name: 'alipay',
        component: AliPay
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
