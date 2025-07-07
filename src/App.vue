<script setup lang="ts">
import { ref } from 'vue'
import WeatherCard from './views/WeatherCard.vue'
import SearchBar from './views/SearchBar.vue'

const weatherData = ref(null)

const handleWeatherData = (data) => {
  weatherData.value = data
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 py-8">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold text-white text-center mb-8">Weather App</h1>
      <SearchBar @weather-data="handleWeatherData" />
      <WeatherCard :weather-data="weatherData" />
    </div>
  </div>
</template>