<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { Icon } from '@iconify/vue'
import { twMerge } from 'tailwind-merge'
import { useMotion } from '@vueuse/motion';

interface ISidebarItemTreeProps {
    text?: string
    icon?: string
}

withDefaults(defineProps<ISidebarItemTreeProps>(), {
    text: 'Menu',
    icon: 'lucide:circle'
})

const isActive = ref<boolean>(false)
const collapsibleRef = ref<HTMLElement | null>(null)

const { apply } = useMotion(collapsibleRef, {
    initial: { height: 0, opacity: 0 },
    expand: { opacity: 1, transition: { duration: 0.25, easing: 'ease-in-out' } },
    collapse: { height: 0, opacity: 0, transition: { duration: 0.25, easing: 'ease-in', delay: 0.3 } }
})


const toggleActive = async () => {
    if (!isActive.value) {
        // Expanding: Set active first, then measure on next tick
        isActive.value = true
        await nextTick()
        if (collapsibleRef.value) {
            // Animate to the measured height
            const h = collapsibleRef.value?.scrollHeight ?? 0
            await apply("expand")          // jalankan transition (duration di sini aktif)
            collapsibleRef.value!.style.transition = "height 0.2s ease-in-out";
            collapsibleRef.value!.style.height = h + "px";

        }
        // Height will be measured automatically by useElementSize
    } else {
        // Collapsing: Just set inactive
        if (collapsibleRef.value) {
            // Animate to the measured height
            collapsibleRef.value!.style.transition = "height 0.2s ease-in-out";
            collapsibleRef.value!.style.height = "0px";
        }
        isActive.value = false
    }
}

</script>

<template>
    <div class="w-full">
        <div :class="twMerge(
            'w-full group relative px-3 py-2.5 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-white/20 transition-all duration-300 ease-in-out',
            isActive ? 'bg-white/20' : ''
        )" @click="toggleActive">
            <Icon :icon="icon"
                class="text-white/80 h-4 aspect-square group-hover:text-white transition-all duration-300 ease-in-out" />
            <span class="flex-1 text-sm text-white/80 group-hover:text-white transition-all duration-300 ease-in-out">
                {{ text }}
            </span>
            <Icon icon="lucide:chevron-right"
                class="text-white/80 h-4 aspect-square group-hover:text-white transition-all duration-300 ease-in-out" />
        </div>
        <ClientOnly>
            <div v-if="isActive" ref="collapsibleRef" class="w-full overflow-hidden">
                <div class="w-full flex flex-col  ps-6 pt-1">
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
