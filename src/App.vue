<template>
  <div id="app">
        <!-- <mt-header title="zjh_App">
          <span slot="left" @click="goback" v-show="flog">
          <mt-button icon="back">返回</mt-button>
          </span>
          <mt-button icon="more" slot="right">
          </mt-button>
        </mt-header> -->
    <!-- v-show="$route.meta.showFooter" 表示是否显示路由导航组件 -->
    <footerlist v-show="$route.meta.showFooter"></footerlist>


<keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
</keep-alive>

<router-view v-if="!$route.meta.keepAlive"></router-view>







  </div>
</template>

<script>

  import Footerlist from './components/footerlist/Footerlist.vue'


export default {
  name: 'App',
  data(){
    return{

    }
  },

  components:{
        Footerlist
  },
  methods:{

  },

}
</script>

<style scoped>
  /* 路由动画 */
/* .v-enter{
  opacity: 0;
  transform: translateX(100%);

}

.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);

  position: fixed;
}
.v-enter-active,
.v-leave-active{
  transition: all 0.3s ease;
} */

#app{
/* overflow-x: hidden; */
/* margin-top: 40px; */
/* padding-bottom: 50px; */
padding-top: 40px;
padding-bottom: 10px;
}



</style>
