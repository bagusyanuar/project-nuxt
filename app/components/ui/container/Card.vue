<script setup lang="ts">
import { useAttrs } from 'vue';
import { twMerge } from 'tailwind-merge';

const attrs = useAttrs()
</script>

<template>
    <div :class="twMerge(
        'bg-white shadow-2xl p-6 rounded-lg border-t-3 border-teal-500',
        attrs.class as string | undefined
    )">
        <!-- <ClientOnly> -->
        <slot />
        <!-- </ClientOnly> -->
    </div>
</template>