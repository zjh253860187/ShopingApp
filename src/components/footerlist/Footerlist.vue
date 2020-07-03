<template>
  <div id="footerlist">
        <!-- 底部导航 -->
        <nav class="mui-bar mui-bar-tab">
        	<router-link class="mui-tab-item1" to="/home" replace>
        		<span class="mui-icon mui-icon-home"></span>
        		<span class="mui-tab-label">首页</span>
        	</router-link>
        	<router-link class="mui-tab-item1" to="/member" replace>
        		<span class="mui-icon mui-icon-contact"></span >
        		<span class="mui-tab-label">会员</span>
        	</router-link>
        	<router-link class="mui-tab-item1" to="/shopcar" replace>
        		<span class="mui-icon mui-icon-contact"><span class="mui-badge" id="badge">{{$store.getters.getAllcount}}</span></span>
        		<span class="mui-tab-label">购物车</span>
        	</router-link>
        	<router-link class="mui-tab-item1" to="/search" replace>
        		<span class="mui-icon mui-icon-search"></span>
        		<span class="mui-tab-label">搜索</span>
        	</router-link>
        </nav>

  </div>
</template>

<script>


 export default{
   name:'footerlist'
 }
</script>

<style scoped>
  .mui-bar-tab .mui-tab-item1.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item1{
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item1 .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}

</style>
