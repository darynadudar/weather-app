<template>
  <h1>Weather App</h1>
  <p>Your location: {{ ipInfo.city }}</p>
  <div>
<!--    <p v-if="currentWeather.temp_c">{{currentWeather.temp_c}}</p>-->
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: 'App',
  data() {
    return {
      API_KEY: 'a32967cbc7c04d1d982213031223012',
      ipInfo: {},
      currentWeather: null,
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
          .then(response => this.currentWeather = response.data.current)
    },
  },
}
</script>

<style>

</style>
