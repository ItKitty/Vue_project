<template>

  <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" ref="loadmore">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
        <router-link :to="'/news/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <span class='mui'>{{item.title}}</span>
            <p class="time">
              <span>{{item.add_time | fmtDate("YYYY-MM-DD HH:mm:ss")}}</span>
              <span>点击数{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </mt-loadmore>
</template>

<style scoped>
.mui-table-view-cell.mui-media {
  height: 80px;
}

.mui-table-view .mui-media-object.mui-pull-left {
  height: 65px;
  max-width: 65px;
}
.mui {
  display: block;
  font-size: 14px;
  color: gray;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.time {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  color: #0094ff;
}
</style>


<script>
// 导入common.js
import common from "../../common/common.js";

import { Indicator } from "mint-ui";

export default {
  data() {
    return {
      // 新闻列表数据
      newList: []
    };
  },
  created() {
    this.getNewsListData();
  },
  methods: {
    getNewsListData() {
      // const url = common.apihost+"api/getnewslist";
      // es6 模板字符串
      const url = `${common.apihost}api/getnewslist`;
      
      this.$http.get(url).then(
        res => {
          this.newList = res.body.message;
        },
        err => {}
      );
    },
    loadTop() {
      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
      // this.newList = [];
      // setTimeout(function() {
      //   Indicator.close();
      //   console.log("上拉");
      // }, 3000);
      // this.getNewsListData();
      // 加载更多数据
      // this.$refs.loadmore.onTopLoaded();
    },
    loadBottom() {
      
      // 加载更多数据
      // this.allLoaded = true; // 若数据已全部获取完毕
      // this.$refs.loadmore.onBottomLoaded();
    }
  }
};
</script>