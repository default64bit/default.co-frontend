<style scoped>
.dark .head {
    box-shadow: 0px 10px 30px -15px rgba(0, 0, 0, 50%);
}
.head {
    max-height: 5rem;
    box-shadow: 0px 5px 20px -10px rgba(0, 0, 0, 65%);
}

.dark .hover-head {
    background-color: rgba(40, 40, 40, 90%);
}
.hover-head {
    padding: 0.5rem 1rem;
    top: 1rem;
    width: calc(100% - 2rem);
    margin: auto;
    /* border: 2px solid theme("colors.gray3"); */
    border-radius: 10rem;
    backdrop-filter: blur(5px);
    /* background-color: rgba(244, 244, 245, 90%); */
    background-color: rgba(40, 40, 40, 90%);
}

.logo img,
.toggle * {
    transition: all 0.2s;
}

.menu-wrapper {
    height: 0;
    overflow: hidden;
}

nav > ul {
    min-height: 2.5rem;
}

@media (min-width: 1024px) {
    .hover-head {
        top: 1rem;
        padding: 1rem 1.5rem;
        width: calc(90% - 4rem);
    }
    .menu-wrapper {
        height: auto;
    }
}
@media (min-width: 1280px) {
    .hover-head {
        width: calc(70% - 4rem);
    }
}
</style>

<template>
    <header
        ref="header"
        class="head hover-head fixed flex items-center p-8 py-4 lg:py-6 w-screen max-w-screen-4xl h-14 lg:h-auto bg-black2 text-slate-200 text-lg z-20"
    >
        <nuxt-link class="logo h-7 md:h-9 overflow-hidden group" to="/">
            <img class="relative h-7 md:h-9 group-hover:-mt-7 group-hover:md:-mt-9" src="/logo.svg" title="Default" alt="Default" />
            <img class="h-7 md:h-9" src="/logo.svg" title="Default" alt="Default" />
        </nuxt-link>
        <ThemeSwitch class="absolute right-16 mr-2 lg:-right-14 top-3.5 lg:top-6" />
        <div class="menu-wrapper fixed top-14 lg:top-0 right-0 lg:relative flex flex-col mis-auto" :class="{ open: menuOpen }">
            <div class="menu p-6 lg:p-0 w-max h-max rounded-xl bg-black2 lg:bg-transparent flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
                <nav class="flex flex-wrap flex-col-reverse lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
                    <ul class="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 flex-grow w-full lg:w-auto">
                        <li class="flex flex-grow border-b-2 border-solid border-zinc-700 lg:border-transparent hover:border-green2 hover:pb-2">
                            <!-- <nuxt-link class="w-full flex-shrink-0" :to="{ path: '/', hash: '#contact' }">Contact</nuxt-link> -->
                            <a class="w-full flex-shrink-0" href="/#contact">Contact</a>
                        </li>
                        <li class="flex flex-grow border-b-2 border-solid border-zinc-700 lg:border-transparent hover:border-green2 hover:pb-2">
                            <!-- <nuxt-link class="w-full flex-shrink-0" :to="{ path: '/', hash: '#about-me' }">About Me</nuxt-link> -->
                            <a class="w-full flex-shrink-0" href="/#about-me">About Me</a>
                        </li>
                        <li class="flex flex-grow border-b-2 border-solid border-zinc-700 lg:border-transparent hover:border-green2 hover:pb-2">
                            <!-- <nuxt-link class="w-full flex-shrink-0" :to="{ path: '/', hash: '#projects' }">Projects</nuxt-link> -->
                            <a class="w-full flex-shrink-0" href="/#projects">My Projects</a>
                        </li>
                        <li class="flex flex-grow border-b-2 border-solid border-zinc-700 lg:border-transparent hover:border-green2 hover:pb-2">
                            <nuxt-link class="w-full flex-shrink-0" to="/blog">Blog</nuxt-link>
                        </li>
                    </ul>
                    <!-- <div class="flex items-center gap-3">
                        <LanguageSelector />
                        <ThemeSwitch />
                    </div> -->
                </nav>
                <a
                    class="flex items-center justify-center gap-1.5 p-4 py-1 border-2 border-solid border-green-50 hover:bg-green1 hover:text-black2 rounded-full"
                    href="/#contact"
                >
                    Hire Me
                </a>
            </div>
        </div>
        <div class="toggle lg:hidden flex flex-col gap-2 mis-auto cursor-pointer p-2" :class="{ 'open py-4': menuOpen }" @click="toggleMenu()">
            <span class="w-6 h-0.5 rounded-full bg-white" :class="{ 'rotate-45 -mb-1': menuOpen }"></span>
            <span class="w-6 h-0.5 rounded-full bg-white -ml-1" :class="{ hidden: menuOpen }"></span>
            <span class="w-6 h-0.5 rounded-full bg-white" :class="{ '-rotate-45 -mt-1': menuOpen }"></span>
        </div>
    </header>
</template>

<script setup>
import LanguageSelector from "~/components/web/LanguageSelector.vue";
import ThemeSwitch from "~/components/web/ThemeSwitch.vue";
import { gsap } from "gsap";

const header = ref("");
let menuOpen = ref(false);

const toggleMenu = () => {
    const menuHeight = header.value.querySelector(`.menu`).clientHeight + 10;
    if (menuOpen.value) {
        // close it
        header.value.querySelector(`.menu-wrapper`).style.height = `${menuHeight}px`;
        setTimeout(() => (header.value.querySelector(`.menu-wrapper`).style.height = `0px`), 50);
    } else {
        // open it
        header.value.querySelector(`.menu-wrapper`).style.height = `${menuHeight}px`;
        // setTimeout(() => (header.value.querySelector(`.menu-wrapper`).style.height = `auto`), 200);
    }
    menuOpen.value = !menuOpen.value;
};

const changeHeaderStyle = () => {
    // const scrollTop = document.querySelector("html").scrollTop;
    // if (scrollTop > -1) header.value.classList.add("hover-head");
    // else header.value.classList.remove("hover-head");
};

onMounted(() => {
    changeHeaderStyle();
    document.onscroll = () => changeHeaderStyle();

    window.addEventListener("resize", () => {
        if (!!header.value) {
            if (window.outerWidth > 1024) header.value.querySelector(`.menu-wrapper`).style.height = `auto`;
            else header.value.querySelector(`.menu-wrapper`).style.height = `0px`;
        }
    });

    gsap.from(header.value, { opacity: 0, y: "-200%", duration: 0.8, ease: "back.out(1.4)" });

    const items = header.value.getElementsByTagName("li");
    gsap.from([...items], {
        opacity: 0,
        x: "100%",
        duration: 0.8,
        delay: 0.3,
        stagger: 0.2,
        ease: "power3.inOut",
        onComplete: () => {
            [...items].forEach((element) => (element.style.transition = "all .2s"));
        },
    });
});
</script>
