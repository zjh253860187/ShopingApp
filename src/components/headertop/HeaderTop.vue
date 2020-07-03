<template>
  <div id="headertop">
      <mt-header :title="title">
        <span slot="left">
          <mt-button icon="back" v-show="flog" @click="goback">{{returns}}</mt-button>
        </span>
        <mt-button icon="more" slot="right">
        </mt-button>
      </mt-header>
  </div>
</template>

<script>
  export default{
    props:{title:String},
    name:'headertop',
    data(){
      return{
        returns:"返回",
        flog:true,

      }
    },
    methods:{
      goback(){
        //点击后退
          // if(/shopcar|home|member|search/i.test(location.href)){}
          history.back()
          console.log(history)
          console.log(window.history.length)
      }
    },
    // created() {
    //   this.flog = false
    // },
    // mounted() {
    //   this.flog = false
    // },
    watch:{
      '$route.path':function(newVale){
        if(newVale === '/home'){
          this.flog=false
        }else {
			this.flog = true
		}
      }
    },

  }
</script>

<style scoped>
.mint-header{position: fixed;top:0;width: 100%;z-index: 555;}

</style>
