import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {};
  },
  mutations: {},
  actions: {
    async fetchCoinList() {
      const coins = await fetch(
        'https://min-api.cryptocompare.com/data/all/coinlist?summary=true'
      );
      return await coins.json();
    }
  },
  getters: {}
});

export default store;
