<template>
  <div class="weather-app">
    <div class="container">
      <p>{{ ipInfo.city }}</p>
      <div class="weather-app__current-weather">
        <currentWeather
            v-if="currentHourlyWeather"
            :currentWeather="currentHourlyWeather.current"
            :location="currentHourlyWeather.location"
        />
      </div>
      <hourlyWeather
          v-if="currentHourlyWeather"
          :hourlyWeather="currentHourlyWeather.forecast.forecastday"
      />
    </div>
  </div>
</template>

<script>

import Axios from "axios";
import currentWeather from "./components/currentWeather/currentWeather.vue";
import hourlyWeather from "./components/hourlyWeather/hourlyWeather.vue";

export default {
  name: 'App',
  components: {
    currentWeather,
    hourlyWeather
  },
  data() {
    return {
      API_KEY: 'a32967cbc7c04d1d982213031223012',
      ipInfo: {},
      currentHourlyWeather: null,
    }
  },

  mounted() {
    Axios.get(`https://api.weatherapi.com/v1/ip.json?key=${this.API_KEY}&q=auto:ip`)
        .then(response => {
          this.ipInfo = response.data

          this.getCurrentHourlyWeather();
        })
  },

  methods: {
    getCurrentHourlyWeather() {
      Axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${this.API_KEY}&q=${this.ipInfo.ip}`)
          .then(response => this.currentHourlyWeather = response.data)
    },
  },
}
</script>

<script setup>
import './styles/style.scss';
</script>

<style lang="scss">

.container {
  max-width: 1280px;
  margin: 0 auto;
}

.weather-app {
  background-color: #F2DAC4;
  //background-color: #BF4E24;
  height: 100vh;

  &__current-weather {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>