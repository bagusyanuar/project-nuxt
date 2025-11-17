<script setup lang="ts">
import { useAttrs } from 'vue';
import { twMerge } from 'tailwind-merge';

interface IButtonLink {
    to?: string
}

withDefaults(defineProps<IButtonLink>(), {
    to: '#'
})

const attrs = useAttrs()
</script>

<template>
    <a :class="twMerge(
        'bg-teal-500 border border-teal-500 text-white text-xs px-2 py-2 flex items-center justify-center gap-1 rounded-md cursor-pointer hover:bg-teal-600 hover:border-teal-600 transition-all duration-300 ease-in-out',
        attrs.class as string | undefined
    )">
        <slot />
    </a>
</template>