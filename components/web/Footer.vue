<style scoped>
.b-wall {
    height: calc(100% - 1rem);
}

.work_status {
    margin: 0 auto auto auto;
}

@media (min-width: 768px) {
    .work_status {
        margin-inline-start: auto;
        margin-right: 0;
    }
}
</style>

<template>
    <footer class="relative flex flex-col gap-6 bg-zinc-100 dark:bg-black2 rounded-2xl p-6 md:p-8 w-full max-w-3xl overflow-hidden" ref="footer">
        <BinaryWall class="b-wall absolute top-2 right-3.5 w-10/12 opacity-70" :angle="45" :rows="4" />
        <div class="relative flex flex-wrap items-center gap-4 mb-2 dark:text-white">
            <a class="relative f-jost-regular" href="/" name="logo">
                <div class="bg-black2 border border-solid border-gray3 p-1 px-4 rounded-full">
                    <img class="h-7 sm:h-9" src="/logo.svg" title="Default" alt="Default" />
                </div>
                <small class="absolute left-1 mt-0.5 flex-shrink-0 w-64">A Solution To Digitize Ideas</small>
            </a>
            <span class="h-1 rounded-full flex-grow bg-black2 dark:bg-slate-50 opacity-90"></span>
            <a
                class="flex items-center justify-center gap-1.5 p-4 py-1 border-2 border-solid border-green-50 bg-white dark:bg-black2 hover:bg-green1 hover:dark:bg-green1 hover:dark:text-black2 rounded-full"
                href="/#contact"
                name="hire-me"
            >
                <svg class="mix-blend-difference" width="18" height="15" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.7188 9.00097L17.4151 12.9488L16.6576 12.1582L19.4471 9.75729L20.3271 8.99985L19.4476 8.24185L16.6573 5.83729L17.4131 5.04849L21.7188 9.00097ZM8.66246 16.5567L13.2396 1.13036L14.3375 1.44207L9.76044 16.8684L8.66246 16.5567ZM5.58672 12.9469L1.28158 8.99777L5.58658 5.05171L6.34241 5.84053L3.55291 8.24145L2.67232 8.99937L3.55291 9.75729L6.34241 12.1582L5.58672 12.9469Z"
                        stroke="#EDEDED"
                        stroke-width="2"
                    />
                </svg>
                Hire Me
            </a>
        </div>
        <div class="relative flex flex-wrap items-center justify-center sm:justify-start gap-6 w-full">
            <div class="relative flex flex-col items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-full bg-zinc-100 dark:bg-black2" name="me">
                <img class="w-16 h-16 md:w-20 md:h-20" src="~/assets/images/Default5.png" alt="Me" title="Kasra Keshvardoost" />
                <img
                    class="absolute top-0 left-0 w-28 h-28 md:w-32 md:h-32 mix-blend-difference rotate"
                    src="~/assets/images/name_circle3.png"
                    alt="Kasra Keshvardoost"
                    title="Kasra Keshvardoost"
                />
            </div>
            <div class="flex flex-col gap-6" name="socials">
                <div class="flex items-center justify-center sm:justify-start gap-2">
                    <img class="w-5 lg:w-6 mix-blend-difference" src="~/assets/images/envelop.svg" title="Email" alt="" />
                    <a class="lg:text-2xl dark:text-gray1" :href="`mailto:${personalInfo.data.email}`">{{ personalInfo.data.email }}</a>
                </div>
                <ul class="flex flex-wrap gap-8" v-if="!!personalInfo.data.socials">
                    <li class="w-8 hover:scale-90" v-for="(link, name) in personalInfo.data.socials" :key="name">
                        <a :href="link"><img :src="`/socials/${name}.svg`" :alt="name" :title="name" /></a>
                    </li>
                </ul>
            </div>
            <small class="work_status flex w-max p-2 px-3 rounded-full bg-black1 text-white">
                <div class="flex items-center gap-3" v-if="personalInfo.data.work_status == 'open'">
                    <b class="bolb-green w-3 h-3 rounded-full"></b> <span>I'm Open For Work</span>
                </div>
                <div class="flex items-center gap-3" v-else-if="personalInfo.data.work_status == 'close'">
                    <b class="bolb-red w-3 h-3 rounded-full"></b> <span>Sorry, can't work right now</span>
                </div>
            </small>
        </div>
        <hr class="w-10/12 mx-auto border-b border-solid border-gray2 opacity-90" />
        <ul class="relative flex flex-wrap items-center justify-center gap-6 w-full" name="sub-links">
            <li class="md:text-lg">
                <nuxt-link class="text-green3 hover:text-green1 dark:text-green1 hover:dark:text-green-400" to="/terms-of-work">Terms Of My Work</nuxt-link>
            </li>
            <li class="md:text-lg">
                <nuxt-link class="text-green3 hover:text-green1 dark:text-green1 hover:dark:text-green-400" to="/my-dev-process">Processes I Use</nuxt-link>
            </li>
            <li class="md:text-lg">
                <a class="text-green3 hover:text-green1 dark:text-green1 hover:dark:text-green-400" href="/#about-me">About Me</a>
            </li>
            <li class="md:text-lg">
                <a class="text-green3 hover:text-green1 dark:text-green1 hover:dark:text-green-400" href="/#projects">My Projects</a>
            </li>
            <!-- <li class="md:text-lg">
                <nuxt-link class="text-green3 hover:text-green1 dark:text-green1 hover:dark:text-green-400" to="/blog">Blog</nuxt-link>
            </li> -->
        </ul>
    </footer>
</template>

<script setup>
import axios from "axios";
import BinaryWall from "~/components/BinaryWall.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const footer = ref(""); // DOM ref
const personalInfo = reactive({ data: [] });

const getPersonalInfo = async () => {
    await axios
        .get(`/api/v1/info`)
        .then((response) => (personalInfo.data = response.data))
        .catch((e) => {});
};
getPersonalInfo();

let animation1 = null;
let animation2 = null;

onMounted(() => {
    const scrollTrigger = { trigger: footer.value, start: "top bottom", end: "bottom bottom", scrub: 1 };
    animation1 = gsap.from(footer.value.querySelector("a[name='logo']"), { scrollTrigger: scrollTrigger, x: "-100%", duration: 1, ease: "ease.in" });
    animation1.progress(1);
    animation2 = gsap.from(footer.value.querySelector("a[name='hire-me']"), { scrollTrigger: scrollTrigger, x: "100%", duration: 1, ease: "ease.in" });
    animation2.progress(1);
    gsap.from(footer.value.querySelector("div[name='me']"), { scrollTrigger: scrollTrigger, x: "-100%", duration: 1, ease: "ease.in" });
    gsap.from(footer.value.querySelector("div[name='socials']"), {
        scrollTrigger: scrollTrigger,
        x: "-150%",
        duration: 1,
        ease: "ease.in",
    });
    gsap.from(footer.value.querySelectorAll("ul[name='sub-links'] > li"), {
        scrollTrigger: { trigger: footer.value, start: "top bottom", end: "bottom 90%", scrub: 2 },
        y: "-150%",
        duration: 1,
        stagger: 0.2,
        ease: "ease.in",
    });
});

onBeforeUnmount(() => {
    animation1.progress(1).kill();
    animation2.progress(1).kill();
});
</script>
