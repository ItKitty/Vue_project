<template>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
            <router-link to="">
                <img class="mui-media-object mui-pull-left" :src="item.img_url">
                <div class="mui-media-body">
                    <span class='mui'>{{item.title}}</span>
                    <p class="time">
                        <span>{{item.add_time}}</span>
                        <span>点击数{{item.click}}次</span>
                    </p>
                </div>
            </router-link>
        </li>
    </ul>
</template>

<style>
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
      const url = "http://vue.studyit.io/api/getnewslist";

      this.$http.get(url).then(
        res => {
          this.newList = res.body.message;
        },
        err => {}
      );
    }
  }
};
</script>