<template>
  <h1>Weather App</h1>
  <p>Your location {{location}}</p>
</template>

<script>
import Axios from "axios";

export default {
  name: 'App',
  data() {
    return {
      location: '',
    }
  },

  mounted() {
    Axios.get('https://api.geoapify.com/v1/ipinfo?apiKey=9a6caf62bd3540a882537eb4477d9381')
        .then(response => this.location = response)
  }
}
</script>

<style>

</style>
