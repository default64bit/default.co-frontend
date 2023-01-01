<style scoped>
ul li h3 {
    transition: all 0.2s;
}
</style>

<template>
    <section
        class="relative p-8 md:px-16 2xl:px-16 w-full max-w-screen-4xl bg-stone-50 dark:bg-neutral-800 overflow-hidden"
        aria-label="Offered Features"
        title="Offered Features"
        role="banner"
        ref="offeredFeatureSection"
    >
        <BinaryWall class="absolute left-0 -top-2 w-screen h-full opacity-60" :angle="0" />
        <ul class="flex flex-wrap justify-center gap-6 lg:gap-4">
            <li class="flex items-center justify-center gap-4 p-4 hover:bg-stone-200 hover:dark:bg-black2 hover:rounded-2xl group">
                <span class="flex items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full bg-black2 flex-shrink-0">
                    <img class="w-12 md:w-16" src="~/assets/images/features/consult.png" title="consultation" alt="" loading="lazy" />
                </span>
                <div class="flex flex-col gap-2">
                    <h3 class="font-bold text-2xl lg:text-3xl text-green3 dark:text-green2 group-hover:mt-3">Good Looking</h3>
                    <p class="w-full max-w-screen-2xs f-josefin opacity-90 text-black dark:text-white">
                        Feel outdated and untrustworthy? Let me dust it of for you
                    </p>
                </div>
            </li>
            <li class="flex items-center justify-center gap-4 p-4 hover:bg-stone-200 hover:dark:bg-black2 hover:rounded-2xl group">
                <span class="flex items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full bg-black2 flex-shrink-0">
                    <img class="w-12 md:w-16" src="~/assets/images/features/development.png" title="UI/UX Design" alt="" loading="lazy" />
                </span>
                <div class="flex flex-col gap-2">
                    <h3 class="font-bold text-2xl lg:text-3xl text-green3 dark:text-green2 group-hover:mt-3">Powerful</h3>
                    <p class="w-full max-w-screen-2xs f-josefin opacity-90 text-black dark:text-white">Not only it looks good, but it will work just as good</p>
                </div>
            </li>
            <li class="flex items-center justify-center gap-4 p-4 hover:bg-stone-200 hover:dark:bg-black2 hover:rounded-2xl group">
                <span class="flex items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full bg-black2 flex-shrink-0">
                    <img class="w-12 md:w-16" src="~/assets/images/features/design.png" title="Frontend And Backend Development" alt="" loading="lazy" />
                </span>
                <div class="flex flex-col gap-2">
                    <h3 class="font-bold text-2xl lg:text-3xl text-green3 dark:text-green2 group-hover:mt-3">Responsive</h3>
                    <p class="w-full max-w-screen-2xs f-josefin opacity-90 text-black dark:text-white">
                        Mobile, Tablet, Laptop, Desktop... You name it, it will work
                    </p>
                </div>
            </li>
            <li class="flex items-center justify-center gap-4 p-4 hover:bg-stone-200 hover:dark:bg-black2 hover:rounded-2xl group">
                <span class="flex items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full bg-black2 flex-shrink-0">
                    <img class="w-12 md:w-16" src="~/assets/images/features/deploy.png" title="Deployment" alt="" loading="lazy" />
                </span>
                <div class="flex flex-col gap-2">
                    <h3 class="font-bold text-2xl lg:text-3xl text-green3 dark:text-green2 group-hover:mt-3">Maintainable</h3>
                    <p class="w-full max-w-screen-2xs f-josefin opacity-90 text-black dark:text-white">
                        Need a new feature, or maybe you need to upgrade... No problem
                    </p>
                </div>
            </li>
        </ul>
    </section>
</template>

<script setup>
import { onUnmounted } from "@vue/runtime-core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const offeredFeatureSection = ref("");
let sectionAnimation = null;

onMounted(() => {
    sectionAnimation = gsap.from(offeredFeatureSection.value.querySelectorAll("li"), {
        scrollTrigger: { trigger: offeredFeatureSection.value, start: "top bottom", end: "bottom 40%", scrub: 1 },
        opacity: 0,
        y: "-50%",
        duration: 1,
        stagger: 0.2,
        ease: "back.inOut(2.4)",
        onComplete: () => {
            if (offeredFeatureSection.value) {
                offeredFeatureSection.value.querySelectorAll("li").forEach((element) => (element.style.transition = "all .2s"));
            }
        },
    });
    sectionAnimation.progress(1);
});

onBeforeUnmount(() => {
    offeredFeatureSection.value.querySelectorAll("li").forEach((element) => (element.style.transition = "none"));
    sectionAnimation.progress(1).kill();
});
</script>
