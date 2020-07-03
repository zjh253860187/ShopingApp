<template>
  <div id="goodlist">
    <Loading v-if="isloading"></Loading>
         <!-- 轮播图 -->
         <div v-else>
        <lunbotuzj :lunbotulist="lunbotulist"></lunbotuzj>

         <!-- 宫格布局 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/newslist">
                          <span class="mui-icon mui-icon-home"></span>
                          <div class="mui-media-body">新闻资讯</div>
                        </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/shangpinglist">
                          <span class="mui-icon mui-icon-chatbubble"></span>
                          <div class="mui-media-body">商品购买</div>
                        </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul>


    </div>
  </div>
</template>

<script>
  import Lunbotuzj from '@/components/lubotuzj/lubotuzj.vue'
  export default{
      name:'goodlist',
      //返回数据
      data(){
        return{
            lunbotulist:[],
            isloading:false
        }
      },
      created() {
        this.getLunboTu()
      },
      methods:{
        getLunboTu(){
          const url ="http://www.liulongbin.top:3005/api/getlunbo"
          this.$http.get(url).then(result=>{
            if(result.body.status === 0){
                this.lunbotulist = result.body.message;
                // console.log(result.body)
                // this.isloading=true
            }else{
              alert("失败了");
              // this.isloading=true
            }
            console.log(result.body)
          })
        },
      },
      components:{
        Lunbotuzj
      }
    }


</script>

<style scoped>
#goodlist{

  }

.mui-grid-view.mui-grid-9{
  background-color: white;
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border:0;
}


</style>
