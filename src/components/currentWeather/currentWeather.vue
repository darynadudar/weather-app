<template>
  <div class="current-weather">
    <div class="current-weather__temperature">
      <p v-if="currentWeather && currentWeather.temp_c">
        {{ Math.round(currentWeather.temp_c) }}&#176;
      </p>
    </div>
    <div class="current-weather__details">
      <div class="current-weather__date">
        <p class="current-weather__date-time">
          {{ location.localtime.split(' ')[1] }}
        </p>
        <p class="current-weather__date-day">
          {{ dayOfWeek }}
        </p>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "currentWeather",
  props: {
    currentWeather: null,
    location: null,
  },
  data() {
    return {
      dayOfWeek: '',
    }
  },
  mounted() {
    this.getDate();
  },
  methods: {
    getDate() {
      this.dayOfWeek = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
      });
    }
  }
}
</script>

<style scoped lang="scss">
.current-weather {
  display: flex;
  gap: 32px;

  &__temperature {
    font-family: 'Limelight', cursive;
    font-size: 144px;
    line-height: 1em;
  }

  &__date-day {
    font-size: 36px;
    font-weight: 600;
  }
}
</style>