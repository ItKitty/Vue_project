// 导入Vue安装包
import Vue from 'vue';

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