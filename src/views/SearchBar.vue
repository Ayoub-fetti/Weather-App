
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
    emit('error', null)
    searchCity.value = ''
  } catch (error) {
    console.error('City not found. Please try again.')
    emit('error', 'City not found. Please try again.')
  }
}
</script>
<template>
  <div  class="flex items-center justify-center">
  <div class="search-container p-4">
    <h2 class="text-xl text-white font-bold mb-4">Search Weather</h2>
    <div class="flex gap-4 w-120">
      <input
        v-model="searchCity"
        @keyup.enter="searchWeather"
        type="text"
        placeholder="Enter city name..."
        class="flex-1 px-4 py-2 border-3 text-white border-white rounded-lg focus:outline-none focus:ring-3 focus:ring-blue-500 placeholder-white"
      />
      <button @click="searchWeather" :disabled="!searchCity.trim()" class="btn">
        <div class="svg-wrapper-1">
            <div class="i-wrapper">
              <i class="fa-solid fa-cloud"></i>
            </div>
         </div>
         <span>Search</span>
       </button>
    </div>
  </div>
  </div>

</template>
