<template>
    <div>
        <!-- 1.0 轮播图 -->
        <mt-swipe>
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
    console.log("111111111");
    this.getLunboData();
  },
  methods: {
    getLunboData() {
      const url = "http://vue.studyit.io/api/getlunbo";
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