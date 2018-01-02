<template>
    <div>
        <!-- 1.0 轮播 -->
        <div>
            <subswipe :lunbo_url="'api/getthumimages/'+$route.params.goodsId" :lunbo_time="1000"></subswipe>
        </div>
    </div>
</template>
   
<style scoped>

</style>
   
<script>
import common from "../../common/common.js";
// 导入轮播子组件
import subswipe from "../subcomponents/subswipe.vue";

export default {
  data() {
    return {
      goodsInfo: {}
    };
  },
  created() {
    this.getGoodsInfoData();
  },
  methods: {
    getGoodsInfoData() {
      const url = `${common.apihost}api/goods/getinfo/${this.route.params
        .goodsId}`;

      this.$http
        .get(url)
        .then(res => {
          console.log(res);
          this.goodsInfo = res.body.message;
        })
        .catch(err => {});
    }
  },
  components: {
    subswipe
  }
};
</script>