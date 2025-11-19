<script setup lang="ts">
import { PageTitle, CardTitle } from '~/components/ui/typography';
import { Card } from '~/components/ui/container';
import { ButtonLink } from '~/components/ui/button';
import { Icon } from '@iconify/vue';
import { TableFilter, TableSearch } from '~/components/ui/table';
import { useInstallation } from '~/composables/features/installation/useInstallation';

definePageMeta({
    ssr: false
})
const { query } = useInstallation()

const { isLoading } = query

</script>

<template>
    <section class="w-full">
        <PageTitle title="Instalasi Rumah Sakit"
            sub-title="Halaman ini digunakan untuk mengelola data instalasi yang ada di rumah sakit" />

        <Card>
            <div class="flex items-center justify-between">
                <CardTitle title="Data Instalasi Rumah Sakit" />
                <div class="flex items-center gap-1.5">
                    <TableSearch @search="e => query.refetch()" />
                    <TableFilter />
                    <ButtonLink to="/installation/add">
                        <Icon icon="lucide:circle-plus" width="14" height="14" />
                        <span>Tambah</span>
                    </ButtonLink>
                </div>
            </div>
            <div v-if="isLoading">loading...</div>
            <div v-else>data</div>
        </Card>
    </section>
</template>