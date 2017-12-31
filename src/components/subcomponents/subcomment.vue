<template>
    <div>
        <!-- 1.0 提交评论 -->
        <div class="postComment">
            <h4>提交评论</h4>
            <textarea placeholder="请输入评论内容" name="" id="textareaId" cols="30" rows="10"></textarea>
            <mt-button @click="postComent" type="primary">提交评论</mt-button>
        </div>
        <!-- 2.0 评论区域 -->
        <div class="commentList">
            <h4>评论列表</h4>
            <div v-for="(item,i) in commentList" :key="i" class="commentItem">
                <p>{{item.content}}</p>
                <p class="userAndTime">
                    <span>{{item.user_name}}</span>
                    <span>{{item.add_time | fmtDate}}</span>
                </p>
            </div>
            <mt-button @click="loadMore" class="loadMore" plain type="danger">加载更多</mt-button>
        </div>
    </div>
</template>

<style scoped>
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
import common from "../../common/common"
import $ from "jquery"

export default {
    data(){
        return{
            pageindex=1,
            commentList:[]
        }
    },
  props: ["commentId"],
  created(){
      this.getCommonListData()
  },
  methods:{
      getCommonListData(){
          const url =`${common.apapihost}api/getcomments/${this.comentId}?pageindex=${this.pageindex}`

          this.$http.get(url).then(res=>{
              if(this.pageindex==1){
                  this.commentList=res.body.message
              }else{
                  this.commentList=this.commentList.concat(res.body.message)
              }
          }).catch(err=>{

          })
      },
      loadMore(){
          this.pageindex++;
            this.getCommonListData();
      },
         //  提交评论
      postComent(){
          const content=$("textareaId").val();

      }
  }
};
</script>