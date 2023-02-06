import Axios from "axios";

const BASE_URL = 'https://api.weatherapi.com/v1';

export default {
  state: {
    API_KEY: 'a32967cbc7c04d1d982213031223012',
    ipData: {},
    forecastData: [],
  },
  actions: {
    getIpData({commit, state}) {
      Axios.get(`${BASE_URL}/ip.json?key=${state.API_KEY}&q=auto:ip`)
        .then(response => {
          commit('setIpData', response.data)
        })
    },
    getForecastData({commit, state}) {
      Axios.get(`${BASE_URL}/forecast.json?key=${state.API_KEY}&q=auto:ip`)
        .then(response => {
          commit('setForecastData', response.data)
        })
    },
    // getForecastData({commit, state}) {
    //   Axios.get(`${BASE_URL}/forecast.json?key=${state.API_KEY}&q=auto:ip`)
    //     .then(response => {
    //       commit('setForecastData', response.data)
    //     })
    // },
  },
  mutations: {
    setIpData(state, payload) {
      state.ipData = payload;
    },
    setForecastData(state, payload) {
      state.forecastData = payload;
    },
  },
}
