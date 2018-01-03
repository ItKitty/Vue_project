<template>
  <div>
    <!-- 1.0 轮播 -->
    <div>
      <subswipe :lunbo_url="'api/getthumimages/'+$route.params.goodsId" :lunbo_time="1000"></subswipe>
    </div>

    <!-- 2.0 商品信息 -->
    <div class="goodsInfoStyle">
      <h5>{{goodsInfo.title}}</h5>
      <p>
        市场价:
        <del>￥{{goodsInfo.market_price}}</del>&nbsp;销售价:￥
        <span>{{goodsInfo.sell_price}}</span>
      </p>

      <!-- 插入数字子组件 v-on 监听子组件穿过来的数值-->
      <subnumber @countChange="getCountChange"></subnumber>
      <mt-button size="small" type="primary">立即购买</mt-button>
      <mt-button size="small" @click="addToShopCart" type="danger">加入购物车</mt-button>
    </div>

    <!-- 3.0 商品参数 -->
    <div class="goodsParamsStyle">
      <h6>商品参数</h6>
      <ul>
        <li>商品货号:{{goodsInfo.goods_no}}</li>
        <li>
          库存情况:剩余{{goodsInfo.stock_quantity}}件
        </li>
        <li>
          上架时间:{{goodsInfo.add_time | fmtDate}}
        </li>
      </ul>
    </div>

    <!-- 4.0 图文介绍&商品评论 -->
    <div class="pictureAndTextStyle">
      <mt-button size="large" @click="goToPictureAndText" :plain="true" type="primary">图文介绍</mt-button>
      <mt-button size="large" @click="goToGoodsComment" class="goodsCommentStyle" plain type="danger">商品评论</mt-button>
    </div>

  </div>
</template>
   
<style scoped>
.lunboStyle,
.goodsInfoStyle,
.goodsParamsStyle,
.pictureAndTextStyle {
  margin: 6px;
  padding: 6px;
  border: 1px solid rgba(92, 92, 92, 0.3);
  border-radius: 5px;
}

h5 {
  font-size: 16px;
  color: #0094ff;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(92, 92, 92, 0.3);
}

.goodsInfoStyle p span {
  font-size: 16px;
  color: red;
}

h6 {
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(92, 92, 92, 0.3);
}

.goodsParamsStyle ul {
  margin: 0px;
  padding: 0px;
  list-style: none;
}

.goodsParamsStyle ul li {
  font-size: 14px;
  color: gray;
}

.goodsCommentStyle {
  margin-top: 15px;
}
</style>
   
<script>
import common from "../../common/common.js";
// 导入轮播子组件
import subswipe from "../subcomponents/subswipe.vue";
// 调用数字插件
import subnumber from '../subcomponents/subnumber.vue';
// 导入空的vue对象作为事件总线
import bus from '../../common/commonvue'

export default {
  data() {
    return {
      goodsInfo: {},
      goodsCount:1
    };
  },
  created() {
    this.getGoodsInfoData();
  },
  methods: {
    // 获取商品详情数据
    getGoodsInfoData() {
      const url = `${common.apihost}api/goods/getinfo/${this.$route.params
        .goodsId}`;

      // 1.x vue-resource
      // this.$http.get(url).then(res => {
      //     console.log(res);
      //     this.goodsInfo = res.body.message;
      //   })
      //   .catch(err => {});

      // 2.x
      this.$axios
        .get(url)
        .then(res => {
          console.log(res);
          this.goodsInfo = res.data.message[0];
        })
        .catch(err => {});
    },
    // 页面跳转-图文介绍
    goToPictureAndText() {
      this.$router.push({
        name:'pictureAndText',
        query:{goodsId:this.$route.params.goodsId}
      })
    },
    // 页面跳转-评论
    goToGoodsComment() {
      this.$router.push({
        path: "/goods/goodsComment",
        query: { goodsId: this.$route.params.goodsId }
      });
    },
    // 触发自定义事件（countchange）要执行的函数 count的值 有子组件传递过来
    getCountChange(count){
      this.goodsCount=count
    },
    addToShopCart() {
      // 传值给app.vue
      bus.$emit('goodsCount',this.goodsCount)
    }
  },
  components: {
    subswipe,
    subnumber
  }
};
</script>