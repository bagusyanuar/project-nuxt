<script setup lang="ts">
import { useAttrs } from 'vue';
import { twMerge } from 'tailwind-merge';

interface ICardTitleProps {
    title?: string
}

withDefaults(defineProps<ICardTitleProps>(), {
    title: 'Title'
})

const attrs = useAttrs()

</script>

<template>
    <span :class="twMerge(
        'block text-sm text-neutral-700 font-bold uppercase',
        attrs.class as string | undefined
    )">
        {{ title }}
    </span>
</template>