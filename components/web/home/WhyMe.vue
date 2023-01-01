<style scoped></style>

<template>
    <section
        class="relative flex flex-col items-center justify-between gap-10 md:gap-16 p-2 md:px-16 dark:text-white w-full max-w-screen-4xl"
        aria-label="Why Me"
        role="banner"
        ref="WhyMe"
    >
        <span class="absolute flex flex-col items-center font-bold">
            <TextureText text="Why Me?" />
        </span>
        <h2 class="relative f-josefin font-bold text-4xl md:text-6xl text-center">
            <span class="text-green2">&lt;</span>
            Need A Good Performing Website?
            <span class="text-green1">/</span>
            <span class="text-green2">&gt;</span>
        </h2>

        <article class="relative flex flex-col items-center gap-20 p-2 sm:p-6 md:px-10 w-full">
            <header class="flex flex-col gap-4">
                <h3 class="text-2xl md:text-3xl dark:text-slate-50 w-full max-w-screen-lg text-center">
                    Creating a good website that holds up to the latest web standards in this day and age can be a somewhat tedious and complex task.
                </h3>
                <h4 class="text-lg text-green3 dark:text-green2 w-full max-w-screen-lg text-center">
                    Especially for people that are starting new businesses and don’t know where to start.
                </h4>
            </header>
            <hr class="w-6/12 border-b border-solid border-gray1 dark:border-gray3" />
            <div class="relative flex flex-col gap-16 md:gap-6 w-full max-w-screen-4xl p-4 md:p-8 rounded-xl">
                <div class="flex flex-col md:flex-row items-start gap-6 lg:gap-16 md:gap-10">
                    <img class="part1-img w-full max-w-screen-2xs md:max-w-xs h-auto -mt-28" src="~/assets/images/why_me/mind.png" alt="" />
                    <div class="part1-text flex flex-col gap-3">
                        <p class="text-xl lg:text-3xl w-full max-w-4xl opacity-90">
                            There are many aspects of digitizing an Idea from its business logic and design to its deployment and management.
                        </p>
                        <p class="f-jost-regular lg:text-2xl w-full max-w-xl opacity-75">
                            Big companies have multiple programmers handling different aspects of their business and websites.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col-reverse md:flex-row items-center gap-2 -mt-10 1.5xl:-mt-20 mis-auto">
                    <div class="part2-text flex flex-col gap-3">
                        <p class="text-lg lg:text-2xl w-full md:max-w-2xl opacity-90">
                            <span class="f-jost-regular text-3xl md:text-6xl font-bold f-jost text-green1 md:-ml-5">But</span>
                            most small businesses don't have the budget for paying multiple people to handle every aspect of their websites.
                        </p>
                    </div>
                    <img class="part2-img w-full max-w-screen-2xs md:max-w-xs" src="~/assets/images/why_me/money.png" alt="" />
                </div>
                <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mie-auto">
                    <img class="part3-img w-full max-w-xs md:mt-4" src="~/assets/images/why_me/code.png" alt="" />
                    <div class="part3-text relative flex flex-col gap-6 w-full max-w-screen-lg">
                        <p class="f-jost-regular text-2xl lg:text-4xl font-bold text-green3 dark:text-green1">
                            That's where I as a full-stack developer come in.
                        </p>
                        <p class="text-lg lg:text-2xl opacity-90">
                            Full-stack developers have the knowledge of essential parts of a website from start to finish and can design, build, develop, and
                            deploy it.
                            <br />
                            <span class="">And you only need to pay one person for the same amount of work.</span>
                        </p>
                        <p class="f-jost-regular text-lg lg:text-xl opacity-75">
                            But like many things that have flaws, this method is no different.Big companies need multiple people in multiple areas to handle
                            their businesses. it's essential for that level of complexity.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row items-center justify-center lg:justify-end gap-8 2xl:-mb-36">
                    <div class="part4-text flex flex-col gap-3 w-full lg:max-w-3xl">
                        <p class="f-jost-regular text-lg lg:text-2xl opacity-90">But most small to medium businesses can get away with this.</p>
                        <p class="text-3xl lg:text-5xl font-bold text-green3">
                            It all depends on what <b class="text-green1 lg:text-6xl">YOU</b> want to <b class="text-green1 lg:text-6xl">BUILD</b>.
                        </p>
                    </div>
                    <img class="part4-img w-full max-w-screen-2xs" src="~/assets/images/why_me/idea.png" alt="" />
                </div>
                <span class="absolute bottom-1/2 -right-1/2 mr-20 rotate-90 opacity-30 2xl:opacity-50 bg-gray2 dark:bg-gray3">
                    <pre class="text-black1">{{ binary1 }}</pre>
                </span>
                <span class="absolute bottom-1/2 -left-1/2 ml-20 -rotate-90 opacity-30 2xl:opacity-50 bg-gray2 dark:bg-gray3">
                    <pre class="text-black1">{{ binary2 }}</pre>
                </span>
            </div>
        </article>
    </section>
</template>

<script setup>
import TextureText from "~/components/TextureText.vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const WhyMe = ref("");
let animation1 = null;
let animation2 = null;
let animation3 = null;
let animation4 = null;
let animation5 = null;
let animation6 = null;
let animation7 = null;
let animation8 = null;

onMounted(async () => {
    gsap.from(WhyMe.value.querySelector("h2"), {
        scrollTrigger: { trigger: WhyMe.value, start: "top bottom", end: "top", scrub: 1 },
        opacity: 0,
        y: "100%",
        duration: 1,
        ease: "back.inOut(2.4)",
    });
    gsap.from(WhyMe.value.querySelector("article header h3"), {
        scrollTrigger: { trigger: WhyMe.value, start: "top bottom", end: "top", scrub: 1 },
        opacity: 0,
        duration: 1,
        ease: "back.inOut(2.4)",
    });
    gsap.from(WhyMe.value.querySelector("article header h4"), {
        scrollTrigger: { trigger: WhyMe.value, start: "top bottom", end: "top", scrub: 1 },
        opacity: 0,
        duration: 1,
        ease: "back.inOut(2.4)",
    });

    animation1 = gsap.from(WhyMe.value.querySelector("article .part1-img"), {
        scrollTrigger: { trigger: WhyMe.value.querySelector("article .part1-img"), start: "top bottom", end: "bottom 70%", scrub: 1 },
        duration: 1,
        ease: "ease.in",
        opacity: 0,
        x: "-=40%",
    });
    animation1.progress(1);
    animation2 = gsap.from(WhyMe.value.querySelector("article .part1-text"), {
        scrollTrigger: { trigger: WhyMe.value.querySelector("article .part1-text"), start: "top bottom", end: "bottom 70%", scrub: 1 },
        duration: 1,
        ease: "ease.in",
        opacity: 0,
        x: "+=40%",
    });
    animation2.progress(1);
    animation3 = gsap.from(WhyMe.value.querySelector("article .part2-img"), {
        scrollTrigger: { trigger: WhyMe.value.querySelector("article .part2-img"), start: "top bottom", end: "bottom 70%", scrub: 1 },
        duration: 1,
        ease: "ease.in",
        opacity: 0,
        x: "+=40%",
    });
    animation3.progress(1);
    animation4 = gsap.from(WhyMe.value.querySelector("article .part2-text"), {
        scrollTrigger: { trigger: WhyMe.value.querySelector("article .part2-text"), start: "top bottom", end: "bottom 70%", scrub: 1 },
        duration: 1,
        ease: "ease.in",
        opacity: 0,
        x: "-=40%",
    });
    animation4.progress(1);
    animation5 = gsap.from(WhyMe.value.querySelector("article .part3-img"), {
        scrollTrigger: { trigger: WhyMe.value.querySelector("article .part3-img"), start: "top bottom", end: "bottom 70%", scrub: 1 },
        duration: 1,
        ease: "ease.in",
        opacity: 0,
        x: "-=40%",
    });
    animation5.progress(1);
    animation6 = gsap.from(WhyMe.value.querySelector("article .part3-text"), {
        scrollTrigger: { trigger: WhyMe.value.querySelector("article .part3-text"), start: "top bottom", end: "bottom 70%", scrub: 1 },
        duration: 1,
        ease: "ease.in",
        opacity: 0,
        x: "+=40%",
    });
    animation6.progress(1);
    animation7 = gsap.from(WhyMe.value.querySelector("article .part4-text"), {
        scrollTrigger: { trigger: WhyMe.value.querySelector("article .part4-text"), start: "top bottom", end: "bottom 70%", scrub: 1 },
        duration: 1,
        ease: "ease.in",
        opacity: 0,
        x: "-=40%",
    });
    animation7.progress(1);
    animation8 = gsap.from(WhyMe.value.querySelector("article .part4-img"), {
        scrollTrigger: { trigger: WhyMe.value.querySelector("article .part4-img"), start: "top bottom", end: "bottom 70%", scrub: 1 },
        duration: 1,
        ease: "ease.in",
        opacity: 0,
        x: "+=40%",
    });
    animation8.progress(1);
});

onBeforeUnmount(() => {
    animation1.progress(1).kill();
    animation2.progress(1).kill();
    animation3.progress(1).kill();
    animation4.progress(1).kill();
    animation5.progress(1).kill();
    animation6.progress(1).kill();
    animation7.progress(1).kill();
    animation8.progress(1).kill();
});

const binary1 =
    "0  0  1  01  010  101010  11110  101001  10  11  1  0111  1011  01111  1010000  11101  110  1  0100  1010  1  01  11110  1110101  11000  01010  1  11  0010  110";
const binary2 =
    "011  11  0  0  1  101  011  10  10111  11  1101  0101011  11  01010  011011011  1110  100000  101011  11001  00  0010  10  10111  01  01  0010  101  01  1111  0";
</script>
