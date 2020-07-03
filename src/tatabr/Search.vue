<template>
  <div id="search">
    <!-- <mt-search>
      v-model="value"
      cancel-text="取消"
      placeholder="搜索">
    </mt-search> -->
    <Headertop title="搜索"></Headertop>
    <h1>{{name}}</h1>



  </div>
</template>

<script>
import Headertop from '@/components/headertop/HeaderTop.vue'
  export default{
      name:'search',

      //返回数据
      data(){
        return{
              name:'我是陈小春'

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
#search{

}
</style>
