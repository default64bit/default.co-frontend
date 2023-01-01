<style scoped>
.big-font {
    font-size: clamp(12rem, 30vw, 30rem);
    line-height: 25vw;
    font-family: consolas;
}
.o-ring {
    border-width: 2rem;
    border-style: solid;
}

.neon {
    width: 200vw;
    /* background-color: theme("colors.green2"); */
    /* box-shadow: 0px 0px 100px -20px theme("colors.green1"); */
}

.top-filter {
    width: 110%;
    height: 110%;
    background: linear-gradient(180deg, rgba(120, 241, 161, 0.3) 0%, rgba(20, 193, 173, 0.3) 100%);
    mix-blend-mode: difference;
    filter: blur(20px);
}
</style>

<template>
    <section class="relative flex flex-col items-center w-screen -mb-20 px-4 md:px-16 xl:px-24 text-black2 dark:text-stone-100" ref="section">
        <div class="box-container" ref="boxContainer">
            <!-- <div class="neon absolute top-20 -left-1/2 h-16 rounded-xl rotate-12 bg-green2"></div> -->
            <!-- <div class="neon absolute top-80 -left-1/2 h-16 rounded-xl rotate-6 bg-green1"></div> -->
            <!-- <div class="neon absolute bottom-96 -left-1/2 h-16 rounded-xl bg-green3"></div> -->
        </div>

        <div class="relative flex flex-col items-center justify-center my-36 mt-52">
            <div class="flex items-center justify-center gap-4">
                <span class="big-font select-none" name="41">4</span>
                <span class="o-ring relative flex w-1/3 max-w-3xl rounded-full border-black2 dark:border-stone-100">
                    <img class="mix-blend-difference rotate" src="~/assets/images/binary_circle_white.png" alt="" />
                    <div class="top-filter absolute rounded-full"></div>
                </span>
                <span class="big-font select-none rotate-180" name="42">4</span>
            </div>
            <!-- <div class="absolute top-1/3 w-full h-20 rounded-full border-8 border-solid border-gray3 mix-blend-plus-lighter opacity-20 rotate-6"></div> -->
            <p class="md:text-2xl text-center mt-16">There is nothing here? <span class="opacity-30">Mhmm...</span></p>
            <ButtonPrimary class="btn text-lg mt-10" text="Go Back Home" :isLink="true" linkTo="/" />
        </div>
        <hr class="w-8/12 border-2 border-solid border-gray2 opacity-40" />
    </section>
</template>

<script setup>
import ButtonPrimary from "~/components/form/ButtonPrimary.vue";
import ButtonSecondary from "~/components/form/ButtonSecondary.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

useHead({ title: `404 - Default.CO` });
definePageMeta({ layout: "default" });

const section = ref("");
const boxContainer = ref("");

onMounted(() => {
    gsap.from(section.value.querySelector(".big-font[name='41']"), { duration: 1, delay: 0.3, ease: "ease.inOut", x: "-300%", rotate: "-45deg" });
    gsap.from(section.value.querySelector(".big-font[name='42']"), { duration: 1, delay: 0.3, ease: "ease.inOut", x: "300%", rotate: "135deg" });

    setTimeout(() => ScrollTrigger.refresh(), 500);
});

onBeforeUnmount(() => {});

const router = useRouter();
router.beforeResolve((to, from) => {
    if (to.path !== from.path) setTimeout(() => window.scrollTo({ top: 0 }), 600);
});
</script>
