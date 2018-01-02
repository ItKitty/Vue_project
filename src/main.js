// 导入Vue安装包
import Vue from 'vue';

// 导入mint-ui
import Mint from 'mint-ui';
// 导入路由
import VueRouter from 'vue-router';
// 导入网络请求 get,post,jsonp
import VueResource from 'vue-resource';
// 时间插件
import moment from 'moment';
// 图片预览包
import VuePreview from 'vue-preview';


// 基于Vue的包需要设置一下
// 它会帮我们注册mint中一些组件，不需要导入就能在所有的vue中的template使用
Vue.use(Mint);
// 动态路由 Vue.prototype.$route（路径）    Vue.prototype.$router(路由跳转)
Vue.use(VueRouter);
// 发送网络请求 get,post,jsonp
Vue.use(VueResource);
// 图片预览
Vue.use(VuePreview);

// 导入css
// 上线导入style.min.css
import 'mint-ui/lib/style.css'
// 导入mui样式和ziti
import './statics/mui/css/mui.css'
import './statics/css/site.css'


// es6 写法
import App from './App.vue';

// 过滤器
Vue.filter('fmtDate', (input, fmtStr = "YYYY-MM-DD HH:mm:ss") => {
    // const lastFmtStr=fmtStr||"YYYY-MM-DD HH:mm:ss";

    // 第一个参数：要格式化的原声字符串
    // 第二个参数：要格式化成的日期格式
    // return monent(input).format(lastFmtStr)
    return moment(input).format(fmtStr)
})



// 路由相关
// 导入相关组件
import home from './components/home/home.vue';
import category from './components/category/category.vue';
import shopcart from './components/shopcart/shopcart.vue';
import newsList from './components/news/newsList.vue';
import newsinfo from './components/news/newsinfo.vue';
import photoList from './components/photo/photoList.vue';
import photoInfo from './components/photo/photoInfo.vue';

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
        }
    ]
})





// 创建一个根实例
new Vue({

    router,

    // 渲染根组件 这个方法从导入的 Vue这个包中获得 渲染函数 h 可以代替 creElement
    // render:function(creElement){
    //     return creElement(App)
    // }
    // es6 的箭头函数
    render: h => h(App)
}).$mount('#app')