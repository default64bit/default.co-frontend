<style scoped>
.bg-bar {
    width: 200vw;
    height: 16rem;
    top: 135vh;
    transform: rotate(30deg);
}
</style>

<template>
    <div class="relative flex flex-col items-center gap-40 w-screen bg-white dark:bg-black1" ref="devProcess">
        <!-- <BinaryWall class="absolute w-screen top-0 opacity-60" :angle="0" /> -->

        <div class="bg-bar absolute flex items-center justify-center bg-stone-500 dark:bg-gray1 opacity-10">
            <span class="w-8/12 h-16 rounded-full border-8 border-solid border-green1 dark:border-black2"></span>
        </div>

        <Hero class="panel" />

        <DesignSection class="panel" />

        <DevelopSection class="panel" />

        <DeploySection class="panel" />

        <section
            class="relative flex flex-col items-center justify-center gap-4 -mb-28 py-40 p-16 px-6 md:px-16 2xl:px-32 bg-black2 text-white dark:bg-stone-100 dark:text-black2 w-full"
        >
            <pre class="absolute top-2 opacity-20 letter-space-2">
                101 011 10 10111 11 1101 0101011 11 01010 011011011 1110 100000 101011 11001 00 0010 10 10111 01 01 0010 101 01 1111 0
            </pre>
            <h3 class="text-5xl lg:text-7xl font-bold text-green1 dark:text-green3 text-center">Got An Idea In Mind ?</h3>
            <p class="f-josefin md:text-2xl text-center">Let’s see what we can do together</p>
            <ButtonPrimary class="mt-10 md:text-3xl shadow-2xl" text="Contact Me" :samepage="true" :isLink="true" linkTo="/#contact" />
            <pre class="absolute -bottom-4 opacity-20 letter-space-2">
                101 011 10 10111 11 1101 0101011 11 01010 011011011 1110 100000 101011 11001 00 0010 10 10111 01 01 0010 101 01 1111 0
            </pre>
        </section>
    </div>
</template>

<script setup>
import Hero from "~/components/web/dev-process/Hero.vue";
import DesignSection from "~/components/web/dev-process/DesignSection.vue";
import DevelopSection from "~/components/web/dev-process/DevelopSection.vue";
import DeploySection from "~/components/web/dev-process/DeploySection.vue";
import ButtonPrimary from "~/components/form/ButtonPrimary.vue";
import ButtonSecondary from "~/components/form/ButtonSecondary.vue";
import BinaryWall from "~/components/BinaryWall.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

useHead({ title: `Default - My Development Process` });
definePageMeta({ layout: "default" });

const devProcess = ref("");

onMounted(() => {
    setTimeout(() => ScrollTrigger.refresh(), 500);
});

onBeforeUnmount(() => {});

const router = useRouter();
router.beforeResolve((to, from) => {
    if (to.path !== from.path) setTimeout(() => window.scrollTo({ top: 0 }), 600);
});
</script>
