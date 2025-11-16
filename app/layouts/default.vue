<script setup lang="ts">
import { SidebarWrapper } from '~/components/layout/sidebar';
</script>

<template>
    <section class="w-full h-dvh bg-neutral-100">
        <SidebarWrapper />
        <slot />
    </section>
</template>