import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    homeGoods: {
      pop: {
        page: 0,
        list: [],
      },
      new: {
        page: 0,
        list: [],
      },
      sell: {
        page: 0,
        list: [],
      },
    },
    homeMethods: {
      fillGoods: null,
    },
  },
  mutations: {
    addGoods(state, payload) {
      state.homeGoods[payload.type].page;
      state.homeGoods[payload.type].list.push(...payload.goods);
    },
  },
  actions: {
    addGoods(context, payload) {
      context.commit("addGoods", payload);
    },
  },
});

export default store;
