import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        inCart: []
    },
    getters: {
        inCart: state => state.inCart
    },
    mutations: {
        addToCart(context, invId) { context.commit('ADD_TO_CART', invId);
        }
     },
    actions: {
        ADD_TO_CART(state, invId) { state.inCart.push(invId); }
    }
})



