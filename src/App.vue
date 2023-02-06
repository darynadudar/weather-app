<template>
  <main class="forecast">
    <div class="container">
      <div class="flex">
        <div>
          <p>{{ ipData.city }}</p>
          <div class="forecast__current-weather">
            <currentWeather
                v-if="forecastData"
                :currentWeather="forecastData.current"
                :todayForecast="todayForecast"
                :location="forecastData.location"
            />
          </div>
          <hourlyForecast
              v-if="forecastData"
              :hourlyWeather="hourlyForecastData"
              :location="forecastData.location"
          />
        </div>
        <aside>
          <dailyForecast />
        </aside>
      </div>
    </div>
  </main>
</template>

<script>
import {mapState, mapActions} from "vuex";

import currentWeather from "./components/currentWeather/currentWeather.vue";
import hourlyForecast from "./components/hourlyForecast/hourlyForecast.vue";
import dailyForecast from "./components/dailyForecast/dailyForecast.vue";

export default {
  name: 'App',
  components: {
    currentWeather,
    hourlyForecast,
    dailyForecast
  },

  computed: {
    ...mapState({
      forecastData: state => state.baseModule.forecastData,
      ipData: state => state.baseModule.ipData,
    }),

    todayForecast() {
      return this.forecastData.forecast.forecastday[0].day;
    },
    hourlyForecastData() {
      return this.forecastData.forecast.forecastday[0].hour;
    },
  },

  created() {
    this.getIpData();
    this.getForecastData();
  },

  methods: {
    ...mapActions(['getIpData', 'getForecastData']),
  },
}
</script>

<style lang="scss">
@import './styles/style.scss';

.container {
  max-width: 1280px;
  margin: 0 auto;
}

.forecast {
  background-color: #F2DAC4;
  //background-color: #BF4E24;
  height: 100vh;

  &__current-weather {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flex {
    display: flex;
  }
}

</style>