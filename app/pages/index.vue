<script setup lang="ts">
import { BaseTextField } from '~/components/ui/textfield';
import { BasePasswordField } from '~/components/ui/passwordfield';
import { BaseButton } from '~/components/ui/button';
import { twMerge } from 'tailwind-merge';
import { useFormlogin } from '~/composables/features/auth/useLoginForm';

definePageMeta({
    layout: 'auth'
})

const {
    email, emailError, password, passwordError, onSubmit,
} = useFormlogin()
</script>

<template>
    <section class="w-full h-full flex items-center justify-center">
        <div class="bg-white rounded-lg shadow-2xl w-80 h-100 p-6 flex flex-col justify-between items-center">
            <div class="w-full flex flex-col items-center">
                <img src="~/assets/images/logo.png" alt="brand-logo" class="h-16 w-fit">
                <span class="block text-sm text-neutral-700 font-bold">Log in to your account</span>
            </div>
            <form>
                <div :class="twMerge('w-full mb-3', emailError ? 'mb-1' : '')">
                    <BaseTextField v-model="email" placeholder="Email" icon="lucide:mail" />
                    <span v-if="emailError" class="text-red-500 text-xs leading-none">{{ emailError }}</span>
                </div>
                <div :class="twMerge('w-full mb-3', passwordError ? 'mb-1' : '')">
                    <BasePasswordField v-model="password" placeholder="password" />
                    <span v-if="passwordError" class="text-red-500 text-xs leading-none">{{ passwordError }}</span>
                </div>
                <BaseButton text="Log in" class="mb-1" @on-click="onSubmit" />
                <a href="#"
                    class="text-xs text-teal-500 hover:underline transition-all duration-200 ease-in-out block text-center">Forgot
                    Password?</a>
            </form>
            <div class="text-center">
                <span class="block text-xs text-neutral-500">&copy; copyright john 2025</span>
            </div>
        </div>
    </section>
</template>
