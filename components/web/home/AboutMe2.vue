<style scoped>
.bg-bar {
    width: 250vw;
}

.dark .card {
    box-shadow: -5px 0px 30px -10px rgba(0, 0, 0, 35%);
}

.card {
    border-radius: 1rem 0 0 1rem;
    box-shadow: -15px 0px 35px -20px rgba(0, 0, 0, 15%);
    backdrop-filter: blur(5px);

    margin-top: -50%;
}

@media (min-width: 1024px) {
    .card {
        margin-top: 0;
    }
}
</style>

<template>
    <article
        class="relative flex flex-col items-center justify-between gap-10 md:gap-20 dark:text-white w-full max-w-screen-4xl"
        aria-label="About Me"
        ref="AboutMe"
    >
        <div class="bg-bar absolute -top-10 -right-full lg:-ml-52 rounded-xl h-96 -rotate-45 bg-stone-500 opacity-10 dark:opacity-10"></div>

        <header class="flex w-full mb-6 lg:mb-10 ml-4 md:ml-16 2xl:ml-32">
            <span class="big-bg-text absolute flex flex-col items-center font-bold -mt-6 md:-mt-28">
                <TextureText text="About Me" />
            </span>
            <h2 class="relative f-josefin font-bold text-5xl md:text-6xl text-center">
                <span class="text-green2">&lt;</span>
                Know Me Better
                <span class="text-green1">/</span>
                <span class="text-green2">&gt;</span>
            </h2>
        </header>

        <section class="relative flex flex-col lg:flex-row items-center w-full dark:text-stone-200">
            <div class="img relative ml-auto -mr-28">
                <img class="drop-shadow-xl" src="~/assets/images/about_me/img.png" alt="" />
            </div>
            <div
                class="card flex flex-col gap-8 bg-stone-100 dark:bg-black2 bg-opacity-70 dark:bg-opacity-50 p-6 md:p-10 lg:p-12 mr-0 ml-auto w-full max-w-screen-xl"
            >
                <p class="f-josefin md:text-xl opacity-80">
                    from a young age, I find myself fascinated by video games and how on earth they were built and created. I never entered the realm of
                    programming and coding until I started my college years. In those years (starting from 2013 till 2018) I find myself enjoying learning about
                    coding and the challenges it brings.
                </p>
                <div class="flex gap-6">
                    <div class="w-36 rounded-xl bg-green1 opacity-75"></div>
                    <div class="flex flex-col gap-8">
                        <p class="f-josefin md:text-xl pl-2 border-l-4 border-solid border-green3 dark:border-green2">
                            I started with rather low level programming language (C++) but started gravitating thoward web development, learning PHP, MySql,
                            Html, Css and Javascript.
                        </p>
                        <div class="flex flex-col opacity-80">
                            <p class="f-josefin md:text-xl">
                                Not much after graduate, for my first job I required learning
                                <strong class="text-emerald-500 dark:text-green-200">Laravel</strong> and started as a backend developer in small startup
                                company called Ratech.
                            </p>
                            <p class="f-josefin md:text-xl">
                                fast forwarding two years mosly working on small project and learning about code managment and
                                <strong class="text-emerald-500 dark:text-green-200">Git</strong>, streancthing some of my softskills such as working as a
                                <strong class="text-emerald-500 dark:text-green-200">Team Member</strong>,
                                <strong class="text-emerald-500 dark:text-green-200">Working Remotly</strong> and
                                <strong class="text-emerald-500 dark:text-green-200">Problem Solving</strong>; I decided to go on my own as a freelancer and
                                expanding my arcenal as a programmer (2021).
                            </p>
                        </div>
                        <p class="f-josefin md:text-xl p-4 bg-white dark:bg-black1 rounded-xl">
                            As of any personl that likes new and shinny thing, I started expeiancing with
                            <strong class="text-emerald-500 dark:text-green-200">Vue</strong> instead of React and finding myslef liking it and stuck with it.
                            Since 2021 as my knowledge of Javascript grow I started using it for backend too and learned
                            <strong class="text-emerald-500 dark:text-green-200">NodeJS</strong> and
                            <strong class="text-emerald-500 dark:text-green-200">NestJS</strong>
                        </p>
                    </div>
                </div>

                <p class="f-josefin md:text-xl pl-2 border-l-4 border-solid border-green3 dark:border-green2">
                    Since 2021 I worked with these tools and technologies in my projects.
                </p>
            </div>
        </section>
    </article>
</template>

<script setup>
import TextureText from "~/components/TextureText.vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutMe = ref("");
let animation1 = null;
let animation2 = null;
let animation3 = null;

onMounted(() => {
    let scrollTrigger = {};
    if (window.innerWidth < 768) scrollTrigger = { trigger: AboutMe.value, start: "top bottom", end: "20% bottom", scrub: 1 };
    else scrollTrigger = { trigger: AboutMe.value, start: "top bottom", end: "center bottom", scrub: 1 };

    gsap.from(AboutMe.value.querySelector("h2"), {
        scrollTrigger: { trigger: AboutMe.value, start: "top bottom", end: "top", scrub: 1 },
        opacity: 0,
        x: "-100%",
        duration: 1,
        ease: "back.inOut(2.4)",
    });
    gsap.from(AboutMe.value.querySelector(".big-bg-text"), {
        scrollTrigger: { trigger: AboutMe.value, start: "top bottom", end: "top", scrub: 1 },
        x: "20%",
        duration: 1,
        ease: "back.inOut(1.4)",
    });
    animation1 = gsap.from(AboutMe.value.querySelector(".bg-bar"), {
        scrollTrigger: { trigger: AboutMe.value.querySelector(".bg-bar"), start: "top center", end: "bottom center", scrub: 1 },
        rotate: "5deg",
        duration: 1,
        ease: "back.inOut(2.4)",
    });
    animation1.progress(1);
    animation2 = gsap.from(AboutMe.value.querySelectorAll("p"), {
        scrollTrigger: { trigger: AboutMe.value, start: "top center", end: "bottom bottom", scrub: 1 },
        x: "100%",
        duration: 1,
        stagger: 0.2,
        ease: "ease.in",
    });
    animation2.progress(1);
    animation3 = gsap.from(AboutMe.value.querySelector(".img"), {
        scrollTrigger: { trigger: AboutMe.value.querySelector(".img"), start: "top bottom", end: "bottom 120%", scrub: 1 },
        x: "-100%",
        rotate: "-15deg",
        duration: 1,
        ease: "back.in(1.7)",
    });
    animation3.progress(1);
});

onBeforeUnmount(() => {
    animation1.progress(1).kill();
    animation2.progress(1).kill();
    animation3.progress(1).kill();
});

const bounce = () => {
    gsap.from(AboutMe.value.querySelector(".big-disc"), { scale: "1.2", duration: 0.5, ease: "bounce.out" });
};
</script>
