<style scoped>
.circle {
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
}
.ring {
    border-radius: 50%;
    border-width: 1.5rem;
    border-style: solid;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 30%);
    box-shadow: none;
}
.bg-bar {
    min-width: 70rem;
}

.top-filter {
    background: linear-gradient(180deg, rgb(120 241 161 / 46%) 0%, rgb(20 193 173 / 34%) 100%);
    filter: blur(65px);
}

@media (min-width: 1280px) {
    .circle {
        width: 26rem;
        height: 26rem;
    }
}
@media (min-width: 1440px) {
    .circle {
        width: 36rem;
        height: 36rem;
    }
}
</style>

<template>
    <section
        class="relative flex flex-col 1.5xl:flex-row items-center justify-between gap-20 px-10 md:px-16 2xl:px-32 dark:text-white w-full max-w-screen-4xl"
        aria-label="hero"
        role="banner"
        ref="hero"
    >
        <div class="bg-bar absolute -top-10 left-1/3 lg:-ml-52 w-screen rounded-xl h-96 rotate-45 bg-stone-500 opacity-10 dark:opacity-20"></div>

        <div class="circle absolute -left-16 -top-10 w-96 h-96 bg-stone-100 dark:bg-black2 opacity-90 rounded-full shadow-nr"></div>

        <div class="relative flex flex-col items-start sm:items-center 1.5xl:items-start gap-6 md:gap-8 mt-4 md:mt-16 flex-shrink-0">
            <div class="flex items-center gap-2 w-full -mb-2 ml-1">
                <img class="w-6" src="/icon.png" title="Default" alt="" />
                <span class="border-b-2 border-solid border-gray3 flex-grow"></span>
                <h4 class="text-sm dark:text-green1 opacity-75">A Solution To Digitize Ideas</h4>
            </div>
            <h1 class="flex flex-col gap-2 font-bold text-4xl md:text-5xl xl:text-7xl">
                <span class="s1">
                    Have A
                    <span class="relative text-black2">
                        <span class="absolute bg-green1 h-8 md:h-10 xl:h-16 w-full"></span><span class="relative">Business</span>
                    </span>
                    Idea
                    <span class="text-green2 dark:text-green-300 text-shadow-black in-N-out">?</span>
                </span>
                <span class="s2">Let's <span class="text-green2 dark:text-green-300 text-shadow-black">Make</span> It Happen</span>
            </h1>
            <p class="dark:f-jost-regular text-lg xl:text-2xl w-full max-w-2xl opacity-75">
                If you have a small or medium size business plan and need to digitize it or need a consultation on how to approach making it, you come to the
                right place.
            </p>
            <div class="flex items-center flex-wrap gap-10 sm:gap-6 mt-4 md:text-xl">
                <ButtonPrimary class="btn-prime" text="Contact Me" :isLink="true" :samepage="true" linkTo="/#contact" />
                <ButtonSecondary class="btn-second" text="Check out some of my work" :isLink="true" :samepage="true" linkTo="/#projects" />
            </div>
            <div class="flex flex-row items-center gap-4 md:gap-8 mt-8">
                <div class="img-me flex items-end sm:mt-12 flex-shrink-0">
                    <img class="w-28 md:w-36 -mr-28 md:-mr-36 opacity-90" src="~/assets/images/cd2.svg" title="CD" alt="" />
                    <div class="relative -top-12 md:-top-16 mb-2 flex flex-col items-center justify-center w-28 h-28 md:w-36 md:h-36">
                        <img class="w-16 h-16 md:w-20 md:h-20" src="~/assets/images/Default5.png" alt="Me" title="Kasra Keshvardoost" />
                        <img
                            class="absolute top-2 left-2 w-24 h-24 md:w-32 md:h-32 mix-blend-difference rotate"
                            src="~/assets/images/name_circle3.png"
                            alt="Kasra Keshvardoost"
                            title="Kasra Keshvardoost"
                        />
                    </div>
                </div>
                <div class="socials flex flex-col-reverse md:flex-col gap-3">
                    <h4 class="flex items-center gap-3 text-xl text-gray2"><span>Socials</span><span class="h-0.5 rounded-full flex-grow bg-gray2"></span></h4>
                    <ul class="flex flex-wrap gap-8" v-if="!!personalInfo.data.socials">
                        <li class="w-8 sm:w-9 hover:scale-90" v-for="(link, name) in personalInfo.data.socials" :key="name">
                            <a :href="link"><img :src="`/socials/${name}.svg`" :alt="name" :title="name" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div
            class="absolute -bottom-64 right-64 1.5xl:top-20 1.5xl:right-44 w-full max-w-lg h-32 rounded-full border-4 border-solid border-gray2 opacity-50"
        ></div>
        <div
            class="absolute -bottom-80 1.5xl:top-64 1.5xl:right-0 w-full max-w-lg h-32 rounded-full border-4 border-solid border-gray2 opacity-50 1.5xl:rotate-45"
        ></div>

        <div
            class="absolute -bottom-72 md:-bottom-40 -left-16 1.5xl:-bottom-0 1.5xl:-left-0 1.5xl:relative flex flex-col items-center justify-center -mt-6 md:-mt-16 ml-0 mr-auto md:mr-52 z-10"
        >
            <div class="absolute -bottom-48 left-6 flex items-center justify-center w-96 h-96">
                <img class="w-16 h-16 absolute" src="~/assets/images/cd3.png" alt="" />
                <div class="w-20 h-20 absolute rounded-full border-8 border-solid border-gray2 dark:border-gray1 breathe1"></div>
                <div class="w-32 h-32 absolute rounded-full border-8 border-solid border-gray2 dark:border-gray1"></div>
                <div class="w-44 h-44 absolute rounded-full border-8 border-solid border-gray2 dark:border-gray1 breathe2"></div>
                <div class="w-56 h-56 absolute rounded-full border-8 border-solid border-gray2 dark:border-gray1 breathe"></div>
                <div class="w-64 h-64 absolute rounded-full border-8 border-solid border-gray2 dark:border-gray1"></div>
                <div class="w-72 h-72 absolute rounded-full border-8 border-solid border-gray2 dark:border-gray1 breathe1"></div>
                <div class="w-80 h-80 absolute rounded-full border-8 border-solid border-gray2 dark:border-gray1 breathe"></div>
            </div>
            <!-- <div class="ccl0 top-filter absolute circle rotate-re rounded-full"></div> -->
            <div class="ccl1 circle relative flex items-center justify-center bg-green1">
                <div class="ring breathe bg-transparent border-stone-600 w-4/6 h-4/6"></div>
                <img class="absolute rotate-re" src="~/assets/images/binary_circle.png" alt="" />
            </div>
            <div class="ccl2 circle absolute top-16 left-32 md:top-52 md:left-52 flex items-center justify-center overflow-hidden bg-black2">
                <div class="ring breathe2 bg-transparent border-zinc-50 w-4/6 h-4/6"></div>
                <BinaryWall class="absolute -top-4 w-screen opacity-70" :angle="0" />
            </div>
            <div class="absolute flex flex-col -ml-20 -mt-44 md:-ml-44 md:-mt-44">
                <div class="absolute top-20 left-20 md:top-44 md:left-44 flex items-end w-28 h-28 md:w-52 md:h-52 p-2 bg-green1">
                    <img class="h-3 md:h-5" src="~/assets/images/Deploy.svg" alt="" />
                </div>
                <div class="absolute top-10 left-10 md:top-22 md:left-22 flex items-end w-28 h-28 md:w-52 md:h-52 p-2 bg-green2">
                    <img class="h-3 md:h-5" src="~/assets/images/Develop.svg" alt="" />
                </div>
                <div class="absolute flex items-end w-28 h-28 md:w-52 md:h-52 p-2 bg-green3">
                    <img class="h-3 md:h-5" src="~/assets/images/Design.svg" alt="" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import axios from "axios";
import ButtonPrimary from "~/components/form/ButtonPrimary.vue";
import ButtonSecondary from "~/components/form/ButtonSecondary.vue";
import BinaryWall from "~/components/BinaryWall.vue";
import { gsap } from "gsap";

const hero = ref(""); // DOM ref
const personalInfo = reactive({ data: [] });
const getPersonalInfo = async () => {
    await axios
        .get(`/api/v1/info`)
        .then((response) => (personalInfo.data = response.data))
        .catch((e) => {});
};
getPersonalInfo();

const mouseCircleControl = (e) => {
    gsap.set(hero.value.querySelector(".ccl1"), { translateY: `${e.clientX / 10}px`, translateX: `${e.clientY / 10}px`, ease: "bounce.out" });
    gsap.set(hero.value.querySelector(".ccl2"), { translateX: `${e.clientX / 30}px`, translateY: `${e.clientY / 30}px`, ease: "bounce.out" });
};

onMounted(() => {
    gsap.from(hero.value.querySelector(".bg-bar"), { y: "-100%", duration: 0.8, delay: 0.3, ease: "back.inOut(2.4)" });
    gsap.from(hero.value.querySelector("h1 .s1"), { opacity: 0, y: "-50%", duration: 0.8, delay: 0.3, ease: "back.inOut(2.4)" });
    gsap.from(hero.value.querySelector("h1 .s2"), { opacity: 0, y: "50%", duration: 0.8, delay: 0.3, ease: "back.inOut(2.4)" });
    gsap.from(hero.value.querySelector("p"), { opacity: 0, y: "-50%", duration: 0.4, delay: 0.7, ease: "back.inOut(2.4)" });
    gsap.from(hero.value.querySelector(".btn-prime"), { opacity: 0, x: "-50%", duration: 0.5, delay: 1.3, ease: "back.inOut(2.4)" });
    gsap.from(hero.value.querySelector(".btn-second"), { opacity: 0, x: "50%", duration: 0.5, delay: 1.3, ease: "back.inOut(2.4)" });
    gsap.from(hero.value.querySelector(".img-me"), { opacity: 0, y: "150%", duration: 0.5, delay: 1, ease: "back.out(1.4)" });
    gsap.from(hero.value.querySelector(".socials"), { opacity: 0, x: "-150%", duration: 0.5, delay: 1, ease: "back.out(1.4)" });
    gsap.from(hero.value.querySelectorAll(".circle"), { opacity: 0, x: 100, y: 200, duration: 0.5, delay: 1, stagger: 0.2, ease: "back.out(1.4)" });

    document.addEventListener("mousemove", mouseCircleControl);
});
onBeforeUnmount(() => {
    document.removeEventListener("mousemove", mouseCircleControl);
});
</script>
