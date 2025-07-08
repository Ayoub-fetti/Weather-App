<script setup lang="ts">
import { ref } from 'vue'
import WeatherCard from './views/WeatherCard.vue'
import SearchBar from './views/SearchBar.vue'

const weatherData = ref(null)
const errorMessage = ref(null)

const handleWeatherData = (data) => {
  weatherData.value = data
}
const handleError = (error) => {
  errorMessage.value = error
}
</script>

<template>
  <div class="bg-[url(../assets/bg.jpg)] min-h-screen bg-cover bg-center bg-no-repeat">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold text-white text-center py-4 mb-8">Weather App</h1>
      <SearchBar @weather-data="handleWeatherData"  @error="handleError"/>
      <WeatherCard :weather-data="weatherData" :error-message="errorMessage"/>
    </div>
  </div>
</template>