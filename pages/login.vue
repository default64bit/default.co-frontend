<style scoped>
form * {
    transition: all 0.2s;
}
.o-ring {
    border-width: 2rem;
}
.o2-ring {
    width: 29rem;
    height: 29rem;
    border-width: 3rem;
}
.binary-ring {
    width: 29rem;
    height: 29rem;
}
</style>

<template>
    <div class="relative flex flex-col items-center w-screen max-w-2xl rounded-2xl bg-stone-100 dark:bg-black2">
        <span class="absolute -top-10 opacity-20 letter-space-2 dark:text-white whitespace-nowrap">
            00 101 01 1111 0101 011 10 10111 1101011 11001 00 0010 10 10111 01 01 0010 1 1101 0101011 11 01010 011011011 1110 1000
        </span>
        <span class="absolute -bottom-10 opacity-20 letter-space-2 dark:text-white whitespace-nowrap">
            101 011 10 10111 11 1101 0101011 11 01010 011011011 1110 100000 101011 11001 00 0010 10 10111 01 01 0010 101 01 1111 0
        </span>

        <div class="">
            <div class="absolute top-1/3 right-20 w-96 h-96 bg-black2 dark:bg-white"></div>
            <div class="absolute top-32 right-28 w-10 h-96 bg-gray2 dark:bg-gray3"></div>
            <div class="o-ring absolute top-20 w-72 h-72 border-solid rounded-full border-gray2 opacity-20"></div>
            <div class="o2-ring absolute bottom-10 right-4 border-solid rounded-full border-gray3 opacity-50"></div>
            <img class="binary-ring absolute bottom-10 right-4 mix-blend-difference rotate" src="~/assets/images/binary_circle_white.png" alt="" />
        </div>

        <ThemeSwitch class="absolute right-2 top-2 z-2" />
        <nuxt-link class="absolute left-2 top-2 flex items-center gap-2 border-b-2 hover:border-b-4 border-solid border-b-white text-black z-2" to="/">
            <img class="w-6 rotate-180" src="~/assets/images/arrow-right.svg" alt="" />
            <span>Home</span>
        </nuxt-link>

        <form class="relative flex flex-col w-screen max-w-md rounded-2xl bg-green1 shadow-xl overflow-hidden mie-auto" @submit.prevent="login()">
            <BinaryWall class="absolute w-screen top-0 left-2 opacity-60" :angle="0" />
            <div class="relative flex flex-col items-center gap-8 p-8 w-full">
                <div class="flex items-center justify-center w-20 h-20 p-4 mx-auto rounded-full bg-gray1 dark:bg-black2 bg-opacity-60">
                    <img class="-mr-1 object-contain" width="40px" src="/icon.png" alt="" />
                </div>
                <h1 class="f-josefin text-5xl font-bold mx-auto">Login</h1>
                <button
                    type="button"
                    class="flex items-center justify-center gap-2 p-4 w-full bg-white text-black2 shadow-md hover:shadow-xl rounded-xl"
                    @click="loginWithGoogle()"
                >
                    <img src="~/assets/images/login/G.svg" alt="" />
                    <b>Login With Google</b>
                </button>
                <div class="flex items-center justify-center gap-4 w-full">
                    <span class="w-20 h-0.5 bg-green3"></span>
                    <b>OR</b>
                    <span class="w-20 h-0.5 bg-green3"></span>
                </div>
                <Input class="w-full" name="email" :required="true" type="email" placeholder="Email Address" v-model="email" />
                <Input class="w-full" name="pass" :required="true" type="password" placeholder="Password" v-model="pass" />
                <p class="w-full rounded-lg p-2 text-sm bg-rose-500 bg-opacity-20 text-rose-800" v-if="error">Somthing went wrong! Try again later, maybe?</p>
                <button
                    class="flex items-center justify-center gap-2 p-4 py-3 w-full rounded-xl hover:shadow-lg hover:bg-green-50 bg-green-100 text-black1 border-2 border-solid border-black1"
                    type="submit"
                >
                    <span class="font-bold md:text-xl">Continue</span> <img src="~/assets/images/login/sign-in.svg" alt="" />
                </button>
                <nuxt-link class="underline" to="/forgot-password">Forgot Your Password?</nuxt-link>
            </div>
        </form>
    </div>
</template>

<script setup>
import ThemeSwitch from "~/components/web/ThemeSwitch.vue";
import BinaryWall from "~/components/BinaryWall.vue";
import Input from "~/components/form/Input.vue";

useHead({ title: `Default - Login` });
definePageMeta({ layout: "auth" });
const route = useRoute();
const config = useRuntimeConfig();

const error = route.query.error;

const email = ref("");
const pass = ref("");

const login = () => {};

const loginWithGoogle = () => {
    const response_type = "code";
    const redirect_uri = `${config.public.BASE_URL}/auth/login/google/callback`;
    const scope = "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile";
    window.location.href = encodeURI(
        `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=${config.public.GOOGLE_LOGIN_CLIENT_ID}` +
            `&response_type=${response_type}` +
            `&redirect_uri=${redirect_uri}` +
            `&scope=${scope}`
    );
};
</script>
