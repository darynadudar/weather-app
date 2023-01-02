<template>
  <p>Your location: {{ ipInfo.city }}</p>
  <currentWeather
      :current-weather="currentWeatherObj"
  />
</template>

<script>

import Axios from "axios";
import CurrentWeather from "./components/currentWeather.vue";

export default {
  name: 'App',
  components: {CurrentWeather},
  data() {
    return {
      API_KEY: 'a32967cbc7c04d1d982213031223012',
      ipInfo: {},
      currentWeatherObj: null,
    }
  },

  mounted() {
    this.getLocation();
    setTimeout(() => {
    this.getCurrentWeather();
    }, 1000)
  },

  methods: {
    // getLocation() {
    //   Axios.get(`https://api.geoapify.com/v1/ipinfo?apiKey=${this.API_KEY}`)
    //       .then(response => this.location = response.data.location)
    getLocation() {
      Axios.get(`https://api.weatherapi.com/v1/ip.json?key=${this.API_KEY}&q=auto:ip`)
          .then(response => this.ipInfo = response.data)
    },
    getCurrentWeather() {
      Axios.get(`https://api.weatherapi.com/v1/current.json?key=${this.API_KEY}&q=${this.ipInfo.ip}`)
          .then(response => this.currentWeatherObj = response.data.current)
    },
  },
}
</script>

<style>

</style>
<script setup>
import './styles/style.scss';
</script>