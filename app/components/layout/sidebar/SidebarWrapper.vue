<script setup lang="ts">
import SidebarItem from './SidebarItem.vue';
import SidebarItemTree from './SidebarItemTree.vue';
</script>

<template>
    <ClientOnly>
        <aside class="w-64 h-dvh fixed z-50">
            <div class="w-full h-full flex flex-col bg-teal-600 shadow-lg shadow-teal-500">
                <!-- sidebar brand -->
                <div class="w-full h-20 px-6 flex items-center gap-1.5">
                    <img src="~/assets/images/logo.png" alt="brand-logo" class="h-10 w-fit">
                    <div class="flex flex-col">
                        <span class="text-white text-sm font-bold">KEMENKES</span>
                        <span class="text-white text-xs">SIMRS</span>
                    </div>
                </div>

                <!-- sidebar menu -->
                <div class="w-full flex-1 flex flex-col gap-1 px-3 py-3 overflow-auto">
                    <SidebarItem text="Dashboard" icon="lucide:layout-dashboard" />
                    <div class="w-full px-3 my-1">
                        <span class="block text-xs font-light text-white">Master Data</span>
                    </div>
                    <SidebarItemTree text="Instalasi & Unit" icon="lucide:hospital" :branchs="[
                        {
                            text: 'Instalasi',
                            to: '/installation'
                        },
                        {
                            text: 'Unit',
                            to: '/unit'
                        },
                        {
                            text: 'Kamar',
                            to: '/room'
                        }
                    ]" />
                    <SidebarItemTree text="Tenaga Kerja" icon="lucide:hand-heart" :branchs="[
                        {
                            text: 'Tenaga Kerja Non Medis',
                            to: '/installation'
                        },
                        {
                            text: 'Tenaga Kerja Medis',
                            to: '/unit'
                        },
                        {
                            text: 'Jadwal',
                            to: '/room'
                        }
                    ]" />
                    <!-- <div v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, scale: 1 }"
                        :variants="{ custom: { scale: 2 } }" :hovered="{ scale: 1.2 }" :delay="200" :duration="1200">
                        test
                    </div> -->
                </div>
            </div>
        </aside>
    </ClientOnly>
</template>