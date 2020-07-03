<template>
  <div id="member">
        <!-- <mt-header title="会员">
          <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
          </router-link>
          <mt-button icon="more" slot="right">
          </mt-button>
        </mt-header> -->
        <Headertop title="会员"></Headertop>
        <h1>{{name}}</h1>
  </div>
</template>

<script>
import Headertop from '@/components/headertop/HeaderTop.vue'
  export default{
      name:'member',

      //返回数据
      data(){
        return{
            name:'我是张家辉'

        }
      },
      methods:{


          },
      components:{
          Headertop

          }
      }


</script>

<style scoped>

</style>
