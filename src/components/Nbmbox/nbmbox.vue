<template>
  <div id="nbmbox">
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='100'>
    			<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    			<input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox"/>
    			<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
  import  mui from '@/lib/dist/js/mui.min.js'
  export default{
    name:"nbmbox",
    data(){
      return{

      }
    },
    mounted() {
      mui(".mui-numbox").numbox();
    
    },
    methods:{
      countChanged(){
        // console.log(this.$refs.numbox.value);

        this.$emit('getSelectedcount',parseInt(this.$refs.numbox.value))
      }
    }

  }
</script>

<style scoped>
.mui-numbox{
  position: absolute;
  margin-left: 60px;
  margin-top: -29px;
}
</style>
