<template>
<div id="newslist">
	<Headertop title="新闻资讯" ></Headertop>
      <!-- <mt-header title="新闻列表">
        <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right">
        </mt-button>
      </mt-header> -->
      <div id="slider">
		<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
			<div class="mui-scroll">
				<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
					推荐
				</a>
				<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
					热点
				</a>
				<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
					北京
				</a>
				<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
					社会
				</a>
				<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
					小说
				</a>
				<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
					广州
				</a>
				<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
					军事
				</a>
				<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
					体育
				</a>
			</div>
		</div>
	</div>


      <!-- 列表 -->
  <Loading v-if="isloading"></Loading>
  <div class="listb" ref="listb" v-else>
   <ul class="mui-table-view">
		<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
			<router-link :to="'/home/newsinfo/'+item.id">
				<img class="mui-media-object mui-pull-left" :src=item.img_url>
          <div class="mui-media-body">
            {{item.title}}
            <p class='mui-ellipsis'><span>发表时间:{{item.add_time |datanews('YYYY-MM-DD')}}</span>
              <span>点击:{{item.click}}次</span>
            </p>
          </div>
      </router-link>
		</li>
  </ul>
 </div>


  </div>

</template>

<script>
  import  mui from '@/lib/dist/js/mui.min.js'
  import Headertop from '@/components/headertop/HeaderTop.vue'
  import BScroll from 'better-scroll'


 export default{
    naem:'newslist',
    data(){
      return{
        newslist:[],
        isloading:true

      }
    },
    mounted() {
      mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0012 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
       });


    },
    created() {
      this.getnewslist()
    },
    methods:{
        getnewslist(){
          const url ="http://www.liulongbin.top:3005/api/getnewslist"
          this.$http.get(url).then(result=>{
            if(result.body.status === 0){
                this.newslist = result.body.message;
                
                this.isloading=false;
                this.$nextTick(()=>{
                    // var scroll = new BScroll(this.$refs.listb,{probeType:1})
                    // scroll.on('scroll',()=>{
                    //   console.log(666)
                    //   });
                    });

            }else{
              this.isloading=false;
              alert("失败了")
            };
          });
        }


    },
    components:{
      Headertop
    }

}

</script>

<style scoped>
.mui-media-body{
    font-size: 15px;
}
.mui-ellipsis{
  font-size: 12px;
  color: blue;
  display: flex;
  justify-content: space-between;
}
*{touch-action: pan-y;}



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

.mui-segmented-control.mui-scroll-wrapper .mui-scroll{position: fixed;z-index: 995;background-color: white;}



</style>
