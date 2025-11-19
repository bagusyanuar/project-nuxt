import axios from 'axios'

export default defineNuxtPlugin(() => {
  const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 10000
  })

  return {
    provide: {
      axios: instance
    }
  }
})
