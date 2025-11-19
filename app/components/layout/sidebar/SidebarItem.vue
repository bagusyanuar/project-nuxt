<script setup lang="ts">
import { Icon } from '@iconify/vue';
interface ISidebarItemProps {
    to?: string
    text?: string
    icon?: string
}

withDefaults(defineProps<ISidebarItemProps>(), {
    to: '#',
    text: 'Menu',
    icon: 'lucide:circle'
})
</script>

<template>
    <NuxtLink :to="to"
        class="group relative px-3 py-3 w-full rounded-lg flex items-center gap-2 cursor-pointer hover:bg-white/20 transition-colors duration-300 ease-in-out">
        <Icon :icon="icon"
            class="text-white/80 h-4 aspect-square group-hover:text-white transition-colors duration-300 ease-in-out" />
        <span
            class="text-sm text-white/80 font-extralight group-hover:text-white transition-all duration-300 ease-in-out">{{
                text }}</span>
    </NuxtLink>
</template>