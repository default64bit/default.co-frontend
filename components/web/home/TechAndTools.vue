<style scoped>
/* .dark section {
    border: 0.5rem solid theme("colors.stone.600");
}
section {
    border: 0.5rem solid theme("colors.stone.300");
} */
.group-bottom-bar {
    width: calc(100% + 2rem);
    margin: auto;
}
</style>

<template>
    <!-- class="relative flex flex-col items-center justify-between gap-20 md:gap-22 p-10 md:px-16 2xl:px-32 h-auto w-full max-w-screen-2xl rounded-3xl dark:shadow-xl overflow-hidden" -->
    <section
        class="relative flex flex-col items-center justify-between gap-20 md:gap-22 p-10 md:px-16 2xl:px-32 h-auto w-full max-w-screen-3xl rounded-3xl overflow-hidden"
        name="tech&tools"
        aria-label="Technologies And Tools"
        role="banner"
        ref="TechnologiesAndTools"
    >
        <!-- <BinaryWall class="absolute bottom-1 opacity-40" :angle="180" /> -->
        <span class="big-bg-text absolute flex flex-col items-center font-bold opacity-80">
            <TextureText text="Technologies" />
            <TextureText :text="`&`" />
            <TextureText text="Tools" />
        </span>
        <h2 class="relative f-josefin font-bold text-3xl md:text-6xl dark:text-white text-center mt-6 -mb-12">
            <span class="text-green2">&lt;</span>
            Technologies And Tools
            <span class="text-green1">/</span>
            <span class="text-green2">&gt;</span>
        </h2>

        <div class="relative flex flex-col items-center gap-8">
            <h3 class="text-xl md:text-2xl f-josefin text-center text-green3 dark:text-green2">What I use mostly to design and build my customers projects</h3>
            <div class="flex flex-col lg:flex-row items-center justify-center gap-24 lg:gap-16 w-full max-w-screen-xl">
                <div class="relative flex flex-col items-center">
                    <ul class="flex flex-wrap justify-center gap-4 lg:gap-8">
                        <li
                            class="flex flex-col items-start w-28 h-28 p-4 bg-black text-white hover:text-black hover:bg-slate-50 hover:scale-110 rounded-md shadow-md"
                            v-for="(item, i) in data.mostUsed.design"
                            :key="i"
                        >
                            <img class="w-12 h-12 md:w-14 md:h-14 object-contain" :src="item.img" alt="" />
                            <small class="flex mb-0 mt-auto">{{ item.name }}</small>
                        </li>
                    </ul>
                    <span class="absolute -bottom-4 -left-4 h-8 border-2 border-dashed border-gray2"></span>
                    <span class="absolute -bottom-4 -right-4 h-8 border-2 border-dashed border-gray2"></span>
                    <span class="group-bottom-bar absolute -bottom-4 w-full h-1 bg-gray2"></span>
                    <span class="absolute -bottom-7 w-1 h-4 bg-gray2"></span>
                    <div class="absolute -bottom-16 bg-green3 p-2 w-max">
                        <img class="h-4" src="~/assets/images/Design.svg" alt="" />
                    </div>
                </div>
                <div class="relative flex flex-col items-center">
                    <ul class="flex flex-wrap justify-center gap-4 lg:gap-8">
                        <li
                            class="flex flex-col items-start w-28 h-28 p-4 bg-black text-white hover:text-black hover:bg-slate-50 hover:scale-110 rounded-md shadow-md"
                            v-for="(item, i) in data.mostUsed.develop"
                            :key="i"
                        >
                            <img class="w-12 h-12 md:w-14 md:h-14 object-contain" :src="item.img" alt="" />
                            <small class="flex mb-0 mt-auto">{{ item.name }}</small>
                        </li>
                    </ul>
                    <span class="absolute -bottom-4 -left-4 h-8 border-2 border-dashed border-gray2"></span>
                    <span class="absolute -bottom-4 -right-4 h-8 border-2 border-dashed border-gray2"></span>
                    <span class="group-bottom-bar absolute -bottom-4 w-full h-1 bg-gray2"></span>
                    <span class="absolute -bottom-7 w-1 h-4 bg-gray2"></span>
                    <div class="absolute -bottom-16 bg-green2 p-2 w-max">
                        <img class="h-4" src="~/assets/images/Develop.svg" alt="" />
                    </div>
                </div>
                <div class="relative flex flex-col items-center">
                    <ul class="flex flex-wrap justify-center gap-4 lg:gap-8">
                        <li
                            class="flex flex-col items-start w-28 h-28 p-4 bg-black text-white hover:text-black hover:bg-slate-50 hover:scale-110 rounded-md shadow-md"
                            v-for="(item, i) in data.mostUsed.deploy"
                            :key="i"
                        >
                            <img class="w-12 h-12 md:w-14 md:h-14 object-contain" :src="item.img" alt="" />
                            <small class="flex mb-0 mt-auto">{{ item.name }}</small>
                        </li>
                    </ul>
                    <span class="absolute -bottom-4 -left-4 h-8 border-2 border-dashed border-gray2"></span>
                    <span class="absolute -bottom-4 -right-4 h-8 border-2 border-dashed border-gray2"></span>
                    <span class="group-bottom-bar absolute -bottom-4 w-full h-1 bg-gray2"></span>
                    <span class="absolute -bottom-7 w-1 h-4 bg-gray2"></span>
                    <div class="absolute -bottom-16 bg-green1 p-2 w-max">
                        <img class="h-4" src="~/assets/images/Deploy.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div class="relative flex flex-col items-center gap-8 mt-14">
            <h3 class="text-xl md:text-2xl f-josefin text-center text-green3 dark:text-green2">Technologies that I also tackled and used before</h3>
            <ul class="flex flex-wrap items-center justify-center gap-8 w-full max-w-screen-lg">
                <li
                    class="flex flex-col items-start w-28 h-28 p-4 bg-black text-white hover:text-black hover:bg-slate-50 hover:scale-110 rounded-md shadow-md"
                    v-for="(item, i) in data.other"
                    :key="i"
                >
                    <img class="w-12 h-12 md:w-14 md:h-14 object-contain" :src="item.img" alt="" />
                    <small class="flex mb-0 mt-auto">{{ item.name }}</small>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import axios from "axios";
import TextureText from "~/components/TextureText.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const data = reactive({
    mostUsed: {
        design: [{ img: "/tech/Figma.png", name: "Figma" }],
        develop: [
            { img: "/tech/VueJS.png", name: "VueJS" },
            { img: "/tech/NuxtJS.png", name: "NuxtJS" },
            { img: "/tech/NestJS.png", name: "NestJS" },
            { img: "/tech/MongoDB.png", name: "MongoDB" },
        ],
        deploy: [
            { img: "/tech/docker.png", name: "Docker" },
            { img: "/tech/kubernetes.png", name: "Kubernetes" },
        ],
    },
    other: [
        { img: "/tech/WebRTC.png", name: "WebRTC" },
        { img: "/tech/WebSockets.png", name: "WebSockets" },
        { img: "/tech/MySQL.png", name: "MySQL" },
        { img: "/tech/Laravel.png", name: "Laravel" },
        { img: "/tech/ElectronJS.png", name: "ElectronJS" },
        { img: "/tech/REST.png", name: "REST" },
        { img: "/tech/PWA.png", name: "PWA" },
        { img: "/tech/OAuth2.0.png", name: "OAuth2.0" },
        { img: "/tech/TS.png", name: "TS" },
        { img: "/tech/Tailwind.png", name: "Tailwind" },
    ],
});
const TechnologiesAndTools = ref(""); // DOM ref

const getTechAndTools = async () => {
    await axios
        .get(`/api/v1/tech-and-tools`)
        .then((response) => {
            data.mostUsed.design = response.data.mostUsed.design;
            data.mostUsed.develop = response.data.mostUsed.develop;
            data.mostUsed.deploy = response.data.mostUsed.deploy;
            data.other = response.data.other;
        })
        .catch((e) => {});
};
getTechAndTools();

onMounted(() => {
    const scrollTrigger = { trigger: TechnologiesAndTools.value, start: "top bottom", end: "top", scrub: 1 };
    gsap.from(TechnologiesAndTools.value.querySelector("h2"), { scrollTrigger: scrollTrigger, opacity: 0, y: "100%", duration: 1, ease: "back.inOut(1.4)" });
    gsap.from(TechnologiesAndTools.value.querySelector(".big-bg-text"), {
        scrollTrigger: scrollTrigger,
        opacity: 0,
        y: "-100%",
        duration: 1,
        ease: "back.inOut(1.4)",
    });
    gsap.from(TechnologiesAndTools.value.querySelectorAll("h3"), {
        scrollTrigger: scrollTrigger,
        opacity: 0,
        y: "-100%",
        duration: 1,
        stagger: 0.3,
        ease: "ease.in",
    });
    gsap.from(TechnologiesAndTools.value.querySelectorAll("li"), {
        scrollTrigger: scrollTrigger,
        opacity: 0,
        y: "100%",
        duration: 1,
        stagger: 0.3,
        ease: "ease.out",
        onComplete: () => {
            if (TechnologiesAndTools.value) {
                TechnologiesAndTools.value.querySelectorAll("li").forEach((element) => (element.style.transition = "all .2s"));
            }
        },
    });
});

onBeforeUnmount(() => {
    TechnologiesAndTools.value.querySelectorAll("li").forEach((element) => (element.style.transition = "none"));
});
</script>
