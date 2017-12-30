<template>
    <root>
        <!-- 1.0 头部 Header -->
        <mt-header fixed title="固定在顶部"></mt-header>
        <!-- 2.0 中间部 -->
        <!-- 3.0 底部 Tabbar -->
        <mt-tabbar>
            <mt-tab-item>
                <img src="http://img08.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png">
            </mt-tab-item>
            <mt-tab-item>
                <img src="http://img07.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png">
            </mt-tab-item>
            <mt-tab-item>
                <img src="http://img08.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png">
            </mt-tab-item>
            <mt-tab-item>
                <img src="http://img09.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png">
            </mt-tab-item>
        </mt-tabbar>
    </root>
</template>

<style>
    img{
        width:42px;
        height:35px;
    }
    .mint-tabbar .mint-tab-item.is-selected{
        background-color: #fafafa;
    }
</style>