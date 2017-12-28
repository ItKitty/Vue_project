// 导入Vue安装包
import Vue from 'vue';

// es6 写法
import App from './App.vue';

// 创建一个根实例
new Vue({
    // 渲染根组件 这个方法从导入的 Vue这个包中获得
    render:function(creElement){
        return creElement(App)
    }
}).$mount('#app')