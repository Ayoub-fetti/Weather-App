<template>
  <div class="search-container p-4">
    <h2 class="text-xl font-bold mb-4">Search Weather</h2>
    <div class="flex gap-2">
      <input
        v-model="searchCity"
        @keyup.enter="searchWeather"
        type="text"
        placeholder="Enter city name..."
        class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        @click="searchWeather"
        :disabled="!searchCity.trim()"
        class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { weatherService } from '../services/weatherService.js'

const searchCity = ref('')

const emit = defineEmits(['weather-data'])

const searchWeather = async () => {
  if (!searchCity.value.trim()) return
  
  try {
    const weatherData = await weatherService.getCurrentWeather(searchCity.value)
    emit('weather-data', weatherData)
    searchCity.value = ''
  } catch (error) {
    alert('City not found. Please try again.')
  }
}
</script>