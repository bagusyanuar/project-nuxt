<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import { twMerge } from 'tailwind-merge';

interface ISidebarItemTreeProps {
    text?: string
    icon?: string
}

withDefaults(defineProps<ISidebarItemTreeProps>(), {
    text: 'Menu',
    icon: 'lucide:circle'
})

const isActive = ref<boolean>(false)

const collapse = {
    initial: {
        height: 0,
        opacity: 0,
    },
    enter: {
        height: 'auto',
        opacity: 1,
        transition: {
            duration: 0.3,      // durasi 0.3 detik
            easing: 'ease-out', // opsional
        }
    },
    leave: {
        height: 0,
        opacity: 0,
        transition: {
            duration: 0.25,     // durasi saat close
            easing: 'ease-in',
        }
    },
}
</script>

<template>
    <div class="w-full">
        <div :class="twMerge(
            'w-full group relative px-3 py-2.5 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-white/20 transition-all duration-300 ease-in-out',
            isActive ? 'bg-white/20' : '',
        )" @click="isActive = !isActive">
            <Icon :icon="icon"
                class="text-white/80 h-4 aspect-square group-hover:text-white transition-all duration-300 ease-in-out" />
            <span class="flex-1 text-sm text-white/80 group-hover:text-white transition-all duration-300 ease-in-out">
                {{ text }}
            </span>
            <Icon icon="lucide:chevron-right"
                class="text-white/80 h-4 aspect-square group-hover:text-white transition-all duration-300 ease-in-out" />
        </div>
        <ClientOnly>
            <div v-motion v-if="isActive" :initial="{
                height: 0,
                opacity: 0,
            }" :enter="{
                height: 120,
                opacity: 1,
                transition: {
                    duration: 2,      // durasi 0.3 detik
                    easing: 'ease-out', // opsional
                }
            }" :leave="{
                height: 0,
                opacity: 0,
                transition: {
                    duration: 0.25,     // durasi saat close
                    easing: 'ease-in',
                }
            }" :delay="50" :duration="200" class="w-full flex flex-col overflow-hidden">
                <div class="w-full ps-6 pt-1">
                    <div class="w-full border-l border-neutral-300 ps-1.5">
                        <a href="#"
                            class="text-sm text-white/80 px-2.5 py-1.5 w-full rounded-md flex items-center gap-2 cursor-pointer hover:bg-white/20 hover:text-white transition-all duration-300 ease-in-out">Instalasi</a>
                        <a href="#"
                            class="text-sm text-white/80 px-2.5 py-1.5 w-full rounded-md flex items-center gap-2 cursor-pointer hover:bg-white/20 hover:text-white transition-all duration-300 ease-in-out">Unit</a>
                        <a href="#"
                            class="text-sm text-white/80 px-2.5 py-1.5 w-full rounded-md flex items-center gap-2 cursor-pointer hover:bg-white/20 hover:text-white transition-all duration-300 ease-in-out">Kamar</a>
                    </div>
                </div>
            </div>
        </ClientOnly>
    </div>
</template>
