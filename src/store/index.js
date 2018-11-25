import Vue from 'vue';
import Vuex from 'vuex';
import initialState from './state';

Vue.use(Vuex);

export default new Vuex.Store({
  state: initialState,
  mutations: {
    present(state, { childId, giftId }) {
      const { children, gifts } = state;
      const child = children.find(c => c.id === childId);
      const gift = gifts.find(g => g.id === giftId);
      if (!child || !gift || child.sock) {
        return;
      }
      state.gifts = gifts.filter(g => g.id !== gift.id);
      const isWishGift = child.wish && child.wish.id === gift.id;
      Vue.set(child, 'sock', gift);
      Vue.set(child, 'emotion', isWishGift ? 'laugh' : 'angry');
    },
  },
  getters: {
    gameStatus: state => {
      if (state.children.every(child => child.emotion === 'laugh')) {
        return 'success';
      }
      if (state.children.some(child => child.emotion === 'angry')) {
        return 'failure';
      }
      return 'normal';
    },
  },
});
