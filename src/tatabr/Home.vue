<template>

  <div id="home">

<!-- <mt-header fixed title="主页面"></mt-header> -->

    <Headertop :title="title" class="top"></Headertop>

    <goodlist></goodlist>

  </div>

</template>

<script>

import Goodlist from '@/components/goodlist/Goodlist.vue'
import Headertop from '@/components/headertop/HeaderTop.vue'
  export default{
      name:'home',

      //返回数据
      data(){
        return{
          title:"主页"
        }
      },
      methods:{


          },
      components:{
            Goodlist,
            Headertop

          }
      }


</script>

<style scoped>
/* 路由动画 */
/* .v-enter,
.v-leave-to{
  opacity: 0;
  transform: translateX(100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active{
  transition: all 0.4s ease;
}
 */


</style>
