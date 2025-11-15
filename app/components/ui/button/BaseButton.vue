<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import { twMerge } from 'tailwind-merge';

interface IProps {
    text?: string
    disabled?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
    text: 'Button',
    disabled: false,
})
const emit = defineEmits(['onClick'])

const attrs = useAttrs()

const classes = computed(() => twMerge(
    "w-full py-2.5 bg-teal-500 cursor-pointer flex items-center justify-center text-sm text-white rounded-lg hover:bg-teal-600 transition-all duration-200 ease-in-out",
    attrs.class as string | undefined
))

</script>

<template>
    <button type="button" :disabled="props.disabled" :class="classes" @click="emit('onClick')">
        <span>{{ props.text }}</span>
    </button>
</template>