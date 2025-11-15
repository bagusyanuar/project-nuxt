<script setup lang="ts">
import { BaseTextField } from '~/components/ui/textfield';
import { BasePasswordField } from '~/components/ui/passwordfield';
import { BaseButton } from '~/components/ui/button';
import { useForm, useField } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { loginSchema, type LoginSchema } from '~/schemas/auth/login.schema';
import { usePageLoader } from '~/composables/components/pageLoader';

const { startPageLoader, endPageLoader } = usePageLoader()
definePageMeta({
    layout: 'auth'
})

const { handleSubmit, errors } = useForm({
    validationSchema: toTypedSchema(loginSchema)
})

const { value: email, errorMessage: emailError } = useField<LoginSchema['email']>('email')
const { value: password, errorMessage: passwordError } = useField<LoginSchema['password']>('password')

const onSubmit = handleSubmit((values) => {
    console.log(values);

})

const fetchData = async () => {
    startPageLoader()
    await new Promise(r => setTimeout(r, 2000))
    endPageLoader()
}
</script>

<template>
    <section class="w-full h-full flex items-center justify-center">
        <div class="bg-white rounded-lg shadow-2xl w-80 p-6 flex flex-col justify-center items-center">
            <div class="w-full flex flex-col items-center mb-7">
                <img src="~/assets/images/logo.png" alt="brand-logo" class="h-16 w-fit">
                <span class="block text-sm text-neutral-700 font-bold">Log in to your account</span>
            </div>
            <form @submit.prevent="onSubmit">
                <BaseTextField v-model="email" container-class="mb-3" placeholder="Email" icon="lucide:mail" />
                <BasePasswordField v-model="password" container-class="mb-3" placeholder="password" />
                <BaseButton text="Log in" @on-click="fetchData" />

            </form>
        </div>
    </section>
</template>
