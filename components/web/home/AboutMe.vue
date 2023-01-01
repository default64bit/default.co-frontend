<style scoped>
.bg-bar {
    width: 250vw;
}
.circle {
    width: 26rem;
    height: 26rem;
}

.my-pc b {
    top: 4rem;
    left: 4.25rem;
}

.card1 {
    border-radius: 1rem 0 0 1rem;
}

@media (min-width: 400px) {
    .my-pc b {
        top: 5.5rem;
        left: 6rem;
    }
}
@media (min-width: 640px) {
    .circle {
        width: 28rem;
        height: 28rem;
    }
}
@media (min-width: 1440px) {
    .circle {
        width: 36rem;
        height: 36rem;
    }
}
</style>

<template>
    <article
        class="relative flex flex-col items-center justify-between gap-10 md:gap-20 px-4 md:px-16 2xl:px-32 dark:text-white w-full max-w-screen-4xl"
        aria-label="About Me"
        ref="AboutMe"
    >
        <div class="bg-bar absolute -top-10 -right-full lg:-ml-52 rounded-xl h-96 -rotate-45 bg-stone-500 opacity-10 dark:opacity-10"></div>

        <div class="absolute top-64 md:top-96 md:mt-52 right-0 flex items-center justify-center">
            <div class="absolute w-64 h-64 border-8 border-dashed border-spacing-10 border-gray-800 bg-green1 opacity-50"></div>
        </div>
        <div class="binary-disc absolute top-72 md:top-64 md:mt-48 -right-10 md:-right-20 flex items-center justify-center circle opacity-20 md:opacity-100">
            <img class="absolute w-40 h-40" src="~/assets/images/cd3.png" alt="" loading="lazy" />
            <span class="absolute rounded-full w-48 h-48 border-8 border-solid border-gray1 breathe1"></span>
            <span class="absolute rounded-full w-56 h-56 border-8 border-solid border-gray1"></span>
            <span class="absolute rounded-full w-64 h-64 border-8 border-solid border-gray1 breathe2"></span>
            <span class="absolute rounded-full w-72 h-72 border-8 border-solid border-gray1 breathe"></span>
            <span class="absolute rounded-full w-80 h-80 border-8 border-solid border-gray1 breathe2"></span>
            <img class="absolute w-96 h-96 rotate-re" src="~/assets/images/binary_circle.png" alt="" loading="lazy" />
        </div>
        <div
            class="big-disc absolute top-40 md:top-96 md:mt-72 -right-52 md:-right-72 flex items-center justify-center circle opacity-80 md:opacity-100"
            @click="bounce()"
        >
            <img class="absolute circle rotate-re" src="~/assets/images/circle-notch.svg" alt="" loading="lazy" />
            <img class="rotate" src="~/assets/images/binary_circle.png" alt="" loading="lazy" />
            <span class="absolute w-64 h-64 md:w-96 md:h-96 bg-black1 shadow-xl rounded-full breathe"></span>
            <img class="absolute w-28 h-28 sepia" src="~/assets/images/cd3.png" alt="" loading="lazy" />
            <!-- <img class="absolute rotate-re" src="~/assets/images/loading.png" alt="" loading="lazy" /> -->
        </div>

        <header class="flex w-full mb-6 lg:mb-10">
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

        <!-- <img class="space-img absolute top-0 max-w-screen-md lg:max-w-full opacity-20" src="~/assets/images/about_me/space.png" title="space" alt="" /> -->

        <section class="relative flex flex-col justify-center md:justify-start gap-16 w-full dark:text-gray1">
            <div class="flex flex-col-reverse lg:flex-row items-center">
                <div class="card1 flex flex-col p-4 md:p-6 bg-stone-50 dark:bg-black2 z-2">
                    <h4 class="text-3xl font-bold text-green3 dark:text-green-400 mb-4">Who Am I?</h4>
                    <p class="md:text-xl">
                        I’m a
                        <span class="f-josefin font-bold underline text-xl md:text-2xl text-green3 dark:text-green1">Full-stack Web Developer</span>,
                    </p>
                    <p class="md:text-xl">
                        Named <span class="f-josefin font-bold underline text-xl md:text-2xl text-green3 dark:text-green1">Kasra Keshvardoost</span>,
                    </p>
                    <p class="md:text-xl">
                        Born in <span class="f-josefin font-bold underline text-xl md:text-2xl text-green3 dark:text-green1">October Of 1994</span>.
                    </p>
                </div>
                <div class="card-me flex items-end md:-ml-20">
                    <img class="h-48 -mr-48" src="~/assets/images/cd.svg" title="CD" alt="" loading="lazy" />
                    <div class="relative flex flex-col items-center justify-center w-48 h-48">
                        <img class="w-28 h-28" src="~/assets/images/Default5.png" alt="Me" title="Kasra Keshvardoost" />
                        <img
                            class="absolute top-0 left-0 w-48 h-48 mix-blend-difference rotate"
                            src="~/assets/images/name_circle3.png"
                            alt="Kasra Keshvardoost"
                            title="Kasra Keshvardoost"
                        />
                    </div>
                </div>
            </div>
            <div class="flex flex-col-reverse lg:flex-row items-center gap-10">
                <!-- <span class="my-pc relative flex flex-col flex-shrink-0">
                    <img src="~/assets/images/about_me/pc.png" title="My First PC" alt="" loading="lazy" />
                    <b class="absolute text-xs sm:text-base text-green-400"> $> My First PC...<span class="in-N-out">|</span> </b>
                </span> -->
                <div class="card2 flex flex-col gap-4 bg-stone-50 dark:bg-black2 p-4 md:p-6 rounded-2xl w-full max-w-screen-2xl">
                    <h4 class="text-3xl font-bold text-green3 dark:text-green-400">How I got into coding?</h4>
                    <p class="md:text-xl">
                        from a young age, I find myself fascinated by video games and how on earth they were built and created. I never entered the realm of
                        programming and coding until I started my college years. In those years (starting from 2013 till 2018) I find myself enjoying learning
                        about coding and the challenges it brings.
                    </p>
                    <p class="md:text-xl text-emerald-500 dark:text-green-200">
                        I started with rather low level programming language (C++) but started gravitating thoward web development, learning PHP, MySql, Html,
                        Css and Javascript.
                    </p>

                    <hr class="my-2 border-b-2 border-gray3 opacity-10 dark:opacity-60" />

                    <h4 class="text-3xl font-bold text-green3 dark:text-green-400">What I learned by now?</h4>
                    <p class="md:text-xl">
                        Not much after graduate, for my first job I required learning <span class="text-emerald-500 dark:text-green-200">Laravel</span> and
                        started as a backend developer in small startup company called Ratech. fast forwarding two years mosly working on small project and
                        learning about code managment and <span class="text-emerald-500 dark:text-green-200">Git</span>, streancthing some of my softskills such
                        as working as a <span class="text-emerald-500 dark:text-green-200">Team Member</span>,
                        <span class="text-emerald-500 dark:text-green-200">Working Remotly</span> and
                        <span class="text-emerald-500 dark:text-green-200">Problem Solving</span>; I decided to go on my own as a freelancer and expanding my
                        arcenal as a programmer (2021).
                    </p>
                    <p class="md:text-xl">
                        As of any personl that likes new and shinny thing, I started expeiancing with
                        <span class="text-emerald-500 dark:text-green-200">Vue</span> instead of React and finding myslef liking it and stuck with it. Since
                        2021 as my knowledge of Javascript grow I started using it for backend too and learned
                        <span class="text-emerald-500 dark:text-green-200">NodeJS</span> and <span class="text-emerald-500 dark:text-green-200">NestJS</span>
                    </p>
                </div>
            </div>
            <!-- <div class="flex flex-col-reverse lg:flex-row items-center gap-10">
                <div
                    class="card3 flex flex-col gap-4 bg-stone-50 dark:bg-black2 p-4 md:p-6 rounded-2xl w-full max-w-screen-xl "
                >
                    <h4 class="text-3xl font-bold text-green3 dark:text-green-400 mb-4">What I learned by now?</h4>
                    <p class="md:text-xl">
                        Not much after graduate, for my first job I required learning <span class="text-emerald-500 dark:text-green-200">Laravel</span> and
                        started as a backend developer in small startup company called Ratech. fast forwarding two years mosly working on small project and
                        learning about code managment and <span class="text-emerald-500 dark:text-green-200">Git</span>, streancthing some of my softskills such
                        as working as a <span class="text-emerald-500 dark:text-green-200">Team Member</span>,
                        <span class="text-emerald-500 dark:text-green-200">Working Remotly</span> and
                        <span class="text-emerald-500 dark:text-green-200">Problem Solving</span>; I decided to go on my own as a freelancer and expanding my
                        arcenal as a programmer (2021).
                    </p>
                    <p class="md:text-xl">
                        As of any personl that likes new and shinny thing, I started expeiancing with
                        <span class="text-emerald-500 dark:text-green-200">Vue</span> instead of React and finding myslef liking it and stuck with it. Since
                        2021 as my knowledge of Javascript grow I started using it for backend too and learned
                        <span class="text-emerald-500 dark:text-green-200">NodeJS</span> and <span class="text-emerald-500 dark:text-green-200">NestJS</span>
                    </p>
                </div>
            </div> -->
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
let animation4 = null;
let animation5 = null;
let animation6 = null;

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
    animation2 = gsap.from(AboutMe.value.querySelector(".card-me"), {
        scrollTrigger: { trigger: AboutMe.value.querySelector(".card-me"), start: "top center", end: "bottom bottom", scrub: 1 },
        x: "100%",
        duration: 1,
        ease: "back.in(1.7)",
    });
    animation2.progress(1);
    animation3 = gsap.from(AboutMe.value.querySelector(".card1"), {
        scrollTrigger: { trigger: AboutMe.value.querySelector(".card1"), start: "top bottom", end: "bottom bottom", scrub: 1 },
        x: "-100%",
        rotate: "15deg",
        duration: 1,
        ease: "back.in(1.7)",
    });
    animation3.progress(1);
    animation4 = gsap.from(AboutMe.value.querySelector(".my-pc"), {
        scrollTrigger: { trigger: AboutMe.value.querySelector(".my-pc"), start: "top bottom", end: "bottom bottom", scrub: 1 },
        y: "+=100%",
        opacity: "0",
        duration: 1,
        ease: "back.in(1.7)",
    });
    animation4.progress(1);
    animation5 = gsap.from(AboutMe.value.querySelector(".card2"), {
        scrollTrigger: { trigger: AboutMe.value.querySelector(".card1"), start: "top center", end: "bottom bottom", scrub: 1 },
        y: "50%",
        x: "10%",
        rotate: "15deg",
        duration: 1,
        ease: "back.in(1.7)",
    });
    animation5.progress(1);
    animation6 = gsap.from(AboutMe.value.querySelector(".card3"), {
        scrollTrigger: { trigger: AboutMe.value.querySelector(".card3"), start: "top bottom", end: "bottom 200%", scrub: 1 },
        y: "100%",
        rotate: "15deg",
        duration: 1,
        ease: "back.in(1.7)",
    });
    animation6.progress(1);

    // animation1.restart();
    // animation2.restart();
    // animation3.restart();
    // animation4.restart();
    // animation5.restart();
    // animation6.restart();
});

onBeforeUnmount(() => {
    animation1.progress(1).kill();
    animation2.progress(1).kill();
    animation3.progress(1).kill();
    animation4.progress(1).kill();
    animation5.progress(1).kill();
    animation6.progress(1).kill();
});

const bounce = () => {
    gsap.from(AboutMe.value.querySelector(".big-disc"), { scale: "1.2", duration: 0.5, ease: "bounce.out" });
};
</script>
