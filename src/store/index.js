import { createStore } from 'vuex'

export default createStore({
  state: {
    login: null
  },
  mutations: {
    autenticacaoLogin(state, payload){
      state.login = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
