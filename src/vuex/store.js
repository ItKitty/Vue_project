import Vue from 'vue'

// 导入vuex
import Vuex from 'vuex'
//Vue.prototype.$store
Vue.use(Vuex)
// 创建一个仓库
const store = new Vuex.Store({
    state: {
        goodList: []
    },
    mutations: {
        // state是固定的，目的是为了拿到state中的数据
        addGoods(state, goods) {
            state.goodList.push(goods)
        },
        deleteGoodsId(state,goodsId){
            for(var i=state.goodList.length-1;i>=0;i--){
                var goods=state.goodList[i]
                if(goods.goodsId==goodsId){
                    state.goodList.splice(i,1)
                }
            }
        }

    },
    getters: {
        // 获取当前仓库中,商品列表总数量
        getTotalCount(state) {
            let totalCount = 0;
            state.goodList.forEach(item => {
                totalCount += item.count
            })
            return totalCount
        },
        // 获取加入到购物车中的数据
        getGoodsList(state){
            return state.goodList
        }
    }


})

export default store
