<template>
    <div>
        <!-- 1.0 标题部分 -->
        <div class="titleStyle">
            <h5>{{newsInfo.title}}</h5>
            <p>
                {{newsInfo.add_time | fmtDate}}&nbsp;&nbsp; {{newsInfo.click}}次浏览&nbsp;&nbsp; 分类:民生经济
            </p>
        </div>
        <!-- 2.0 内容部分 -->
        <div class="contentStyle">
            <span v-html="newsInfo.content"></span>
        </div>

        <!-- 3.0 评论部分 -->
        <subcomment :comment-id="$route.params.newsId"></subcomment>
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
// 导入子组件
import subcomment from "../subcomponents/subcomment.vue"

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
  },
  components:{
    //  名称是在template中使用的名称
    //   subcomment:subcomment
    subcomment
  }
};
</script>