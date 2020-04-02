import axios from 'axios'

const state = () => ({
  user: null,
  token: null
})

const mutations = {
  SET_USER (state, user) {
    state.user = user || null
  },
  SET_TOKEN (state, token) {
    state.token = token || null
  }
}

const actions = {
  async POST_LOGIN ({ commit }, { username, password }) {
    return axios.post(`https://www.spesolution.com/trial/secret-key`,
    { 
      username,
      password
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then ((res) => {
      return res
    })
    .catch((err) => {
      return err.response
    })
  },
  async POST_WEATHER ({ commit }) {
    return axios.post(`https://www.spesolution.com/trial/get-weather`,
    {
      resource_type:'get_weather'
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'YXNyaTYxOGZ5NDpFZkpLclRpa2c3UVZqZXFP',
        'Authorization': 'Bearer IIZpcmaNS38GDY0fa8khShoHK5nbfWkx'
      }
    })
    .then ((res) => {
      return res
    })
    .catch((err) => {
      return err.response
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}