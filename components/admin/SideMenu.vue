<style scoped>
nav {
    position: fixed;
    top: 4.5rem;
    left: 1rem;
    width: 275px;
    height: calc(100vh - 2.5rem - 2rem);
    max-height: -webkit-fill-available;
    border-radius: 1rem;
    overflow-x: hidden;
    overflow-y: auto;
    transition: all 0.2s ease-in-out;
    box-shadow: 20px 5px 30px -15px rgba(0, 0, 0, 15%);
}
nav.close {
    left: 0;
    margin-inline-start: -275px;
}

.link {
    transition: all 0.2s;
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    cursor: pointer;
}
.link:hover {
    background-color: theme("colors.gray3");
    color: theme("colors.green1");
}
.link.router-link-active {
    background-color: theme("colors.green1");
    color: theme("colors.black2");
    font-weight: bold;
}
.link:hover .icon {
    background-color: theme("colors.green1");
}
.link.router-link-active .icon {
    background-color: theme("colors.green3");
}
.link span {
    margin-bottom: -2px;
}

@media (min-width: 768px) {
    nav {
        position: initial;
        top: 5rem;
        margin-inline-start: 1rem;
        height: calc(100vh - 5rem - 2rem);
    }
}
</style>

<template>
    <nav class="flex flex-col items-center gap-2 my-4 p-2 bg-black2 text-stone-100" :class="{ close: !menuOpen }" ref="nav">
        <!-- <div class="w-full h-32 rounded-xl overflow-hidden bg-white opacity-80 shadow-xl">
            <img class="h-40 mx-auto mt-2" src="~/assets/images/admin/skull.png" alt="" />
        </div> -->
        <div class="relative w-full h-32 rounded-xl overflow-hidden dark:bg-white bg-black2 shadow-xl flex-shrink-0">
            <div class="absolute top-10 left-10 w-32 h-32 dark:bg-zinc-700 bg-zinc-100 rounded-2xl"></div>
            <div class="absolute -top-10 right-4 w-32 h-32 bg-stone-300"></div>
            <div class="absolute -top-10 right-8 w-12 h-40 bg-stone-600"></div>
            <div class="absolute top-2 right-16 w-22 h-22 rotate-45 bg-green2 border-8 border-solid border-gray2 opacity-80"></div>
            <div class="absolute top-2 left-2 w-40 h-40 rounded-full border-8 border-solid border-gray3"></div>
        </div>
        <div class="relative flex items-center justify-center w-24 h-24 p-6 my-4 mx-auto rounded-full bg-black2 bg-opacity-75 -mt-20 z-2">
            <img class="absolute w-32 h-32 object-cover rotate mix-blend-difference" src="~/assets/images/binary_circle_white.png" alt="" />
            <img class="-mr-2 object-contain" width="80px" src="/icon.png" alt="" />
        </div>

        <ul class="flex flex-col gap-1 w-full">
            <nuxt-link class="link" to="/admin">
                <li class="f-josefin flex items-center gap-3">
                    <Icon class="icon w-6 h-6 bg-white" name="home2.svg" folder="icons" size="24px" />
                    <span>Dashboard</span>
                </li>
            </nuxt-link>
        </ul>

        <hr class="w-11/12 border-gray1 opacity-50 mx-4" />

        <ul class="flex flex-col gap-1 w-full">
            <nuxt-link class="link" to="/admin/blog-posts">
                <li class="f-josefin flex items-center gap-3">
                    <Icon class="icon w-6 h-6 bg-white" name="file-edit.svg" folder="icons" size="24px" />
                    <span>Blog Posts</span>
                </li>
            </nuxt-link>
            <nuxt-link class="link" to="/admin/projects">
                <li class="f-josefin flex items-center gap-3">
                    <Icon class="icon w-6 h-6 bg-white" name="browser-code.svg" folder="icons" size="24px" />
                    <span>Projects</span>
                </li>
            </nuxt-link>
            <nuxt-link class="link" to="/admin/tech-and-tools">
                <li class="f-josefin flex items-center gap-3">
                    <Icon class="icon w-6 h-6 bg-white" name="data.svg" folder="icons" size="24px" />
                    <span>Tech & Tools</span>
                </li>
            </nuxt-link>
            <nuxt-link class="link" to="/admin/contact-us">
                <li class="f-josefin flex items-center gap-3">
                    <Icon class="icon w-6 h-6 bg-white" name="message-text.svg" folder="icons" size="24px" />
                    <span>Contact Us</span>
                    <span class="f-jost-regular flex items-center justify-center mis-auto text-sm p-0.5 px-2 rounded-full bg-zinc-600 text-white">0</span>
                </li>
            </nuxt-link>
        </ul>

        <hr class="w-11/12 border-gray1 opacity-50 mx-4" />

        <ul class="flex flex-col gap-1 w-full">
            <nuxt-link class="link" to="/admin/terms">
                <li class="f-josefin flex items-center gap-3">
                    <Icon class="icon w-6 h-6 bg-white" name="file.svg" folder="icons" size="24px" />
                    <span>Terms Text</span>
                </li>
            </nuxt-link>
        </ul>

        <button class="link mt-auto w-full" @click="logout()">
            <li class="f-josefin flex items-center gap-3">
                <Icon class="icon w-6 h-6 bg-white" name="logout.svg" folder="icons" size="24px" />
                <span class="">Log Out</span>
            </li>
        </button>
    </nav>
</template>

<script setup>
import axios from "axios";
import Icon from "~/components/Icon.vue";

const route = useRoute();
const props = defineProps({
    menuOpen: Boolean,
});
const { menuOpen } = toRefs(props);

// watching the menuOpen variable
watch(menuOpen, async (newVal, oldVal) => {});

const logout = () => {
    window.location.href = "/auth/logout";
};
</script>
