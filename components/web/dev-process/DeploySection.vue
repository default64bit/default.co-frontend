<style scoped>
.brg-bar {
    border-right: 1rem solid theme("colors.green2");
    /* backdrop-filter: blur(10px);
    padding-top: 10rem;
    padding-bottom: 10rem;
    border-radius: 1rem;
    box-shadow: 0px -20px 20px -30px rgba(0, 0, 0, 15%); */
}

@media (min-width: 768px) {
    .brg-bar {
        border-right: 2rem solid theme("colors.green2");
    }
}
</style>

<template>
    <!-- bg-opacity-90 dark:bg-opacity-90 bg-white dark:bg-black1 -->
    <section class="relative flex flex-col gap-10 px-6 md:px-16 2xl:px-32 dark:text-white w-full max-w-screen-4xl brg-bar" ref="section">
        <div class="flex flex-col items-center lg:flex-row gap-10">
            <div class="flex flex-col gap-12">
                <h3 class="md:w-max text-4xl md:text-5xl f-major bg-gray1 text-gray3">Test & Deploy</h3>
                <div class="flex flex-col gap-2 pl-3 border-l-8 border-solid border-green3 dark:border-green2">
                    <p class="f-jost-regular text-lg md:text-xl">
                        After it's finished and tested, we showcase it to the customer and we go throw a review stage. Maybe some parts are not the same as the
                        customer wants, or maybe they need to change some parts of it.
                    </p>
                </div>
            </div>
            <img class="w-full max-w-max object-contain lg:-mt-32" src="~/assets/images/dev_process/cloud.png" title="Test & Deploy" alt="" />
        </div>
        <p class="text-xl md:text-3xl">
            When the review stage is complete and everything looks good we start pushing the project into production mode and start on working on ways to
            Improve and Extend it.
        </p>
    </section>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const section = ref("");

onMounted(() => {
    gsap.from(section.value.querySelector("img"), {
        scrollTrigger: { trigger: section.value.querySelector("img"), start: "top bottom", end: "bottom 120%", scrub: 1 },
        y: "100%",
        duration: 1,
        ease: "back.in(1)",
    });
    gsap.from(section.value.querySelector("h3"), {
        scrollTrigger: { trigger: section.value.querySelector("h3"), start: "top bottom", end: "bottom 120%", scrub: 1 },
        x: "-100%",
        duration: 1.5,
        ease: "back.in(1)",
    });
    gsap.from(section.value.querySelectorAll("p"), {
        scrollTrigger: { trigger: section.value, start: "top bottom", end: "bottom center", scrub: 1 },
        opacity: 0,
        y: "-100%",
        duration: 1,
        stagger: 0.4,
        ease: "ease.out",
    });
});
</script>
