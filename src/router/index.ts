import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import HeaderDetail from '../components/HeaderDetail.vue'
import FindHeader from '../views/FindSecret/FindSecret.vue' 
import Input1_1 from '../components/FindSecret/Input1-1.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/register',
    name:"register",
    component:Register
  },
  {
    path:'/login',
    name:"login",
    component:Login
  },
  {
    path:'/findsecret',
    component:FindHeader,
    children:[
      {
        path:'/findsecret',
        redirect:'/findsecret/input1',
      },
      //输入账号
      {
        path:'input1',
        component:Input1_1
      },
      {
        path:'input2',
        component:()=>import('../components/FindSecret/input1-2.vue')
      }
    ]
  },
  {
    path:"/home",
    component:()=>import('../views/Main.vue'),
    
  },
  {
    path:'/signup',
    component:()=>import('../views/SingUp.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
