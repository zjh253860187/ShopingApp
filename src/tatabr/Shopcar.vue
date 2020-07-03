<template>
  <div id="shopcar">
    <!-- 购物车界面 -->
  <!-- <mt-header title="购物车">
    <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
    </router-link>
    <mt-button icon="more" slot="right">
    </mt-button>
  </mt-header> -->
    <!-- 界面 -->

    <Headertop title="购物车"></Headertop>
    <Loading v-if="isloading"></Loading>
    <!-- 商品区域 -->
    <div class="good-list" v-else>
    <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="$store.getters.getgoodsselected[item.id]"
            @change="changselecd(item.id,$store.getters.getgoodsselected[item.id])"></mt-switch>
            <div class="img1">
            <img :src="item.thumb_path">
            </div>
            <div class="fx">
              <h1>{{item.title}}</h1>
              <div class="gwc">

                <span class="info">￥{{item.sell_price}}</span>
                <shopmeb :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></shopmeb>
                <a href="#" class="info1" @click.prevent="ReMove(item.id,i)">删除</a>

            </div>
           </div>
          </div>
				</div>
			</div>


      <!-- 结算区域 -->
      <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
                <div class="left">
                  <p>总计(不含运费):</p>
                  <p>已勾选商品<span class="red">{{$store.getters.getgoodscountandmout.count}}</span>件，
                  总价:￥<span class="red">{{$store.getters.getgoodscountandmout.aount}}</span>元</p>
                </div>
                <mt-button type="danger">去结算</mt-button>
              </p>
				    </div>
				  </div>
				</div>
			</div>
     </div>

  </div>

</template>

<script>
  import Headertop from '@/components/headertop/HeaderTop.vue'
  import Shopmeb from '@/components/shopnmeb/Shopmeb.vue'

  //对外暴露数据函数
    export default{
        name:'shopcar',
        data(){
          return{
            goodslist:[],
            isloading:true
          }
        },

        created() {
            this.getgoodslist()
          },
        methods:{
          changselecd(id,val){
            // console.log(id+'----'+val);
            this.$store.commit("updatagoodsselecd",{id,selected:val});
          },
          ReMove(id,index){
            //删除
            this.goodslist.splice(index,1);
            this.$store.commit("removefromcar",id)
          },
          getgoodslist(){
            //获取到store中所有商品ID，然后拼接出一个用逗号隔开的字符串
            var idArr = [];
            this.$store.state.car.forEach(item=>idArr.push(item.id));

            if(idArr.length<=0){
              return;
            }

            const url ="http://www.liulongbin.top:3005/api/goods/getshopcarlist/"
            this.$http.get(url + idArr.join(",")).then(result=>{
              if(result.body.status === 0){
                  this.goodslist = result.body.message;
                  // console.log(result.body)
                  this.isloading=false

              }else{
                alert("失败了")
              }
              // console.log(result.body)
            })
          },
        },
        components:{
           Shopmeb,
           Headertop
        }

    }
</script>

<style scoped>
  #shopcar{
    background-color: #eee;
    overflow: hidden;
    margin-bottom: 40px;

  }
.img1{
    width: 60px;
    height: 60px;
  }
.img1 img{
  width: 60px;
  height: 60px;
}
  .good-list h1{
    font-size: 13px;
  }
  .info{
    color: red;
    font-weight: bold;
    width: 20%;
  }
  .mui-card-content-inner{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .gwc p{
    display: flex;
    margin-bottom:0;
    justify-content: space-between;
  }
/* a{
   position: absolute;
   margin-left: 173px;
  } */
/* img {
  margin: 3px;
} */
.jiesuan{
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 380px;
  min-width: 330px;
}
.red{
  color: red;
  font-weight: bold;
  font-size: 14px;
}
.fx{
      width: 220px;
      display: block;
      /* flex-direction: column; */
      padding: 2px;
}
.gwc{
      display: flex;
      justify-content: space-between;
      max-width: 210px;
      min-width: 210px;
      align-items: center;
}


/* .mui-card-content-inner img{
  display: table-cell;
    width: 80px;
    height: 80px;
    margin-left: 2px;
  }
  .info{
    color: red;
  }
  .mui-card-content-inner{
    display: flex;
    align-items: center;

  }
.mui-card-content-inner h1{
    font-size:14px ;
    white-space: nowrap;
  } */
/* .gwc{
    display: table-cell;
    margin-left: 2px;
    margin-top: -38px;
  }
  .gwc span{
    float: left;
     margin-left:-5px;
    margin-bottom: 5px;
  }
.gwc p{
  margin-left: 7px;
  padding: 0;

}
.info1{
  margin-left: 40px;
  position: absolute;
} */
.left {
    width: 70%;
}

</style>
