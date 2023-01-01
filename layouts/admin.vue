<style scoped>
header {
    width: calc(100% - 1.25rem);
}

main {
    overflow: hidden;
    width: 100%;
}

aside {
    position: sticky;
    top: 4.5rem;
}

.logo img {
    transition: all 0.2s;
}

@media (min-width: 768px) {
    header {
        width: calc(100% - 2rem);
    }
    main {
        width: calc(100% - 275px);
    }
    main.wide {
        width: 100%;
    }
    aside {
        position: sticky;
        top: 5rem;
    }
}
</style>

<template>
    <div class="flex flex-col items-center w-screen min-h-screen bg-white dark:bg-black1" id="app">
        <NuxtLoadingIndicator />
        <header class="fixed top-2 md:top-4 flex items-center gap-3 mx-auto p-2 md:px-6 rounded-2xl bg-black2 shadow-xl z-20">
            <div class="flex items-center gap-2 md:gap-6 flex-grow">
                <button class="flex flex-col items-center justify-center gap-1.5 w-12 h-12 rounded-full hover:bg-gray3" @click="toggleMenu()">
                    <span class="w-6 h-0.5 bg-white"></span>
                    <span class="w-6 h-0.5 bg-white"></span>
                    <span class="w-6 h-0.5 bg-white"></span>
                </button>
                <nuxt-link class="logo h-7 md:h-9 overflow-hidden group" to="/">
                    <img class="relative h-7 md:h-9 group-hover:-mt-7 group-hover:md:-mt-9" src="/logo.svg" title="Default" alt="Default" />
                    <img class="h-7 md:h-9" src="/logo.svg" title="Default" alt="Default" />
                </nuxt-link>
            </div>
            <div class="flex items-center gap-2 md:gap-2 flex-shrink-0">
                <ThemeSwitch class="" />

                <button
                    class="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray3"
                    @click="toggleNotifsDropdown()"
                    ref="notifsDropdownToggler"
                >
                    <Icon class="icon w-6 h-6 bg-white" name="bell.svg" folder="icons" size="24px" />
                    <span class="absolute right-2 top-2 w-3 h-3 border border-black2 rounded-full bg-green2"></span>
                </button>
                <NotifsDropdown :notifsDropdownOpen="notifsDropdownOpen" @notifsDropdownOpen:update="notifsDropdownUpdate" />

                <nuxt-link to="/admin/profile" class="flex items-center gap-2 cursor-pointer">
                    <img class="w-9 h-9 rounded-full object-cover" src="~/assets/images/Default5.png" alt="" />
                    <span class="hidden lg:flex flex-col items-start gap-0 text-white">
                        <b class="f-josefin text-sm -mb-0.5">Kasra Keshvardoost</b>
                        <small class="f-josefin opacity-75">Kasrakeshvardoost@gmail.com</small>
                    </span>
                </nuxt-link>
            </div>
        </header>
        <div class="relative flex w-full h-full flex-grow pt-16 md:pt-20">
            <BinaryWall class="absolute -top-4 w-screen h-full max-h-full opacity-40" :angle="0" />
            <aside class="fixed flex-shrink-0 h-full z-10">
                <SideMenu :menuOpen="menuOpen" />
            </aside>
            <main class="relative p-4 md:p-6 flex-grow text-black2 dark:text-white" :class="{ wide: !menuOpen }">
                <slot />
            </main>
        </div>
    </div>
</template>

<script setup>
import Icon from "~/components/Icon.vue";
import BinaryWall from "~/components/BinaryWall.vue";
import SideMenu from "~/components/admin/SideMenu.vue";
import NotifsDropdown from "~/components/admin/NotifsDropDown.vue";
import ThemeSwitch from "~/components/web/ThemeSwitch.vue";
import { refreshAuthToken } from "~/composables/refreshAuthToken";

let menuOpen = ref(false);
const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
};
onMounted(async () => {
    // set timeout to refresh the token every 10minutes
    await refreshAuthToken();
    setInterval(async () => await refreshAuthToken(), 10 * 60 * 1000);

    if (screen.width <= 768) menuOpen.value = false;
    else menuOpen.value = true;
});

// ------------------------------------
let notifsDropdownOpen = ref(false);
const toggleNotifsDropdown = () => (notifsDropdownOpen.value = !notifsDropdownOpen.value);
let notifsDropdownToggler = ref(null);
const notifsDropdownUpdate = (eventTarget) => {
    if (!notifsDropdownToggler.value.contains(eventTarget)) notifsDropdownOpen.value = false;
};
// ------------------------------------
</script>
