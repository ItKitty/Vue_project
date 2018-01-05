import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router';

// 动态路由 Vue.prototype.$route（路径）    Vue.prototype.$router(路由跳转)
Vue.use(VueRouter);

// 路由相关
// 导入相关组件
import home from '../components/home/home.vue';
import category from '../components/category/category.vue';
import shopcart from '../components/shopcart/shopcart.vue';
import newsList from '../components/news/newsList.vue';
import newsinfo from '../components/news/newsinfo.vue';
import photoList from '../components/photo/photoList.vue';
import photoInfo from '../components/photo/photoInfo.vue';
import goodsList from '../components/goods/goodList.vue';
import goodsInfo from '../components/goods/goodsInfo.vue';
import goodsComment from '../components/goods/goodsComment.vue';
import pictureAndText from "../components/goods/pictureAndText.vue";

const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: "/home"
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/category',
            component: category
        },
        {
            path: '/shopcart',
            component: shopcart
        },
        {
            path: '/news/newsList',
            component: newsList
        },
        {
            path: '/news/newsinfo/:newsId',
            component: newsinfo
        },
        {
            path: '/photo/photoList',
            component: photoList
        },
        {
            path: '/photo/photoInfo/:imgId',
            component: photoInfo
        },
        {
            path: '/goods/goodsList',
            component: goodsList
        },
        {
            path: '/goods/goodsInfo/:goodsId',
            component: goodsInfo
        },
        {
            path: '/goods/goodsComment', //用query后面不用跟参数
            component: goodsComment
        },
        {
            name: 'pictureAndText',
            path: '/goods/pictureAndText', //用query后面不用跟参数
            component: pictureAndText
        }
    ]
})

export default router