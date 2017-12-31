<template>
    <div>
        <!-- 1.0 头部 Header -->
        <mt-header fixed title="固定在顶部"></mt-header>
        <div @click="goback" v-show="isShowBack" class="back">&lt;返回</div>
        <!-- 2.0 中间部 -->
        <router-view style="margin-top:40px"></router-view>
        <!-- 3.0 底部 Tabbar -->
        <mt-tabbar :class="isShowTabBar?'':'hiddenTabBar'" fixed>
            <mt-tab-item>
                <router-link to="/home">
                    <img src="http://img08.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png">
                </router-link>
            </mt-tab-item>
            <mt-tab-item>
                <router-link to="/category">
                    <img src="http://img07.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png">
                </router-link>
            </mt-tab-item>
            <mt-tab-item>
                <router-link to="/shopcart">
                    <img src="http://img08.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png">
                </router-link>
            </mt-tab-item>
            <mt-tab-item>
                <router-link to="">
                    <img src="http://img09.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png">
                </router-link>
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>


<style scoped>
img {
  width: 42px;
  height: 35px;
}
.mint-tabbar .mint-tab-item.is-selected {
  background-color: #fafafa;
}
.hiddenTabBar{
    display: none;
}
.back{
    color: white;
    font-size: 16px;
    font-weight: 700;
    position: fixed;
    left: 6px;
    top: 10px;
    z-index: 2;
}
</style>

<script>
    export default{
        data(){
            return{
                isShowBack:false,
                isShowTabBar:true
            }
        },
        methods:{
            goback(){
                // history.back()
                this.$router.go(-1)
            }
        },
        watch:{
            $route:function(newValue,oldValue){
                if(newValue.path!='/home'){
                    this.isShowBack=true;
                    this.isShowTabBar=false
                }else{
                    this.isShowBack=false;
                    this.isShowTabBar=true
                }
                console.log(newValue)
            }
        }
    }
</script>