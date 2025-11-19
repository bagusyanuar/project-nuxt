import { addCollection } from '@iconify/vue'
import lucideIcons from '@iconify-json/lucide/icons.json'

export default defineNuxtPlugin(() => {
  addCollection(lucideIcons)
})
