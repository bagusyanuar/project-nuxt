<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Icon } from '@iconify/vue';

const isOpen = ref<boolean>(false)

const dropdownRef = ref<HTMLElement | null>(null)

const toggleOpen = () => {
    isOpen.value = !isOpen.value
}

const handleClickOutside = (event: MouseEvent) => {
    if (isOpen.value && dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        isOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});

</script>

<template>
    <nav class="w-full h-16 ps-64 bg-neutral-100 fixed top-0 left-0 z-30 shadow">
        <div class="w-full h-full px-6 flex items-center justify-between">
            <div class="flex">
                <div class="">
                    <span class="inline-block text-sm text-neutral-900">Selamat Datang,</span>
                    <span class="text-sm text-neutral-700 font-semibold ms-2">Superdev<span
                            class="text-md ms-1">🖐</span></span>
                </div>
            </div>
            <div class="relative">
                <div class="flex items-center gap-1.5 cursor-pointer" @click.stop="toggleOpen">
                    <div
                        class="h-10 w-10 rounded-full bg-teal-500 flex items-center justify-center border-2 border-white shadow-xl">
                        <span class="text-sm text-white">SR</span>
                    </div>
                    <div class="flex flex-col gap-0.5">
                        <span class="text-neutral-700 text-xs font-semibold leading-none inline-block">Superdev</span>
                        <span class="block text-xs text-neutral-700 leading-none">superdev</span>
                    </div>
                </div>
                <div v-if="isOpen" ref="dropdownRef" v-motion-slide-top
                    class="absolute right-0 top-12 bg-white rounded-md shadow-lg w-40 py-1 z-30">
                    <div class="w-full">
                        <a href="/cek"
                            class="w-full flex items-center px-3 py-2 gap-2.5 bg-white hover:bg-neutral-700/10 transition-all duration-300 ease-in-out">
                            <Icon icon="lucide:user" width="12" height="12" class="text-neutral-500" />
                            <span class="text-xs text-neutral-500">Account</span>
                        </a>
                        <a href="#"
                            class="w-full flex items-center px-3 py-2 gap-2.5 bg-white hover:bg-neutral-700/10 transition-all duration-300 ease-in-out">
                            <Icon icon="lucide:power" width="12" height="12" class="text-neutral-500" />
                            <span class="text-xs text-neutral-500">Logout</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>