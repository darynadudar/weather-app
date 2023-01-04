<template>
  <div class="hourly-weather">
    <div
        v-for="item in hourlyWeatherFiltered"
        :key="item.time"
    >
      <p>
        {{ item.time.split(' ')[1] }}
      </p>
      <p>
        {{item.condition.text}}
      </p>
      <p>
        {{ Math.round(item.temp_c) }}&#176;
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: "hourlyWeather",
  props: {
    hourlyWeather: null,
  },
  computed: {
    hourlyWeatherFiltered() {
      return this.hourlyWeather[0].hour.filter((item, index) => index % 2)
    }
  }
}
</script>

<style scoped lang="scss">
.hourly-weather {
  display: flex;
  justify-content: space-between;
}
</style>