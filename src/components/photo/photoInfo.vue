<template>
    <div>
        <!-- 1.0 标题 -->
        <div class="titleStyle">
            <h5>{{photoInfo.title}}</h5>
            <p>{{photoInfo.add_time | fmtDate("YYYY-MM-DD")}}&nbsp;{{photoInfo.click}}次浏览</p>
        </div>

        <!-- 2.0 缩略图部分 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li v-for="(item,index) in thumbImages" :key="index" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <img class="preview-img" height="100" :src="item.src" @click="$preview.open(index, thumbImages)">
            </li>
        </ul>

        <!-- 3.0 内容部分 -->
        <div class="contentStyle">
            <p v-html="photoInfo.content"></p>
        </div>

        <!-- 4.0 评论部分 -->
        <subComment :commentId="$route.params.imgId"></subComment>
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
</style>
   
<script>
import common from "../../common/common.js";
//    导入评论组件
import subComment from "../subcomponents/subcomment.vue";
export default {
  data() {
    return {
      photoInfo: {},
      // 图片缩略图
      thumbImages: []
    };
  },
  created() {
    this.getPhotoInfoData();
    this.getPhotoThumbImageData();
  },
  methods: {
    //   获取图片详情信息
    getPhotoInfoData() {
      const url = `${common.apihost}api/getimageInfo/${this.$route.params
        .imgId}`;

      this.$http
        .get(url)
        .then(res => {
          this.photoInfo = res.body.message[0];
        })
        .catch(err => {});
    },
    // 获取缩略图
    getPhotoThumbImageData() {
      const url = `${common.apihost}api/getthumimages/${this.$route.params
        .imgId}`;

      this.$http
        .get(url)
        .then(res => {
          res.body.message.forEach(item => {
            item.w = 600;
            item.h = 600;
          });
          this.thumbImages = res.body.message;
        })
        .catch(err => {});
    }
  },
  components: {
    subComment
  }
};
</script>