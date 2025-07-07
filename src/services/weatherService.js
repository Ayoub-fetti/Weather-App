const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const BASE_URL = import.meta.env.VITE_WEATHER_API_URL

export const weatherService = {
  async getCurrentWeather(city) {
    try {
      const response = await fetch(
        `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      if (!response.ok) {
        throw new Error('Weather data not found')
      }
      return await response.json()
    } catch (error) {
      console.error('Error fetching weather data:', error)
      throw error
    }
  },

  async getWeatherByCoords(lat, lon) {
    try {
      const response = await fetch(
        `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      )
      if (!response.ok) {
        throw new Error('Weather data not found')
      }
      return await response.json()
    } catch (error) {
      console.error('Error fetching weather data:', error)
      throw error
    }
  }
}