import { useQuery } from '@tanstack/vue-query'

export const useInstallation = () => {
  const { $axios } = useNuxtApp()

  const fetchInstallation = async () => {
    try {
      const res = await $axios.get('/todos')
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  const query = useQuery({
    queryKey: ['findAll'],
    queryFn: async () => {
      const res = await $axios.get('/todos')
      console.log('fetching')
      console.log(res)

      return res.data
    },
    retry: 1,
    refetchOnWindowFocus: false
  })

  return {
    fetchInstallation,
    query
  }
}
