<template>
  
  <div id="newsinfo">
    <Headertop title="新闻详情" class="top"></Headertop>
    <h1 class="title">新闻标题</h1>
    <p class="subtitle">
      <span>发表时间</span>
      <span>点击:0次</span>
    </p>
    <hr />
    <div class="content"></div>

  </div>
</template>

<script>
  import Headertop from '@/components/headertop/HeaderTop.vue'
  export default{
    data(){
      return{
        name:'newsinfo',
        id:this.$route.params.id //将url地址中的ID值，挂载到data上，方便调用
      }
    },
    components:{
      Headertop
    }
    
  }
</script>

<style scoped>


</style>
