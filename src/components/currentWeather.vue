<template>
  <div>
    <p v-if="currentWeather && currentWeather.temp_c">
      {{ currentWeather.temp_c }}&#176;
    </p>
  </div>
</template>

<script>

export default {
  name: "currentWeather",
  props: {
    currentWeather: null,
  },
  data() {
    return {
      today: '',
    }
  },
  mounted() {
    this.getDate();
  },
  methods: {
    getDate() {
     let date = new Date();
      this.today = date.toLocaleDateString('en-US', {
        weekday: 'long',
      });
      // var dd = String(today.getDate()).padStart(2, '0');
      // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      // var yyyy = today.getFullYear();
    }
  }
}
</script>

<style scoped>
p {
  font-family: 'Limelight', cursive;
  font-size: 48px;
}
</style>