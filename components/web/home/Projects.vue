<style scoped>
.skeleton_img {
    height: 32rem;
}

.img-list img {
    height: 16rem;
}

@media (min-width: 768px) {
    .skeleton_img {
        height: 36rem;
    }
    .img-list img {
        height: 36rem;
    }
}
</style>

<template>
    <section
        class="relative flex flex-col items-center justify-between gap-10 md:gap-20 px-4 1.5xl:px-8 2xl:px-16 dark:text-white w-full max-w-screen-4xl"
        aria-label="Projects"
        ref="ProjectsSection"
    >
        <span class="big-bg-text absolute flex flex-col items-center font-bold -mt-6 md:-mt-28">
            <TextureText text="Projects" />
        </span>
        <h2 class="relative f-josefin font-bold text-5xl md:text-7xl text-center">
            <span class="text-green2">&lt;</span>
            Projects
            <span class="text-green1">/</span>
            <span class="text-green2">&gt;</span>
        </h2>

        <div class="relative flex flex-col 1.5xl:flex-row items-center 1.5xl:gap-1 1.5xl:mt-20 w-full">
            <swiper
                class="project-list 1.5xl:relative flex flex-row 1.5xl:flex-col items-center gap-8 flex-shrink-0 w-full max-w-screen-xl 1.5xl:max-w-screen-sm"
                :spaceBetween="12"
                :slidesPerView="`auto`"
                :direction="listDirection"
                v-if="!loadingProjects"
            >
                <swiper-slide
                    class="project-list-item flex flex-col sm:flex-row items-center gap-3 p-3 mt-4 mb-14 1.5xl:mb-6 ml-3 rounded-2xl dark:shadow-2xl w-screen max-w-screen-2xs sm:max-w-lg"
                    :class="[item.active ? 'bg-green1 text-black2' : 'bg-zinc-200 dark:bg-black2']"
                    v-for="(item, i) in projects.list"
                    :key="i"
                    @click="activate(i)"
                >
                    <img class="w-full h-0 sm:w-28 sm:h-32 object-cover rounded-xl -mb-3 sm:-mb-0" :src="item.images[0]" :title="item.name" :alt="item.name" />
                    <div class="flex flex-col gap-3 w-full flex-grow">
                        <div class="relative flex items-start gap-3">
                            <img class="w-20 h-20 sm:w-0 sm:h-0 object-cover rounded-xl" :src="item.images[0]" :title="item.name" :alt="item.name" />
                            <div class="flex flex-col sm:flex-row sm:justify-between gap-1 w-full">
                                <div class="flex flex-col md:gap-2 w-full flex-grow">
                                    <h5 class="text-xl sm:text-2xl font-bold w-full max-w-screen-3xs overflow-hidden text-ellipsis">{{ item.name }}</h5>
                                    <p class="flex text-sm f-jost-regular opacity-75 w-full max-w-screen-2xs overflow-hidden text-ellipsis">
                                        {{ item.desc }}
                                    </p>
                                </div>
                                <button
                                    class="hidden sm:block w-10 h-10 sm:w-16 sm:h-16 rounded-xl text-lg sm:text-3xl opacity-90 flex-shrink-0 bg-zinc-700 text-white"
                                >
                                    O
                                </button>
                            </div>
                            <img
                                class="absolute hidden sm:flex top-4 1.5xl:-top-6 -right-16 xl:-right-16 1.5xl:-right-20 2xl:-right-24 -mr-4 h-20 sm:h-24 2xl:h-28 opacity-75 rotate-90 1.5xl:rotate-0"
                                src="~/assets/images/arrow.svg"
                                alt=""
                                v-if="item.active"
                            />
                        </div>
                        <ul class="relative flex items-center gap-2 md:gap-4 overflow-hidden">
                            <li
                                class="flex items-center justify-center p-2 f-jost-regular rounded-lg text-xs sm:text-sm bg-zinc-50 dark:bg-stone-700 text-black2 dark:text-white"
                                v-for="(tag, t) in item.tags"
                                :key="t"
                            >
                                {{ tag }}
                            </li>
                        </ul>
                    </div>
                </swiper-slide>
            </swiper>

            <div class="relative flex flex-col gap-4 md:gap-8 w-full max-w-screen-xl flex-grow" v-if="!loadingProjects && !!projects.list[active]">
                <div class="flex flex-col gap-4 md:gap-6 w-full max-w-screen-xl">
                    <p class="-mb-2 opacity-75" name="desc">{{ projects.list[active].desc }}</p>
                    <div class="flex flex-wrap items-center gap-4">
                        <h4 class="text-4xl lg:text-5xl font-bold text-green2 w-max max-w-screen-sm text-ellipsis overflow-hidden" name="title">
                            {{ projects.list[active].name }}
                        </h4>
                        <span class="h-1 bg-gray3 dark:bg-gray1 opacity-50 flex-grow" name="line"></span>
                        <a
                            class="flex items-center gap-2 p-2 rounded-lg text-xs md:text-base border-2 border-solid border-gray1"
                            name="link"
                            :href="projects.list[active].link"
                        >
                            <img class="w-3 md:w-4 mix-blend-difference" src="~/assets/images/open.svg" alt="" /> View Website
                        </a>
                    </div>
                    <div class="flex flex-wrap items-start justify-between gap-4">
                        <ul class="tag-list hidden 1.5xl:flex items-center gap-4 overflow-hidden">
                            <li
                                class="flex items-center justify-center p-2 f-jost-regular rounded-lg bg-zinc-100 dark:bg-stone-700"
                                v-for="(tag, t) in projects.list[active].tags"
                                :key="t"
                            >
                                {{ tag }}
                            </li>
                        </ul>
                        <ul class="tech-list flex flex-wrap items-center gap-4 overflow-hidden">
                            <li
                                class="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 p-2 f-jost-regular rounded-lg bg-zinc-200 dark:bg-black2 grayscale hover:grayscale-0"
                                v-for="(tech, t) in projects.list[active].tech"
                                :key="t"
                            >
                                <img class="w-8" :src="tech.img" :title="tech.name" :alt="tech.name" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="img-list w-full max-w-screen-4xl">
                    <swiper
                        class="flex flex-row gap-8 w-full max-w-5xl 1.5xl:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl"
                        :slidesPerView="1"
                        :spaceBetween="50"
                        effect="cards"
                        :modules="[EffectCards]"
                        :loop="true"
                    >
                        <swiper-slide class="w-full shadow-2xl rounded-2xl overflow-hidden" v-for="(image, i) in projects.list[active].images" :key="i">
                            <img
                                class="w-full object-cover select-none"
                                draggable="false"
                                :src="image"
                                :title="`${projects.list[active].name}-img${i}`"
                                :alt="`${projects.list[active].name}-img${i}`"
                            />
                        </swiper-slide>
                    </swiper>
                </div>
                <div
                    class="text-card absolute -bottom-20 md:-bottom-4 flex flex-col md:flex-row md:items-center justify-between gap-4 w-full p-4 rounded-2xl dark:bg-zinc-800 dark:text-white bg-zinc-100 text-black2 shadow-sm z-2"
                >
                    <div class="opacity-75" v-html="projects.list[active].text"></div>
                    <a
                        class="flex items-center justify-center p-2 rounded-lg bg-green1 hover:bg-green2 text-black"
                        :href="`/projects/${projects.list[active].id}`"
                    >
                        Learn More
                    </a>
                </div>
            </div>
            <div class="relative flex flex-col gap-4 md:gap-8 mx-auto mt-10 w-full max-w-screen-xl flex-grow" v-else>
                <div class="flex flex-col gap-4 md:gap-6 w-full max-w-screen-xl">
                    <p class="skeleton w-6/12 h-2 opacity-75" name="desc"></p>
                    <div class="flex flex-wrap items-center gap-4">
                        <h4 class="skeleton w-64 h-6 max-w-screen-sm" name="title"></h4>
                        <span class="h-1 bg-gray3 dark:bg-gray1 opacity-50 flex-grow" name="line"></span>
                    </div>
                    <div class="flex flex-wrap items-start justify-between gap-4">
                        <ul class="tag-list hidden 1.5xl:flex items-center gap-4 overflow-hidden">
                            <li class="skeleton w-20 h-10 p-2 f-jost-regular rounded-lg" v-for="i in 4" :key="i"></li>
                        </ul>
                        <ul class="tech-list flex flex-wrap items-center gap-4 overflow-hidden">
                            <li class="skeleton flex items-center justify-center w-10 h-10 md:w-12 md:h-12 p-2 rounded-lg" v-for="i in 4" :key="i"></li>
                        </ul>
                    </div>
                </div>
                <div class="img-list w-full max-w-screen-4xl">
                    <swiper
                        class="flex flex-row gap-8 w-full max-w-5xl 1.5xl:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl"
                        :slidesPerView="1"
                        effect="cards"
                        :modules="[EffectCards]"
                        :loop="true"
                    >
                        <swiper-slide v-for="i in 4" :key="i" class="skeleton_img skeleton w-full rounded-2xl"></swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import axios from "axios";
import TextureText from "~/components/TextureText.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCards, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const loadingProjects = ref(true);
const projects = reactive({
    list: [],
});
const getProjects = async () => {
    await axios
        .get(`/api/v1/projects`)
        .then((response) => (projects.list = response.data))
        .catch((e) => {})
        .finally(() => (loadingProjects.value = false));
};
getProjects();

const ProjectsSection = ref(""); // DOM ref
const active = ref(0);
const listDirection = ref("vertical");
let a1 = null;
let a2 = null;
let a3 = null;
let a4 = null;

const activate = (index) => {
    if (a1.isActive() || a4.isActive()) return;

    projects.list[active.value].active = false;
    active.value = index;
    projects.list[index].active = true;

    a2.from("section[aria-label='Projects'] .tech-list li", { opacity: 0, x: "100%", stagger: 0.1 });
    a1.from("section[aria-label='Projects'] .tag-list li", { opacity: 0, x: "-100%", stagger: 0.2 });
    a3.from("section[aria-label='Projects'] .img-list", { opacity: 0, y: "20%" });
    a2.from("section[aria-label='Projects'] .text-card", { opacity: 0, y: "-20%" });
    a3.from("section[aria-label='Projects'] p[name='desc']", { opacity: 0, y: "-20%" });
    a4.from("section[aria-label='Projects'] h4[name='title']", { opacity: 0, x: "20%" });
    a4.from("section[aria-label='Projects'] span[name='line']", { scaleX: "0" });
};

const checkWindowSize = () => {
    if (window.outerWidth > 1440) listDirection.value = `vertical`;
    else listDirection.value = `horizontal`;
};

onMounted(() => {
    checkWindowSize();
    window.addEventListener("resize", () => checkWindowSize());

    a1 = gsap.timeline({ duration: 1, ease: "power3.inOut" });
    a2 = gsap.timeline({ duration: 0.3, ease: "back.inOut(2.4)" });
    a3 = gsap.timeline({ duration: 0.5, ease: "back.inOut(2.4)", delay: 0.2 });
    a4 = gsap.timeline({ duration: 0.2, ease: "back.inOut(2.4)", delay: 0.3 });

    gsap.from(ProjectsSection.value.querySelector("h2"), {
        scrollTrigger: { trigger: ProjectsSection.value, start: "top bottom", end: "top center", scrub: true },
        opacity: 0,
        y: "-100%",
        duration: 1,
        ease: "back.inOut(2.4)",
    });
    gsap.from(ProjectsSection.value.querySelector(".big-bg-text"), {
        scrollTrigger: { trigger: ProjectsSection.value, start: "top bottom", end: "top center", scrub: 1 },
        opacity: 0,
        x: "100%",
        duration: 1,
        ease: "back.inOut(1.4)",
    });
    gsap.from(ProjectsSection.value.querySelectorAll(".project-list-item"), {
        scrollTrigger: { trigger: ProjectsSection.value.querySelector(".project-list-item"), start: "top bottom", end: "bottom center", scrub: 3 },
        opacity: 0,
        x: "-200%",
        duration: 1,
        stagger: 0.3,
        ease: "expo.out",
    });
});

onBeforeUnmount(() => {});
</script>
