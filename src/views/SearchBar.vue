
<script setup>
import { ref } from 'vue'
import { weatherService } from '../services/weatherService.js'

const searchCity = ref('')
const isLoading = ref(false)

const emit = defineEmits(['weather-data'])

const searchWeather = async () => {
  if (!searchCity.value.trim()) return

  isLoading.value = true
  emit('loading', true)

  setTimeout(async () =>{

    
    try {
      const weatherData = await weatherService.getCurrentWeather(searchCity.value)
      emit('weather-data', weatherData)
      emit('error', null)
      searchCity.value = ''
    } catch (error) {
      console.error('City not found. Please try again.')
      emit('error', 'City not found. Please try again.')
    } finally {
      isLoading.value = false
      emit('loading', false)
    }
  }, 800)
}
</script>
<template>
  <div  class="flex items-center justify-center px-4">
  <div class="search-container p-4 w-full max-w-md">
    <h2 class="text-xl text-white font-bold mb-4 text center">Search Weather</h2>
    <div class="flex flex-col sm:flex-row gap-4 w-full">
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
