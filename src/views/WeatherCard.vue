<template>
  <div class="weather-card p-6 max-w-md mx-auto">
    <div v-if="weatherData" class="bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-2xl font-bold mb-2">{{ weatherData.name }}, {{ weatherData.sys.country }}</h2>
      <div class="flex items-center justify-between mb-4">
        <div>
          <p class="text-4xl font-bold">{{ Math.round(weatherData.main.temp) }}°C</p>
          <p class="text-gray-600 capitalize">{{ weatherData.weather[0].description }}</p>
        </div>
        <img 
          :src="`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`"
          :alt="weatherData.weather[0].description"
          class="w-16 h-16"
        />
      </div>
      <div class="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p class="text-gray-600">Feels like</p>
          <p class="font-semibold">{{ Math.round(weatherData.main.feels_like) }}°C</p>
        </div>
        <div>
          <p class="text-gray-600">Humidity</p>
          <p class="font-semibold">{{ weatherData.main.humidity }}%</p>
        </div>
        <div>
          <p class="text-gray-600">Wind Speed</p>
          <p class="font-semibold">{{ weatherData.wind.speed }} m/s</p>
        </div>
        <div>
          <p class="text-gray-600">Pressure</p>
          <p class="font-semibold">{{ weatherData.main.pressure }} hPa</p>
        </div>
      </div>
    </div>
    <div v-else class="text-center text-gray-500">
      <p>Search for a city to see weather information</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  weatherData: {
    type: Object,
    default: null
  }
})
</script>