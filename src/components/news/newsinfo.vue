<template>
    <div>
        <div class="titleStyle">
            <h5>{{newsInfo.title}}</h5>
            <p>
                {{newsInfo.add_time | fmtDate}}&nbsp;&nbsp; {{newsInfo.click}}次浏览&nbsp;&nbsp; 分类:民生经济
            </p>
        </div>

        <div class="contentStyle">
            <span v-html="newsInfo.content"></span>
        </div>
    </div>
</template>

<style scoped>
.titleStyle,
.contentStyle {
  padding: 6px;
}

h5 {
  color: #0094ff;
  font-size: 16px;
}

.titleStyle {
  border-bottom: 1px solid rgba(92, 92, 92, 0.3);
}
</style>

<script>
// 导入公共的common.js
import common from "../../common/common";
export default {
  data() {
    return {
      newsInfo: {}
    };
  },
  created() {
    this.getNewInfoDate();
  },
  methods: {
    getNewInfoDate() {
      const url = `${common.apihost}api/getnew/${this.$route.params.newsId}`;

      this.$http.get(url).then(
        res => {
          this.newsInfo = res.body.message[0];
        },
        err => {}
      );
    }
  }
};
</script>