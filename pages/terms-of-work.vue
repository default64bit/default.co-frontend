<style scoped></style>

<template>
    <section class="relative flex flex-col items-center w-screen px-4 md:px-16 xl:px-24 dark:text-white">
        <BinaryWall class="absolute w-screen top-0 opacity-60" :angle="0" />

        <article class="relative flex flex-col items-start gap-10 p-8 md:p-16 mt-36 w-full max-w-screen-lg rounded-2xl bg-zinc-50 dark:bg-black2 shadow-lg">
            <header class="flex flex-col gap-16 w-full">
                <div class="flex items-center justify-center w-32 h-32 p-4 mx-auto rounded-full bg-gray1 bg-opacity-30">
                    <img class="-mr-2 object-contain" width="80px" src="/icon.png" alt="" />
                </div>
                <h1 class="f-josefin text-3xl md:text-5xl font-bold">Terms And Conditions</h1>
            </header>
            <div class="flex flex-col items-start gap-10 w-full">
                <p class="opacity-80">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                </p>
                <p class="opacity-80">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making
                    it over 2000 years old. Richard McClintock.
                </p>
                <p class="opacity-80">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making
                    it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                    words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
                    source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                    written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>
                <p class="opacity-80">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making
                    it over 2000 years old. Richard McClintock.
                </p>
                <img class="w-full max-w-sm mix-blend-difference mt-8" width="400px" src="~/assets/images/terms/sig.png" alt="" />
                <div class="flex items-center gap-1 -mt-10">
                    <span class="w-6 h-6 bg-green3"></span>
                    <span class="w-6 h-6 bg-green2"></span>
                    <span class="w-6 h-6 bg-green1"></span>
                </div>
            </div>
        </article>
    </section>
</template>

<script setup>
import BinaryWall from "~/components/BinaryWall.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

useHead({ title: `Default - My Development Process` });
definePageMeta({ layout: "default" });

onMounted(() => {
    setTimeout(() => ScrollTrigger.refresh(), 500);
});

onBeforeUnmount(() => {});

const router = useRouter();
router.beforeResolve((to, from) => {
    if (to.path !== from.path) setTimeout(() => window.scrollTo({ top: 0 }), 600);
});
</script>
