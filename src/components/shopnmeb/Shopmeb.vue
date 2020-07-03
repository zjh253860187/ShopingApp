<template>
  <div id="shopmeb">
    <!-- 数字选择框 -->
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='100' style="height: 25px;">
    			<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    			<input id="test" class="mui-input-numbox" type="number" :value="initcount" @change="scountChanged" ref="numbox" readonly/>
    			<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
import  mui from '@/lib/dist/js/mui.min.js'
  export default{
    name:'shopmeb',
    mounted() {
      mui(".mui-numbox").numbox();
    },
    props:["initcount","goodsid"],
    methods:{
        scountChanged(){
            console.log(this.$refs.numbox.value);
            this.$store.commit("updataconut",{id:this.goodsid,count:this.$refs.numbox.value})
        },
    },

  }
</script>

<style scoped>
/* .mui-numbox{
  margin-left: -40px;
  margin-top: 25px;
  position: absolute;
  margin-top: 22px;
  margin-left: -40px;
}
.mui-numbox{
  position:absolute;
      margin-top: -3px;
      margin-left: 3px;
} */
</style>
