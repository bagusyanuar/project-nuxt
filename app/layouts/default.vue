<script setup lang="ts">
import { SidebarWrapper } from '~/components/layout/sidebar';
import { NavbarWrapper } from '~/components/layout/navbar';
</script>

<template>
    <section class="w-full h-dvh bg-neutral-100">
        <SidebarWrapper />
        <NavbarWrapper />
        <main class="ps-64 pt-16">
            <section class="w-full p-4">
                <slot />
            </section>
        </main>
    </section>
</template>