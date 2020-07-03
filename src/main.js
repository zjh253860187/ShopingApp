
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button } from 'mint-ui'
import { Header } from 'mint-ui';
import { Tabbar, TabItem } from 'mint-ui';
import 'mint-ui/lib/style.css'
import './lib/dist/css/mui.min.css'
import { Search } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
import { Switch } from 'mint-ui';
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import Loading from '@/components/Loading/Loading'


Vue.component('Loading',Loading)
Vue.use(Vuex)
Vue.use(VueResource)



Vue.component(Switch.name, Switch);

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.component(Search.name, Search);



Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);



Vue.component(Button.name, Button)
Vue.component(Header.name, Header);

//全局过滤器
import moment from 'moment'
Vue.filter('datanews',function(val,pattern="YYYY-MM-DD HH:mm:ss"){
  return moment(val).format(pattern)
});


//每次刚进入网站调用从本地存储中购物车数据取出放入购物车中
var car =JSON.parse(localStorage.getItem('car') || '[]')




var store = new Vuex.Store({
    //数据仓库
    state:{//this.$store.state.***
        car:car//购物车数组对象，{id:商品id, count:数量, price:价格 select:是否选中}
    },
    //更改仓库数据的方法集合
    mutations:{
      updatagoodsselecd(state,info){
        state.car.some(item=>{
          if(item.id == info.id){
            item.selected = info.selected
          }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
     },
     //this.$store.comimt（）
     removefromcar(state,id){
       state.car.some((item,i)=>{
         if(item.id == id){
           state.car.splice(i,1)
           return true
         }
       })
       localStorage.setItem('car',JSON.stringify(state.car))
     },
     addTocar(state,goodsinfo){
       //点击加入购物车后将商品信息保存到store上面
       var flog = false;
       state.car.some(item=>{
         if(item.id == goodsinfo.id){
           item.count += parseInt(goodsinfo.count)
           flog = true
           return true
         }
       })
       if(!flog){
         state.car.push(goodsinfo)
       }
       //当更新购物车后 把购物车里的数据存储到本地localStorage
        localStorage.setItem('car',JSON.stringify(state.car))
     },
     updataconut(state,goodsinfo){
        state.car.some(item=>{
          if(item.id == goodsinfo.id){
            item.count = parseInt(goodsinfo.count)
            return true
          }
        })
        //修改数量后将商品最新数量保存到本地
        localStorage.setItem('car',JSON.stringify(state.car))
     },
    },
    //计算属性
    getters:{
      getgoodscountandmout(state){
        var o= {
          count:0,
          aount:0
        }
          state.car.forEach(item=>{
            if(item.selected){
            o.count += item.count
            o.aount += item.price*item.count
          }
        })
        return o
      },
      getgoodsselected(state){
        var o = {}
        state.car.forEach(item=>{
          o[item.id] = item.selected
        })
        return o
      },
    //this.$store.getters.***
    getAllcount(state){
      var c = 0;
      state.car.forEach(item=>{
        c+=parseInt(item.count)
      })
      return c
      },
      getGoodsCount(state){
        var o = {};
        state.car.forEach(item=>{
          o[item.id] = item.count
        })
        return o
      }
    }
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
