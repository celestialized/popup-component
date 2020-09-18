import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    display: 1,
    productCardContent: [],
  },
  getters:{
    display() {
      return this.state.display
    }
  },
  mutations: {
    openShop() {
      this.state.display = 2
    },
    close() {
      this.state.display--
    },
    showCard(content) {
      this.state.productCardContent = []
      this.state.productCardContent = content
      this.state.display = 3
    },
  },
  actions: {

  }
})
