<script setup lang="ts">
import { ref } from 'vue'
import WeatherCard from './views/WeatherCard.vue'
import SearchBar from './views/SearchBar.vue'

const weatherData = ref(null)
const errorMessage = ref(null)
const isLoading = ref(false)

const handleWeatherData = (data) => {
  weatherData.value = data
}
const handleError = (error) => {
  errorMessage.value = error
}

const handleLoading = (loading) => {
  isLoading.value = loading
}
</script>

<template>
  <div class=" relative bg-[url(../assets/bg.jpg)] min-h-screen bg-cover bg-center bg-no-repeat">
    <div class="absolute inset-0 bg-black opacity-50 z-0"></div>
    <div class="container mx-auto px-4 relative z-10">
      <h1 class="text-4xl font-bold text-white text-center py-4 mb-8">Weather App</h1>
      <SearchBar @weather-data="handleWeatherData"  @error="handleError" @loading="handleLoading"/>
      <WeatherCard :weather-data="weatherData" :error-message="errorMessage" :is-loading="isLoading"/>
    </div>
  </div>
</template>