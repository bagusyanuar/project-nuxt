<script setup lang="ts">
import { PageLoader, type PageLoaderMethods } from '~/components/ui/loader';
import { usePageLoader } from '~/composables/components/pageLoader';

const pageLoaderRef = ref<PageLoaderMethods | null>(null)
usePageLoader(pageLoaderRef)

</script>

<template>
    <NuxtLayout>
        <NuxtPage />
        <PageLoader ref="pageLoaderRef" />
    </NuxtLayout>
</template>