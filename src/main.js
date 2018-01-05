// 导入Vue安装包
import Vue from 'vue';

// 导入mint-ui
import Mint from 'mint-ui';

// 导入网络请求 get,post,jsonp
import VueResource from 'vue-resource';
// 时间插件
import moment from 'moment';
// 图片预览包
import VuePreview from 'vue-preview';
// 上啦加载 下拉刷新
import {
    Loadmore
} from 'mint-ui';

Vue.component(Loadmore.name, Loadmore);

//
import axios from "axios";
Vue.prototype.$axios = axios;

// 基于Vue的包需要设置一下
// 它会帮我们注册mint中一些组件，不需要导入就能在所有的vue中的template使用
Vue.use(Mint);
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

// 导入路由
import router from './router/router'

// 导入Vuex
import store from './vuex/store'

// 创建一个根实例
new Vue({

    router,
    store,
    // 渲染根组件 这个方法从导入的 Vue这个包中获得 渲染函数 h 可以代替 creElement
    // render:function(creElement){
    //     return creElement(App)
    // }
    // es6 的箭头函数
    render: h => h(App)
}).$mount('#app')