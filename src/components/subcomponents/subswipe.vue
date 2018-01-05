<template>
    <div>
        <!-- 1.0 轮播图 -->
        <mt-swipe :auto="lunbo_time">
            <mt-swipe-item v-for="(item,index) in lunboArray" :key="index">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
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
</style>
   
<script>
import common from "../../common/common.js";

export default {
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
      const url = `${common.apihost}${this.lunbo_url}`;
      this.$http.get(url).then(
        res => {
            res.body.message.forEach(item => {
                if (item.src) {
                    item.img = item.src;
            }
          });
            // console.log(res.body.message);
          this.lunboArray = res.body.message;
        },
        err => {}
      );
    }
  },
  props: ["lunbo_url", "lunbo_time"]
};
</script>