<script setup>
const props = defineProps({
  weatherData: {
    type: Object,
    default: null
  },
  errorMessage: {
    type: String,
    default: null
  },
  isLoading: {
    type: Boolean,
    default: false
  }
})
</script>
<style>

</style>
<template>

  <div class="weather-card p-6 max-w-md mx-auto">
    <div v-if="weatherData" class="bg-transparent backdrop-blur-sm rounded-lg shadow-lg p-6 card">
      <h2 class="text-2xl text-white font-bold mb-2">{{ weatherData.name }}, {{ weatherData.sys.country }}</h2>
      <div class="flex items-center justify-between mb-4">
        <div>
          <p class="text-4xl font-bold">{{ Math.round(weatherData.main.temp) }}°C</p>
          <p class="text-white capitalize">{{ weatherData.weather[0].description }}</p>
        </div>
        <img 
          :src="`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`"
          :alt="weatherData.weather[0].description"
          class="w-16 h-16"
        />
      </div>
      <div class="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p class="text-white">Feels like</p>
          <p class="font-semibold">{{ Math.round(weatherData.main.feels_like) }}°C</p>
        </div>
        <div>
          <p class="text-white">Humidity</p>
          <p class="font-semibold">{{ weatherData.main.humidity }}%</p>
        </div>
        <div>
          <p class="text-white">Wind Speed</p>
          <p class="font-semibold">{{ weatherData.wind.speed }} m/s</p>
        </div>
        <div>
          <p class="text-white">Pressure</p>
          <p class="font-semibold">{{ weatherData.main.pressure }} hPa</p>
        </div>
      </div>
    </div>
    <div v-else class="text-center text-white font-semibold text-2xl">
      <p>Search for a city to see weather information</p>
    </div>
    <div v-if="isLoading" class="dots-container mt-4">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <div v-if="errorMessage" class="flex items-start gap-3 bg-red-100 border-l-4 border-red-500 text-red-800 px-4 py-3 rounded-lg mt-4 animate-pulse shadow-lg">
      <div>
        <p class="font-bold text-red-700">Oops!</p>
        <p class="text-sm">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>
