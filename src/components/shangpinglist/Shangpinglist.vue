<template>
  <div id="shangpinglist">
  <Loading v-if="isloading"></Loading>
  <div v-else>
  <Headertop title="商品购买"></Headertop>
    <div class="shangping">
    <router-link class="sp-item" v-for="item in splist" :key="item.id" :to="'/home/goodsinfo/' + item.id">
        <img :src=item.img_url>
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="prices">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余{{item.stock_quantity}}件</span>
        </p>
      </div>
    </router-link>


<mt-button type="danger" size="large" @click="getmore">加载更多</mt-button>


  </div>
  </div>
  </div>
</template>

<script>
  import Headertop from '@/components/headertop/HeaderTop.vue'

  export default{
    name:'shangpinglist',
    data(){
      return{
        pageindex:1,
        splist:[],
        isloading:true

      }
    },
    created() {

    },
    mounted() {
      this.getlist()
    },
    methods:{
      getlist(){
        const url ="http://www.liulongbin.top:3005/api/getgoods?pageindex="
        this.$http.get(url + this.pageindex).then(result=>{
          if(result.body.status === 0){
              this.splist = this.splist.concat(result.body.message);
              // console.log(result.body)
              this.isloading=false;
          }else{
            alert("失败了")
          }
          console.log(result.body)
        })
      },
      getmore(){
        this.pageindex++;
        this.getlist()
      }
    },
    components:{
      Headertop
    }

  }
</script>



<style scoped>
.shangping{

  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  justify-content: space-between;
}
img {
  width:100%;
  height: 200px;
}
.sp-item{
  width: 49%;
  border: 1px solid #ccc;
  box-shadow: 0 0 8px #ccc;
  margin: 4px 0;
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 293px;
}
.title{
  font-size: 14px;
}
.info{
  background-color: #eee;

}
.info p{
    margin: 0;
    padding: 5px;
  }
.prices{

}
.now{
  color: red;
  font-weight: bold;
  font-size: 16px;
}
.old{
  text-decoration: line-through;
  font-size: 12px;
  margin-left: 10px;
}
.sell{
  display: flex;
  justify-content: space-between;
   font-size: 12px;
}

</style>
