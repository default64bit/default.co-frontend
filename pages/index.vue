<style scoped></style>

<template>
    <div class="relative flex flex-col items-center gap-12 lg:gap-20 w-screen bg-white dark:bg-black1">
        <!-- <BinaryWall class="absolute w-screen top-0 opacity-60" :angle="0" /> -->

        <Hero class="mt-24" />

        <OfferedFeatures class="mt-96 1.5xl:mt-20" />

        <TechAndTools class="pt-16 mt-16" />

        <hr class="w-8/12 my-6 border-b-2 border-transparent opacity-50" />

        <section
            class="flex flex-col-reverse md:flex-row items-center justify-center gap-10 lg:gap-12 mx-auto my-14 lg:mt-38 p-3 xs:py-6 md:py-12 bg-green1 w-full shadow-md"
            aria-label="Processes I Use"
            role="banner"
            ref="processSection"
        >
            <div class="flex flex-col gap-4 md:gap-6 max-w-2xl">
                <h2 class="font-bold text-4xl md:text-5xl">Learn More About How I Develop Websites</h2>
                <p class="text-lg">You can find out how I get to know what my customers need and how I calculate the price of a project base on that.</p>
                <nuxt-link
                    class="flex items-center justify-center gap-4 w-full md:w-max rounded-xl text-xl p-4 px-6 bg-black2 text-white hover:bg-black hover:shadow-lg"
                    to="/my-dev-process"
                >
                    <span class="f-josefin text-3xl" style="letter-spacing: -4px">&gt;_</span> My Dev Process
                </nuxt-link>
            </div>
            <img class="flex w-full max-w-sm h-auto -mt-40 md:-mr-10 float" src="~/assets/images/code.png" title="My Dev Process" alt="" />
        </section>

        <WhyMe class="pt-16 mt-10" />

        <hr class="w-8/12 lg:mt-40 border-b-2 border-gray2 opacity-50" />

        <Projects class="md:pt-40 mt-10" id="projects" />

        <AboutMe2 class="mt-48 lg:mt-64" id="about-me" />

        <hr class="w-8/12 my-10 lg:my-32 border-b-2 border-gray2 opacity-50" />

        <ContactMe class="pt-4 md:pt-20" id="contact" />

        <ScrollBtn class="" />
    </div>
</template>

<script setup>
import ButtonPrimary from "~/components/form/ButtonPrimary.vue";
import ButtonSecondary from "~/components/form/ButtonSecondary.vue";
import BinaryWall from "~/components/BinaryWall.vue";
import Hero from "~/components/web/home/Hero.vue";
import OfferedFeatures from "~/components/web/home/OfferedFeatures.vue";
import TechAndTools from "~/components/web/home/TechAndTools.vue";
import WhyMe from "~/components/web/home/WhyMe.vue";
import AboutMe from "~/components/web/home/AboutMe.vue";
import AboutMe2 from "~/components/web/home/AboutMe2.vue";
import Projects from "~/components/web/home/Projects.vue";
import ContactMe from "~/components/web/home/ContactMe.vue";
import ScrollBtn from "~/components/web/ScrollBtn.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

useHead({ title: `Default - A Solution To Digitize Ideas` });
definePageMeta({ layout: "default" });

const processSection = ref("");
let sectionAnimation1 = null;
let sectionAnimation2 = null;
let sectionAnimation3 = null;
let sectionAnimation4 = null;

onMounted(() => {
    // const scrollTrigger = { trigger: processSection.value, start: "top bottom", end: "bottom 80%", scrub: 1 };
    sectionAnimation1 = gsap.from(processSection.value, {
        scrollTrigger: { trigger: processSection.value, start: "top bottom", end: "bottom 130%", scrub: 2 },
        y: "50%",
        duration: 2,
        ease: "back.inOut(1.4)",
    });
    sectionAnimation1.progress(1);
    sectionAnimation2 = gsap.from(processSection.value.querySelector("h2"), {
        scrollTrigger: { trigger: processSection.value.querySelector("h2"), start: "top bottom", end: "bottom 70%", scrub: 2 },
        opacity: 0,
        x: "-30%",
        duration: 1,
        ease: "back.inOut(0.4)",
    });
    sectionAnimation2.progress(1);
    sectionAnimation3 = gsap.from(processSection.value.querySelector("p"), {
        scrollTrigger: { trigger: processSection.value.querySelector("p"), start: "top bottom", end: "bottom 70%", scrub: 2 },
        opacity: 0,
        x: "-20%",
        duration: 1,
        ease: "back.inOut(1.4)",
    });
    sectionAnimation3.progress(1);
    sectionAnimation4 = gsap.from(processSection.value.querySelector("img"), {
        scrollTrigger: { trigger: processSection.value.querySelector("img"), start: "top bottom", end: "bottom 100%", scrub: 2 },
        opacity: 0,
        y: "-50%",
        duration: 1,
        ease: "back.inOut(1.4)",
    });
    sectionAnimation4.progress(1);

    setTimeout(() => ScrollTrigger.refresh(), 500);
});

onBeforeUnmount(() => {
    sectionAnimation1.progress(1).kill();
    sectionAnimation2.progress(1).kill();
    sectionAnimation3.progress(1).kill();
    sectionAnimation4.progress(1).kill();
});

const router = useRouter();
router.beforeResolve((to, from) => {
    if (to.path !== from.path) setTimeout(() => window.scrollTo({ top: 0 }), 600);
});
</script>
