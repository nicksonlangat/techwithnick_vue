import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/services/Api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    
  async fetchProjects({commit}, { cb }) {
  try {
    const response = await Api()
      .get('/api/projects/?is_clone=false')
    if (cb) {
      cb(response.data.results)
    }
  } catch (error) {
    return await Promise.reject(error)
  }
},

async fetchCloneProjects({commit}, { cb }) {
  try {
    const response = await Api()
      .get('/api/projects/')
    if (cb) {
      cb(response.data.results)
    }
  } catch (error) {
    return await Promise.reject(error)
  }
},

async fetchArticles({commit}, { cb }) {
  try {
    const response = await Api()
      .get('https://dev.to/api/articles?username=nick_langat')
    if (cb) {
      cb(response.data)
    }
  } catch (error) {
    return await Promise.reject(error)
  }
},
  },
  modules: {
  }
})
