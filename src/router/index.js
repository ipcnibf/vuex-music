
import { createRouter, createWebHashHistory } from 'vue-router'
 
 
const routes = [
  {
    path: '/',
    //“/”的意思是默认页面，即主页
    name: "login",
    component: () => import('../components/LoginView.vue')
  },
  {
    path: '/music',
    name: 'music',
//路由懒加载
    component: () => import('../components/MusicView.vue')
  }
]
 
const router = createRouter({
//使用哈希模式为路由变更模式
  history: createWebHashHistory(),
  routes
})
 
export default router