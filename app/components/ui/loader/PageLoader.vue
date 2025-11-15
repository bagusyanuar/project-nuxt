<script setup lang="ts">
import { ref, nextTick, watch, onMounted } from 'vue'
import { useMotion, type MotionVariants } from '@vueuse/motion'

const visible = ref(false)
const el = ref<HTMLElement | null>(null)

// Variants literal object
const variants = {
    hidden: { y: -200, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 25 } },
} as const

// Pasang motion ke element
const { apply } = useMotion<'hidden' | 'visible', MotionVariants<'hidden' | 'visible'>>(el, variants)

// Set initial state
onMounted(() => apply('hidden'))

watch(visible, async (v) => {
    if (v) {
        await nextTick()
        apply('visible')
    } else {
        apply('hidden')
    }
})

const startPageLoader = () => (visible.value = true)
const endPageLoader = () => (visible.value = false)

defineExpose({ startPageLoader, endPageLoader })

export interface PageLoaderMethods {
    startPageLoader: () => void
    endPageLoader: () => void
}

</script>

<template>
    <client-only>
        <div v-if="visible" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div ref="el" class="bg-white w-80 max-w-sm p-6 rounded-xl shadow-xl text-center">
                <span class="text-lg font-semibold">Loading...</span>
            </div>
        </div>
    </client-only>
</template>