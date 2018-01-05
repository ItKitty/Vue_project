<template>
   <div>
       
   </div>
</template>
   
<style scoped>
   
</style>
   
<script>
   import common from '../../common/common.js'
   
   export default {
       data() {
           return {
               goodsList:[]
           }
       },
       created() {
           this.getGoodsListData()
       },
       methods: {
           getGoodsListData(){
            // 拿到仓库中的原始数据
            const originalGoodsList=this.$store.getters.getGoodsList;
            // console.log(originalGoodsList)
            if(originalGoodsList.length<=0) return;

            var tempObj={};
            for(var i=0;i< originalGoodsList.length;i++){
                var goods=originalGoodsList[i];
                if(tempObj[goods.goodsId]){
                    tempObj[goods.goodsId]+=goods.count
                }else{
                    tempObj[goods.goodsId]=goods.count
                }
            }

            // 遍历对象 把数值取出
            var tempArr=[];
            for(var k in tempObj){
                tempArr.push(k)
            }

            // 转化成字符串
            const ids=tempArr.join(',');

            // 发送网络请求
            const url = `${common.apihost}api/goods/getshopcarlist/${ids}`
            this.$http.get(url).then(res=>{
                // 给返回的值加上count
                res.body.message.forEach(item=>{
                    item.count=tempObj[item.id]
                })
                console.log(res);
                this.goodsList=res.body.message
            }).catch(err=>{

            })
           }
       }
   }
</script>
