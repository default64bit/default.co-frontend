<style scoped>
.top-filter {
    background: linear-gradient(180deg, rgba(120, 241, 161, 0.25) 0%, rgba(20, 193, 173, 0.1675) 100%);
    mix-blend-mode: difference;
    filter: blur(40px);
}
.magnet {
    height: 16.5rem;
    top: -1rem;
}

@media (min-width: 1280px) {
    .magnet {
        height: 22.5rem;
        top: -1.5rem;
    }
}
</style>

<template>
    <section class="relative flex flex-col gap-14 mt-32 md:mt-48 px-6 md:px-16 2xl:px-32 dark:text-white w-full max-w-5xl xl:max-w-screen-4xl" ref="hero">
        <div class="relative flex flex-col xl:flex-row items-start justify-between w-full">
            <div class="flex flex-col gap-8 w-full max-w-screen-xl">
                <div class="relative flex flex-col items-start gap-6 md:gap-8 w-full">
                    <h1 class="flex flex-col gap-2 font-bold text-4xl md:text-5xl xl:text-7xl">
                        <span class="s1">
                            How Do I
                            <span class="relative text-black2">
                                <span class="absolute bg-green1 h-8 md:h-10 xl:h-16 w-full"></span><span class="relative">Approach</span>
                            </span>
                            A Project
                            <span class="text-green2 dark:text-green-300 text-shadow-black in-N-out">?</span>
                        </span>
                    </h1>
                    <p class="dark:f-jost-regular text-lg xl:text-2xl w-full max-w-6xl opacity-75" name="p1">
                        Building a project is hard. There is a lot of work that needs to be done to transform an idea into a fully functional product that users
                        can
                        <b class="text-green3 dark:text-green2">Trust</b> and <b class="text-green3 dark:text-green2">Use</b> on daily bases.
                    </p>
                </div>
                <div class="w-screen h-16 border-8 border-solid border-gray1 dark:border-gray3 opacity-50 rounded-full" name="line"></div>
            </div>
            <img class="absolute top-1/2 lg:mt-8 -left-8 lg:-left-12 mix-blend-difference" src="~/assets/images/arrow-down3.svg" alt="" />
            <div class="relative flex items-center justify-center w-64 h-52 xl:w-96 xl:h-72 flex-shrink-0 mis-auto -mt-16 xl:mt-0" ref="magnet">
                <div class="absolute left-36 xl:left-52 w-64 h-64 xl:w-96 xl:h-96 bg-gray1 opacity-75 magnet"></div>
                <div class="absolute left-0 w-3/6 h-64 xl:w-48 xl:h-96 rounded-l-full bg-black2 magnet"></div>
                <div class="absolute left-6 -bottom-6 w-56 h-28 xl:w-80 xl:h-40 rounded-b-full bg-green1"></div>
                <img class="absolute ml-4 -mb-7 xl:-ml-4 xl:-mb-4 w-28 h-28 xl:w-40 xl:h-40" src="~/assets/images/cd4.png" alt="" />
                <img class="absolute ml-4 -mb-7 xl:-ml-4 xl:-mb-4 w-52 h-52 xl:w-72 xl:h-72 rotate" src="~/assets/images/binary_circle.png" alt="" />
                <div class="top-filter absolute w-64 h-64 xl:w-96 xl:h-96 -ml-6 -mb-6 rounded-full"></div>
            </div>
        </div>
        <div
            class="flex flex-col md:flex-row items-center gap-8 p-4 md:p-6 w-full max-w-screen-xl rounded-2xl bg-stone-100 dark:bg-black2 shadow-md"
            name="box"
        >
            <img class="lamp-effect" style="filter: drop-shadow(0px -15px 20px #80ff85)" src="~/assets/images/dev_process/lamp.svg" alt="" />
            <p class="text-xl md:text-3xl">
                For this to happen first we need to understand the business idea and its <span class="text-green3 dark:text-green2">Potential</span>, how we can
                extend it, and how we can improve upon it.
            </p>
        </div>
        <p class="md:text-xl opacity-75 pl-3 border-l-8 border-solid border-green3 dark:border-green2" name="p2">
            I usually do a couple of consultation sessions with my customers to know what they want and try to improve their raw ideas based on my previous
            experience and guide them to what is the better way to do some certain part of their project.
        </p>
    </section>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const hero = ref("");
const magnet = ref("");

onMounted(() => {
    gsap.from(magnet.value.querySelector("div:nth-child(1)"), { duration: 1, delay: 0.1, ease: "back.inOut(1.4)", opacity: 0, x: "100%" });
    gsap.from(magnet.value.querySelector("div:nth-child(2)"), { duration: 1, delay: 0.1, ease: "back.inOut(1.4)", opacity: 0, x: "100%" });
    gsap.from(magnet.value.querySelector("div:nth-child(3)"), { duration: 1, delay: 0.3, ease: "back.inOut(1.4)", opacity: 0, y: "-150%", rotate: "90deg" });
    gsap.from(magnet.value.querySelector("img:nth-child(4)"), { duration: 1, delay: 0.5, ease: "back.inOut(1.4)", opacity: 0, scale: "1.1" });
    gsap.from(magnet.value.querySelector("img:nth-child(5)"), { duration: 1, delay: 0.4, ease: "back.inOut(1.4)", opacity: 0 });
    gsap.from(magnet.value.querySelector("div:nth-child(6)"), { duration: 2, delay: 0.5, ease: "back.out(2)", opacity: 0, scale: 9 });

    gsap.from(hero.value.querySelector("h1"), { duration: 0.5, ease: "back.inOut(1.4)", opacity: 0, y: "-100%" });
    gsap.from(hero.value.querySelector("p[name='p1']"), { duration: 1, ease: "back.inOut(1.4)", opacity: 0, y: "100%" });
    // gsap.from(hero.value.querySelector("div[name='line']"), { duration: 1, ease: "ease.in", width: "0vw" });
    gsap.from(hero.value.querySelector("div[name='box']"), { duration: 1, ease: "ease.in", x: "-100%" });
    gsap.from(hero.value.querySelector("p[name='p2']"), { duration: 1, ease: "back.inOut(1.4)", opacity: 0, y: "100%" });
});
</script>
