<template>
    <div>
        <!-- 1.0 图片分类 -->
        <div class="photoCategoryStyle">
            <ul>
                <li @click="getPhotoListByCategoryId(0)">全 部</li>
                <li v-for="item in photoCatogoryList" @click="getPhotoListByCategoryId(item.id)" :key="item.id">{{item.title}}</li>
            </ul>
        </div>

        <!-- 2.0 图片列表 -->
        <div class="photoListStyle">
            <ul>
                <li v-for="item in photoList" :key="item.id">
                    <router-link :to="'/photo/photoinfo/'+item.id">
                        <!-- 图片 -->
                        <img :src="item.img_url" alt="">
                        <!-- 显示标题和摘要的p标签 -->
                        <p class="titleAndZhaiyaoStyle">
                            <span>{{item.title}}</span><br/> {{item.zhaiyao}}
                        </p>
                    </router-link>
                </li>
            </ul>
        </div>

    </div>
</template>
   
<style scoped>
.photoCategoryStyle {
  overflow-x: auto;
}

.photoCategoryStyle ul {
  margin: 2px 3px;
  padding: 0px 0px 12px 0px;
  white-space: nowrap;
}

.photoCategoryStyle ul li {
  list-style: none;
  margin: 0px 3px;
  color: #0094ff;
  display: inline-block;
}

.photoListStyle ul {
  margin: 2px;
  padding: 0px 2px;
}

.photoListStyle ul li {
  list-style: none;
  position: relative;
}

img {
  width: 100%;
  height: 400px;
}

.titleAndZhaiyaoStyle {
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  color: white;
  left: 3px;
  bottom: 0px;
}

.titleAndZhaiyaoStyle span {
  font-size: 16px;
  font-weight: 700;
}
</style>
   
<script>
import common from "../../common/common.js";
import { Indicator } from "mint-ui";
export default {
  data() {
    return {
      photoCatogoryList: [],
      photoList: []
    };
  },
  created() {
    this.getImgCategoryData();
    this.getPhotoListByCategoryId(0);
  },
  methods: {
    //    发送网络请求 获取图片分类数据
    getImgCategoryData() {
      const url = `${common.apihost}api/getimgcategory`;
      this.$http
        .get(url)
        .then(res => {
          //   console.log(res);
          this.photoCatogoryList = res.body.message;
        })
        .catch(err => {});
    },
    //    根据id获取图片对应数据
    getPhotoListByCategoryId(categoryId) {
      const url = `${common.apihost}api/getimages/${categoryId}`;
      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });

      this.$http
        .get(url)
        .then(res => {
          Indicator.close();
          this.photoList = res.body.message;
        })
        .catch(err => {
          Indicator.close();
        });
    }
  }
};
</script>