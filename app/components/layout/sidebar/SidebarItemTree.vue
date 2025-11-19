<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { Icon } from '@iconify/vue'
import { twMerge } from 'tailwind-merge'
import { useMotion } from '@vueuse/motion';

type TChild = {
    to?: string
    text?: string
}

interface ISidebarItemTreeProps {
    text?: string
    icon?: string
    branchs?: TChild[]
}

withDefaults(defineProps<ISidebarItemTreeProps>(), {
    text: 'Menu',
    icon: 'lucide:circle',
    branchs: () => [] as TChild[]
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
    } else {
        // Collapsing: Just set inactive
        if (collapsibleRef.value) {
            // Animate to the measured height
            collapsibleRef.value!.style.transition = "height 0.2s ease-in-out";
            collapsibleRef.value!.style.height = "0px";
        }
        setTimeout(() => {
            isActive.value = false
        }, 200);
    }
}

</script>

<template>
    <div class="w-full">
        <div :class="twMerge(
            'w-full group relative px-3 py-3 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-white/20 transition-all duration-300 ease-in-out',
            isActive ? 'bg-white/20' : ''
        )" @click="toggleActive">
            <Icon :icon="icon" width="18" height="18"
                class="text-white/80 aspect-square group-hover:text-white transition-all duration-300 ease-in-out" />
            <span class="flex-1 text-sm text-white/80 group-hover:text-white transition-all duration-300 ease-in-out">
                {{ text }}
            </span>
            <Icon icon="lucide:chevron-right" width="18" height="18" :class="twMerge(
                'text-white/80 aspect-square group-hover:text-white transition-all duration-300 ease-in-out',
                isActive ? 'rotate-90' : ''
            )" />
        </div>
        <!-- <ClientOnly> -->
        <div v-if="branchs.length > 0">
            <div v-show="isActive" ref="collapsibleRef" class="w-full overflow-hidden">
                <div class="w-full flex flex-col  ps-6 pt-1">
                    <div class="w-full border-l border-neutral-300 ps-1.5">
                        <NuxtLink v-for="(branch, index) in branchs" :key="index" :to="branch.to || '#'"
                            class="text-xs text-white/80 px-2.5 py-1.5 w-full rounded-md flex items-center gap-2 cursor-pointer hover:bg-white/20 hover:text-white transition-all duration-300 ease-in-out">
                            {{ branch.text }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <!-- </ClientOnly> -->
    </div>
</template>
