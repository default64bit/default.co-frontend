<style scoped>
.brg-bar {
    border-right: 1rem solid theme("colors.green2");
    /* backdrop-filter: blur(10px);
    padding-top: 10rem;
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
    <section class="relative flex flex-col gap-14 px-6 md:px-16 2xl:px-32 dark:text-white w-full max-w-screen-4xl brg-bar" ref="section">
        <div class="flex flex-col items-center lg:flex-row gap-10">
            <img class="w-full max-w-max object-contain" src="~/assets/images/dev_process/design.png" title="Designing" alt="" />
            <div class="flex flex-col gap-12">
                <h3 class="w-max text-4xl md:text-5xl f-major bg-gray1 text-gray3">Designing</h3>
                <div class="flex flex-col gap-2 pl-3 border-l-8 border-solid border-green3 dark:border-green2">
                    <p class="f-jost-regular opacity-75">
                        At this stage the business plan is somewhat formed and we can decide on what technologies and programming languages are best for their
                        project.
                    </p>
                    <p class="text-xl md:text-3xl">
                        In the meantime, I start prototyping some business and user flows and designing the data structure that is the building block of any
                        website…
                    </p>
                </div>
                <p class="f-jost-regular md:text-lg pl-3 border-l-8 border-solid border-green3 dark:border-green2">
                    Based on the user flows and data structure of the project it is now clear what type of website the customer needs and how complex it is and
                    we can roughly estimate the time and budget of the project…
                </p>
            </div>
        </div>
        <div class="flex flex-col md:flex-row items-center gap-8 p-4 md:p-6 w-full rounded-2xl bg-stone-100 dark:bg-black2 shadow-md" name="box">
            <img style="filter: drop-shadow(0px -5px 30px #80ff8555)" src="~/assets/images/dev_process/cube.svg" alt="" />
            <div class="flex flex-col gap-2">
                <p class="text-xl md:text-2xl">
                    We can also start to do a prototype design of the main pages and decide on the
                    <span class="text-green3 dark:text-green2">Design Language</span> of the project.
                </p>
                <p class="f-jost-regular md:text-lg opacity-75">
                    If the customer is happy with these decisions we continue on to designing the rest of the pages and if any changes in business logic are
                    needed we can start implementing those into the project at this stage.
                </p>
            </div>
        </div>
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
        x: "100%",
        duration: 1.5,
        ease: "back.in(1)",
    });
    gsap.from(section.value.querySelectorAll("p"), {
        scrollTrigger: { trigger: section.value, start: "top bottom", end: "bottom 80%", scrub: 1 },
        opacity: 0,
        y: "-100%",
        duration: 1,
        stagger: 0.4,
        ease: "ease.out",
    });
    gsap.from(section.value.querySelector("div[name='box']"), {
        scrollTrigger: { trigger: section.value, start: "top bottom", end: "bottom center", scrub: 1 },
        y: "100%",
        duration: 1,
        ease: "ease.in",
    });
});
</script>
