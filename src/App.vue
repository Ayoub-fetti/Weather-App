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
  <div class="bg-[url(../assets/bg.jpg)] min-h-screen">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold text-white text-center py-4 mb-8">Weather App</h1>
      <SearchBar @weather-data="handleWeatherData" />
      <WeatherCard :weather-data="weatherData" />
    </div>
  </div>
</template>