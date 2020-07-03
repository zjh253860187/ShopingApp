<template>
  <div id="goodsinfo">
    <Headertop title="商品详情" class="top"></Headertop>
    <!-- 小球动画 -->
    <Loading v-if="isloading"></Loading>
    <div v-else>
    <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter">
    <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

    <!-- <mt-header title="商品列表">
      <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right">
      </mt-button>
    </mt-header> -->
    <!-- 商品轮播图区域 -->
      <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<lunbotuzj :lunbotulist="lunbotu"></lunbotuzj>
					</div>
				</div>
			</div>


    <!-- 商品购买区域 -->
      <div class="mui-card">
				<div class="mui-card-header">{{goodsinfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <p class="price">
              市场价:&nbsp;&nbsp;<del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价:&nbsp;&nbsp;<span class="new_price">￥{{goodsinfo.sell_price}}</span>
            </p>
            <p>购买数量:<nbmbox @getSelectedcount="getSelectedcount"></nbmbox></p>
            <div class="gmqy">
              <p>
                <mt-button type="primary" size="small">立即购买</mt-button>
                <mt-button type="danger" size="small" @click="addtoshopcar">加入购物车</mt-button>
              </p>
            </div>
					</div>
				</div>
			</div>


    <!-- 商品参数区域 -->
      <div class="mui-card">
      	<div class="mui-card-header">商品参数</div>
      	<div class="mui-card-content">
      		<div class="mui-card-content-inner">
      			<p>商品编号: {{goodsinfo.goods_no}}</p>
            <p>库存情况: {{goodsinfo.stock_quantity}}件</p>
            <p>上架时间: {{goodsinfo.add_time |datanews('YYYY-MM-DD')}}</p>
      		</div>
      	</div>
        <div class="mui-card-footer">
          <mt-button type="primary" size="large" plain>图文介绍</mt-button>
          <mt-button type="danger" size="large" plain>商品评论</mt-button>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
  import Headertop from '@/components/headertop/HeaderTop.vue'
  import Nbmbox from '@/components/Nbmbox/nbmbox.vue'
  import Lunbotuzj from '@/components/lubotuzj/lubotuzj.vue'
  export default{
    name:'goodsinfo',
    data(){
      return{
        id:this.$route.params.id,
        lunbotu: [],
        goodsinfo: {},
        Selectedcount: 1,//保存用户选中商品数量 默认为一个
        ballFlag:false,
        isloading:true
      }
    },
    created() {
        this.getLunboTu(),
        this.getgoodsinfo()
      },


    methods:{
      //点击 加入购物车 调用的函数
        addtoshopcar(){
          this.ballFlag=!this.ballFlag;
          //拼接出保存到store中商品对象数组
          var goodsinfo = {
          id:this.id,
          count:this.Selectedcount,
          price:this.goodsinfo.sell_price,
          selected:true,
          }
          //将拼接的数组传入到mutations addTocar()方法中中
          this.$store.commit("addTocar",goodsinfo);
        },
        beforeEnter(el){
          el.style.transform="translate(0,0)";

          },
        enter(el,done){
          const ballPosition = this.$refs.ball.getBoundingClientRect();
          const badgePosition = document.getElementById("badge").getBoundingClientRect();
          const xDist = badgePosition.left - ballPosition.left;
          const yDist = badgePosition.top - ballPosition.top;
          el.style.transform=`translate(${xDist}px,${yDist}px)`;
          el.style.transition="all 0.5s cubic-bezier(.4,-0.3,1,.68)";
          done()
        },
        afterEnter(el){
          this.ballFlag=!this.ballFlag;
          //{id:商品id, count:数量, price:价格 select:是否选中}
        },
        getSelectedcount(count){
            this.Selectedcount = count;
            console.log('父组件拿到的值是：' + this.Selectedcount)
        },
        //请求轮播图数据
        getLunboTu(){
          const url ="http://www.liulongbin.top:3005/api/getthumimages/"
          this.$http.get(url + this.id).then(result=>{
            if(result.body.status === 0){
              result.body.message.forEach(item=>{
                item.img = item.src;
              })
              this.lunbotu = result.body.message;
                // this.lunbotulist = result.body.message;
                // console.log(result.body)
                this.isloading=false

            }else{
              alert("失败了")
            }
            console.log(result.body)
          })
        },
        //请求商品详情数据
        getgoodsinfo(){
          const url ="http://www.liulongbin.top:3005/api/goods/getinfo/"
          this.$http.get(url + this.id).then(result=>{
            if(result.body.status === 0){
                this.goodsinfo = result.body.message[0];
                // console.log(result.body)
            }else{
              alert("失败了")
            }
            console.log(result.body)
          })
        },
      },
      components:{
        Nbmbox,
        Lunbotuzj,
        Headertop

      }
}

</script>

<style scoped>

#goodsinfo{
  background-color: #eee;
  overflow: hidden;
}

.new_price{
  color: red;
  font-size: 16px;
  font-weight: bolder;
}
.ball{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  z-index: 99;
      /* left: 220px;
    top: 525px; */
  left: 154px;
  top: 255px;
}
#goodsinfo{
/*  margin-top: 40px; */
padding-bottom: 50px;

}
.gmqy{
  margin-left: 2px;
}
.mui-card-footer {
  display: block;
}
.mint-button {
  margin:15px 0;
}
</style>
