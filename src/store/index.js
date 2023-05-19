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
async fetchMessages({commit}, { cb }) {
  try {
    const response = await Api()
      .get('/api/messages/')
    if (cb) {
      cb(response.data.results)
    }
  } catch (error) {
    return await Promise.reject(error)
  }
},
async fetchNotifications({commit}, { read, cb }) {
  let url = '/api/notifications/'

  if (read != undefined) {
    url = `/api/notifications/?is_read=${read}`
  }

  try {
    const response = await Api()
      .get(url)
    if (cb) {
      cb(response.data.results)
    }
  } catch (error) {
    return await Promise.reject(error)
  }
},
async markRead({commit}, {id, data, cb }) {
  let url = `/api/notifications/${id}/`
  try {
    const response = await Api()
      .patch(url, data)
    if (cb) {
      cb(response.data.results)
    }
  } catch (error) {
    return await Promise.reject(error)
  }
},
async createMessage({commit}, { data, cb }) {
  try {
    const response = await Api()
      .post('/api/messages/', data)
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
