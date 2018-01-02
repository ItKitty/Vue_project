<template>
  <div>
    <!-- 1.0 轮播图 -->
    <mt-swipe>
      <mt-swipe-item v-for="(item,index) in lunboArray" :key="index">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>

    <!-- 2.0 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/news/newsList">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">新闻咨询</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/photo/photoList">

          <span class="mui-icon mui-icon-email">
            <span class="mui-badge">5</span>
          </span>
          <div class="mui-media-body">图片分享</div>
        </router-link>
        
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/goods/goodsList">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.mint-swipe {
  height: 250px;
  width: 100%;
}
img {
  height: 100%;
  width: 100%;
}
/** 九宫格的样式 **/
.mui-icon::before {
  content: "";
}
.mui-icon {
  width: 50px;
  height: 50px;
}

.mui-icon-home {
  background-image: url("../../statics/images/menu3.png");
  background-size: cover;
}

.mui-icon-email {
  background-image: url("../../statics/images/menu4.png");
  background-size: cover;
}

.mui-icon-chatbubble {
  background-image: url("../../statics/images/menu5.png");
  background-size: cover;
}

.mui-icon-location {
  background-image: url("../../statics/images/menu6.png");
  background-size: cover;
}

.mui-icon-search {
  background-image: url("../../statics/images/menu9.png");
  background-size: cover;
}

.mui-icon-phone {
  background-image: url("../../statics/images/menu10.png");
  background-size: cover;
}

.mui-grid-view.mui-grid-9 {
  background-color: #ffffff;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0px;
}
</style>


<script>
// 导入common.js
import common from "../../common/common.js";

// es5
// module.exports={}

// es6
export default {
  // es5
  // data:function(){
  //     return{}
  // }

  // es6
  data() {
    return {
      // 轮播图数组
      lunboArray: []
    };
  },
  // Vue底层给我们提供的生命周期函数之一，只要程序员实现了，Vue底层在home.vue组件被创建出来的时候，就会自动调用它
  created() {
    // console.log("111111111");
    this.getLunboData();
  },
  methods: {
    getLunboData() {
      // const url = common.apihost+"/api/getlunbo";
      // es6 字符串模板
      const url = `${common.apihost}api/getlunbo`;
      this.$http.get(url).then(
        res => {
          console.log(res.body.message);
          this.lunboArray = res.body.message;
        },
        err => {}
      );
    }
  }
};
</script>