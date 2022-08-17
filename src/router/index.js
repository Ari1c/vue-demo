import { createRouter, createWebHistory } from "vue-router";
// import { defineAsyncComponent } from 'vue'

const main = () => import('@/components/main/mainView.vue');
const home = () => import('@/components/home/home.vue');
const login = () => import('@/components/login/loginView.vue');
const introduce = () => import('@/components/main/article/article.vue');
const productDetail = () => import('@/components/product/productDetail/productDetail.vue');
const contactUs = () => import('@/components/contactUs/contact.vue');

// 定义需要的路由
const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/*',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    component: main,
    redirect: '/main',
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/main',
        name: 'main',
        component: home
      },
      {
        path: '/feature',
        name: 'feature',
        component: introduce
      },
      {
        path: '/partner',
        name: 'partner',
        component: login
      },
      {
        path: '/product-detail',
        name: 'product-detail',
        component: productDetail
      },
      {
        path: '/contact',
        name: 'contact',
        component: contactUs
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      title: '登录',
      keepAlive: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (!to?.matched?.length) {
    from?.path ? next({
      path: from.path
    }) : next('/main')
  } else {
    next()
  }

  // if (to.meta.title) {
  //   console.log(to.meta.title, from);
  // }

  // next()
})

router.afterEach((to, from)=>{
  // console.log('afterEach:=====', to, from)
})

export default router