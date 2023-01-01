<style scoped>
.brg-bar {
    border-right: 1rem solid theme("colors.green2");
    /* backdrop-filter: blur(10px);
    padding-top: 10rem;
    padding-bottom: 5rem;
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
    <section class="relative flex flex-col gap-14 px-6 md:px-16 2xl:px-32 dark:text-white w-full max-w-screen-4xl brg-bar" ref="section">
        <div class="flex flex-col items-center lg:flex-row gap-10">
            <img class="w-full max-w-max object-contain" src="~/assets/images/dev_process/develop.png" title="Developing" alt="" />
            <div class="flex flex-col gap-12">
                <h3 class="w-max text-4xl md:text-5xl f-major bg-gray1 text-gray3">Developing</h3>
                <div class="flex flex-col gap-2 pl-3 border-l-8 border-solid border-green3 dark:border-green2">
                    <p class="text-xl md:text-3xl">
                        Now we have a well-developed logic of the project, a data structure of the project, and a UI design of what the project is going to look
                        like
                    </p>
                    <p class="f-jost-regular opacity-75">
                        These aspects of any project can be changed at any time developing a project, but it is easier to adopt them earlier in the process
                    </p>
                </div>
                <p class="f-jost-regular md:text-lg pl-3 border-l-8 border-solid border-green3 dark:border-green2">
                    The only thing left is to build the thing. Most of the time projects take roughly the estimated time but things will happen and sometimes
                    they take longer to finish based on numerous reasons (e.g. customer’s needs change, ...)
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
        scrollTrigger: { trigger: section.value.querySelector("img"), start: "top bottom", end: "bottom 150%", scrub: 1 },
        y: "50%",
        duration: 2,
        ease: "back.in(1)",
    });
    gsap.from(section.value.querySelector("h3"), {
        scrollTrigger: { trigger: section.value.querySelector("h3"), start: "top bottom", end: "bottom 120%", scrub: 1 },
        x: "100%",
        duration: 1.5,
        ease: "back.in(1)",
    });
    gsap.from(section.value.querySelectorAll("p"), {
        scrollTrigger: { trigger: section.value, start: "top bottom", end: "bottom 70%", scrub: 1 },
        opacity: 0,
        y: "-100%",
        duration: 1,
        stagger: 0.4,
        ease: "ease.out",
    });
});
</script>
