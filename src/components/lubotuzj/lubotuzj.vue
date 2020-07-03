<template>
  <div id="lunbotuzj">
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000" class="ms">
      <mt-swipe-item  v-for="item in lunbotulist" :key="item.id">
        <img :src="item.img">
      </mt-swipe-item>
    </mt-swipe>

  </div>

</template>

<script>
  export default{
    props:["lunbotulist"],
    name:'lubotuzj',
    data(){
      return{

      }
    }
  }
</script>

<style scoped>

.mint-swipe {
  height: 200px;
}
img {
  width:100%;
  height: 100%;

}
.mint-swipe-items-wrap div{
  text-align: center;
}

</style>
