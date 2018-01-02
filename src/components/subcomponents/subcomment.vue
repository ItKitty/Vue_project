<template>
    <div>
        <!-- 1.0 提交评论 -->
        <div class="postComment">
            <h4>提交评论</h4>
            <textarea ref="textareaRef" placeholder="请输入评论内容" name="" id="textareaId" cols="30" rows="10"></textarea>
            <mt-button @click="postComent" type="primary" size="large">提交评论</mt-button>
        </div>
        <!-- 2.0 评论区域 -->
        <div class="commentList">
            <h4>评论列表</h4>
            <div v-for="(item,i) in commentList" :key="i" class="commentItem">
                <p class="contentStyle">{{item.content}}</p>
                <p class="userAndTime">
                    <span>{{item.user_name}}</span>
                    <span>{{item.add_time | fmtDate}}</span>
                </p>
            </div>
            <mt-button @click="loadMore" class="loadMore" plain type="danger" size="large">加载更多</mt-button>
        </div>
    </div>
</template>

<style scoped>
.contentStyle {
  font-size: 14px;
  color: black;
}
.postComment,
.commentList {
  padding: 6px;
}
h4 {
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(92, 92, 92, 0.3);
}
.commentItem {
  height: 100px;
  overflow-y: auto;
  border-bottom: 1px solid rgba(92, 92, 92, 0.3);
}
.userAndTime {
  color: #0094ff;
  margin-top: 45px;
  display: flex;
  justify-content: space-between;
}
.loadMore {
  margin-top: 15px;
}
</style>


<script>
//
import common from "../../common/common";
// import $ from "jquery"
//es6按需导入
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageindex: 1,
    //   content:'',
      commentList: []
    };
  },
  props: ["commentId"],
  created() {
    this.getCommonListData();
  },
  methods: {
    getCommonListData() {
      const url = `${common.apihost}api/getcomments/${this.commentId}?pageindex=${this.pageindex}`;

      this.$http
        .get(url)
        .then(res => {
          if (this.pageindex == 1) {
            this.commentList = res.body.message;
          } else {
            this.commentList = this.commentList.concat(res.body.message);
          }
        })
        .catch(err => {});
    },
    loadMore() {
      this.pageindex++;
      this.getCommonListData();
    },
    //  提交评论
    postComent() {
      // jq 获取元素
      // const content=$("textareaId").val();

      // refs获取元素
      const textareaDom = this.$refs.textareaRef;
    //   console.log(textareaDom);
      const content = textareaDom.value;

      if (content.trim().length == 0) {
        Toast({
          message: "评论内容不能为空",
          position: "middle",
          duration: 2000
        });
        return;
      }

      //发送网络请求
      const url = `${common.apihost}api/postcomment/${this.commentId}`;
      this.$http
        .post(url, { content }, { emulateJSON: true })
        .then(response => {
          //1.弹出提示信息，评论成功
          Toast({
            message: response.body.message,
            position: "middle",
            duration: 2000
          });

          //2.清空评论内容
          textareaDom.value = "";
            console.log(textareaDom.valu)
          //3.重新加载第一页的评论数据
          this.pageindex = 1;
          this.getCommonListData();
        })
        .catch(err => {});
    }
  }
};
</script>