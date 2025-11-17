<script setup lang="ts">
import { useAttrs } from 'vue';
import { twMerge } from 'tailwind-merge';
import { Icon } from '@iconify/vue';

const attrs = useAttrs()
</script>

<template>
    <div class="relative">
        <div :class="twMerge(
            'px-2 py-2 gap-1 rounded-md flex items-center justify-center bg-white border border-neutral-400 cursor-pointer hover:border-neutral-500 transition-all duration-300 ease-in-out',
            attrs.class as string | undefined
        )">
            <Icon icon="lucide:sliders-horizontal" width="14" height="14" class="text-neutral-700" />
            <span class="text-neutral-700 text-xs">Filter</span>
        </div>
    </div>
</template>