import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/tatabr/Home.vue'
import Shopcar from '@/tatabr/Shopcar.vue'
import 'mint-ui/lib/style.css'
import Member from '@/tatabr/Member.vue'
import Search from '@/tatabr/Search.vue'
import Newslist from '@/components/newslist/Newslist.vue'
import Goodsinfo from '@/components/goodsinfo/Goodsinfo.vue'
import Footerlist from '@/components/footerlist/Footerlist.vue'
import Newsinfo from '@/components/Newsinfo/newsinfo.vue'
import Shangpinglist from '@/components/shangpinglist/Shangpinglist.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:'/home'},
    {path:'/home', component: Home, meta: {showFooter:true,keepAlive:true}},
    {path:'/shopcar', component:Shopcar,meta: {showFooter:true,keepAlive:false}},
    {path:'/search', component:Search,meta: {showFooter:true,keepAlive:true}},
    {path:'/member', component:Member,meta: {showFooter:true,keepAlive:true}},
    {path:'/home/newslist', component:Newslist,meta: {showFooter:false,keepAlive:true}},
    {path:'/home/goodsinfo/:id', component:Goodsinfo,meta: {showFooter:true,keepAlive:false}},
    {path:'/home/newsinfo/:id', component:Newsinfo,meta: {showFooter:false,keepAlive:false}},
    {path:'/home/shangpinglist', component:Shangpinglist,meta: {showFooter:false,keepAlive:true}}
  ],
  // 路由滚动
//scrollBehavior (to, from, savedPosition) {
// if (savedPosition) {
//     return { x: 0, y: 0 }
//   } else {
//     return savedPosition
//   }
// },
  //配置路由高亮
  linkActiveClass:'mui-active',//默认高亮类 :router-link-active
  mode:'history',
  // 实现路由自动跳转到头部
  // scrollBehavior(to,from,savedPosition){
  //   if(savedPosition){
  //     return savedPosition
  //   }
  //   return{
  //     x:0,
  //     y:0
  //   }
  // }
})
