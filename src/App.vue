<template>
  <div>
    <!-- 1.0 头部 Header -->
    <mt-header fixed title="固定在顶部"></mt-header>
    <div @click="goback" v-show="isShowBack" class="back">&lt;返回</div>
    <!-- 2.0 中间部 -->
    <router-view style="margin-top:40px"></router-view>
    <!-- 3.0 底部 Tabbar -->
    <mt-tabbar :class="isShowTabBar?'':'hiddenTabBar'" fixed>
      <mt-tab-item>
        <router-link to="/home">
          <img src="http://img08.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png">
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="/category">
          <img src="http://img07.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png">
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="/shopcart">
          <img src="http://img08.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png">
          <span v-show="badge>0" class="mui-badge mui-badge-danger">{{badge}}</span>
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="">
          <img src="http://img09.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png">
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>


<style scoped>
img {
  width: 42px;
  height: 35px;
}
.mint-tabbar .mint-tab-item.is-selected {
  background-color: #fafafa;
  position: relative;
}
.hiddenTabBar {
  display: none;
}
.back {
  color: white;
  font-size: 16px;
  font-weight: 700;
  position: fixed;
  left: 6px;
  top: 10px;
  z-index: 2;
}
/**
    数字角标
  */
.mui-badge {
  position: absolute;
  top: 5px;
  left: 50%;
  background-color: red;
  color: white;
}
</style>

<script>
// 导入公共bus
import bus from "./common/commonvue";

export default {
  data() {
    return {
      isShowBack: false,
      isShowTabBar: true,
      badge: 0
    };
  },
  methods: {
    goback() {
      // history.back()
      this.$router.go(-1);
    },
    isShowOrHidden(path) {
      if (path != "/home") {
        this.isShowBack = true;
        this.isShowTabBar = false;
      } else {
        this.isShowBack = false;
        this.isShowTabBar = true;
      }
    }
  },
  created() {
    this.isShowOrHidden(this.$route.path);

    // 保存从goodsInfo中传入的值，因为函数中的this指向的是自身，所以
    // 方式1 设置一个值保存this
    // const _this=this;
    // bus.$on('goodsCount',function(goodsCount){
    //   _this.badge +=goodsCount
    // })

    // 方式2 bind
    // bus.$on('goodsCount',function(goodsCount){
    //   this.badge +=goodsCount
    // }.bind(this))

    // 方式3 箭头函数
    // bus.$on('goodsCount',(goodsCount)=>{
    //   this.badge +=goodsCount
    // })
  },
  updated() {
    this.badge = this.$store.getters.getTotalCount;
  },
  watch: {
    $route(newValue, oldValue) {
      this.isShowOrHidden(newValue.path);
    }
  }
};
</script>