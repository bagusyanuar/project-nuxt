<script setup lang="ts">
import { useAttrs } from 'vue';
import { twMerge } from 'tailwind-merge';
import { Icon } from '@iconify/vue';

interface ITableSearchProps {
    onSearch?: (val: string) => void
}

const props = withDefaults(defineProps<ITableSearchProps>(), {
    onSearch: () => { }
})

const attrs = useAttrs()

const model = defineModel<string>()

let debounceTimer: ReturnType<typeof setTimeout> | null = null

const handleSearch = (e: InputEvent) => {
    const value = (e.target as HTMLInputElement).value

    if (debounceTimer) clearTimeout(debounceTimer)

    debounceTimer = setTimeout(() => {
        props.onSearch(value)
    }, 350)
}
</script>

<template>
    <div :class="twMerge(
        'relative group w-44 ps-3 flex items-center border border-neutral-400 rounded-md focus-within:outline-none focus-within:ring-0 focus-within:border-neutral-500 transition-[border] duration-300 ease-in-out',
        attrs.class as string | undefined
    )">
        <Icon icon="lucide:search" width="14" height="14"
            class="text-neutral-500 group-focus-within:text-neutral-700" />
        <input type="text" placeholder="search..." :value="model"
            class="w-full text-xs ps-2 pe-0 py-2 border-none text-neutral-500 rounded-md outline-none focus:outline-none focus:ring-0 group-focus-within:text-neutral-700 placeholder:text-neutral-400"
            @input="handleSearch">
    </div>
</template>