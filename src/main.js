// 导入Vue安装包
import Vue from 'vue';

// 导入mint-ui
import Mint from 'mint-ui';

// 基于Vue的包需要设置一下
// 它会帮我们注册mint中一些组件，不需要导入就能在所有的vue中的template使用
Vue.use(Mint);

// 导入css
// 上线导入style.min.css
import 'mint-ui/lib/style.css'


// es6 写法
import App from './App.vue';

// 创建一个根实例
new Vue({
    // 渲染根组件 这个方法从导入的 Vue这个包中获得 渲染函数 h 可以代替 creElement
    // render:function(creElement){
    //     return creElement(App)
    // }
    // es6 的箭头函数
    render: h => h(App)
}).$mount('#app')