<script setup lang="ts">
import { useAttrs } from 'vue';
import { twMerge } from 'tailwind-merge';

interface IPageTitleProps {
    title?: string
    subTitle?: string
}

withDefaults(defineProps<IPageTitleProps>(), {
    title: 'Title',
    subTitle: 'This is sub title page'
})

const attrs = useAttrs()


</script>

<template>
    <div :class="twMerge(
        'mb-5',
        attrs.class as string | undefined
    )">
        <p class="text-lg text-neutral-700 font-semibold leading-[1.2]">{{ title }}</p>
        <p class="text-xs text-neutral-500">{{ subTitle }}</p>
    </div>
</template>