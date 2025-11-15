<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import { Icon } from '@iconify/vue';
import { twMerge } from 'tailwind-merge';

interface IProps {
  icon?: string;
  disabled?: boolean;
  placeholder?: string;
  containerClass?: string;
}

const props = withDefaults(defineProps<IProps>(), {
    containerClass: '',
    icon: 'lucide:circle',
    placeholder: '',
    disabled: false
})

const model = defineModel<string>()

const attrs = useAttrs()

const containerClassName = computed(() => twMerge(
    "relative group w-full ps-3 pe-2.5 flex items-center border border-neutral-400 rounded-lg focus-within:outline-none focus-within:ring-0 focus-within:border-neutral-500 transition-[border] duration-200 ease-in",
    props.containerClass
))

const inputClassName = computed(() => twMerge(
    "w-full text-sm ps-2 pe-0 leading-none py-2.5 border-none rounded-lg outline-none focus:outline-none focus:ring-0 text-neutral-700  disabled:bg-neutral-200 placeholder:text-neutral-500",
    attrs.class as string | undefined
))

</script>

<template>
    <div :class="containerClassName">
        <div class="h-full">
            <Icon :icon="icon" class="h-4 aspect-square text-neutral-500" />
        </div>

        <input :class="inputClassName" :value="model" :placeholder="placeholder" :disabled="props.disabled"
            @input="model = ($event.target as HTMLInputElement).value">
    </div>
</template>

<!-- const emit = defineEmits(['update:modelValue']) -->

<!-- props to get attributes -->
<!-- const attrs = useAttrs() -->
<!-- <input v-model="inputValue"
            class="w-full text-sm ps-2 pe-0 leading-none py-2.5 border-none rounded-lg outline-none focus:outline-none focus:ring-0 text-neutral-700  disabled:bg-neutral-200 placeholder:text-neutral-500"
            :placeholder="placeholder" :disabled="props.disabled"> -->

<!-- two way binding -->
<!-- const inputValue = computed({
get: () => props.modelValue ?? '',
set: (val: string) => emit('update:modelValue', val)
}) -->