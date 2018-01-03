<template>
    <div>
        <!-- 1.0 标题部分 -->
        <div class="titleStyle">
            <h4>{{pictureAndText.title}}</h4>
        </div>

        <!-- 2.0 内容部分 -->
        <div class="contentStyle">
            <p v-html="pictureAndText.content"></p>
        </div>
    </div>
</template>
   
<style>
p img{
width: 100%;
}

.titleStyle,
.contentStyle {
  padding: 6px;
}

h4 {
  font-size: 16px;
  color: #0094ff;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(92, 92, 92, 0.3);
}
</style>
   
<script>
import common from "../../common/common.js";

export default {
  data() {
    return {
      pictureAndText: {}
    };
  },
  created() {
    this.getPictureAndText();
  },
  methods: {
    getPictureAndText() {
      const url = `${common.apihost}api/goods/getdesc/${this.$route.query
        .goodsId}`;

      this.$axios.get(url).then(res => {
        console.log(res);
        this.pictureAndText = res.data.message[0];
      });
    }
  }
};
</script>