<script setup lang="ts">
import { ref, computed, useAttrs } from 'vue';
import { Icon } from '@iconify/vue';
import { twMerge } from 'tailwind-merge';

interface IProps {
    disabled?: boolean
    placeholder?: string
    containerClass?: string
}

const props = withDefaults(defineProps<IProps>(), {
    containerClass: '',
    disabled: false,
    placeholder: ''
})

const model = defineModel<string>()

const attrs = useAttrs()

const containerClassName = computed(() => twMerge(
    "relative group w-full ps-3 pe-3 flex items-center border border-neutral-400 rounded-lg focus-within:outline-none focus-within:ring-0 focus-within:border-neutral-500 transition-[border] duration-200 ease-in",
    props.containerClass
))

const inputClassName = computed(() => twMerge(
    "w-full text-sm ps-2 pe-0 leading-none py-2.5 border-none rounded-lg outline-none focus:outline-none focus:ring-0 text-neutral-700  disabled:bg-neutral-200 placeholder:text-neutral-500",
    attrs.class as string | undefined
))

const showPassword = ref<boolean>(false)

const inputType = computed(() => showPassword.value ? 'text' : 'password')

const toggleVisibility = () => (showPassword.value = !showPassword.value)

</script>

<template>
    <div :class="containerClassName">
        <div class="h-full">
            <Icon icon="lucide:lock" class="h-4 aspect-square text-neutral-500" />
        </div>
        <input :value="model" :type="inputType" :class="inputClassName" :placeholder="placeholder"
            :disabled="props.disabled" @input="model = ($event.target as HTMLInputElement).value">
        <div class="h-full cursor-pointer" @click="toggleVisibility">
            <Icon :icon="showPassword ? 'lucide:eye-off' : 'lucide:eye'" class="h-4 aspect-square text-neutral-500" />
        </div>
    </div>
</template>