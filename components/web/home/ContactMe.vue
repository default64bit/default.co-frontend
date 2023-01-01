<style scoped>
.letter-space-2 {
    letter-spacing: 2px;
    white-space: nowrap;
}
.inner-form {
    border-radius: 0.9rem 0.9rem 0 0;
}
@media (min-width: 1024px) {
    .inner-form {
        border-radius: 0 0.9rem 0.9rem 0;
    }
}
</style>

<template>
    <section
        class="relative flex flex-col items-center justify-between gap-16 lg:gap-36 px-0 md:px-16 2xl:px-32 dark:text-white w-full max-w-screen-4xl"
        aria-label="Contact Me"
        ref="ContactMeSection"
    >
        <span class="big-bg-text absolute flex flex-col items-center font-bold -mt-6 md:-mt-28">
            <TextureText text="Contact Me" />
        </span>
        <h2 class="relative f-josefin font-bold text-4xl sm:text-5xl md:text-6xl text-center">
            <span class="text-green2">&lt;</span>
            Contact Me
            <span class="text-green1">/</span>
            <span class="text-green2">&gt;</span>
        </h2>

        <div class="relative flex flex-col-reverse lg:flex-row justify-center items-center lg:items-stretch bg-green1 rounded-2xl w-full max-w-lg lg:max-w-6xl">
            <span class="absolute -top-8 opacity-20 letter-space-2">
                101010 11110 101001 10 11 1 0111 1011 01111 1010000 11101 110 1 0100 1010 1 01 11110 1110101 11000 01010 1 11 0010 110
            </span>
            <form autocomplete="off" class="form flex flex-col gap-6 md:gap-10 p-6 md:p-10 w-full lg:max-w-2xl" @submit.prevent="send()">
                <Input name="name" :required="true" type="text" placeholder="Your Name" v-model="name" :error="errorField == 'name' ? responseMessage : ''" />
                <Input
                    name="email"
                    :required="true"
                    type="email"
                    placeholder="Your Email Address"
                    v-model="email"
                    :error="errorField == 'email' ? responseMessage : ''"
                />
                <Textarea
                    name="message"
                    :required="false"
                    type="text"
                    placeholder="Message"
                    v-model="message"
                    :error="errorField == 'message' ? responseMessage : ''"
                    rows="8"
                />
                <div class="flex flex-wrap items-start justify-between gap-4">
                    <label class="flex flex-wrap items-center gap-2 dark:text-black cursor-pointer" @click="notify = !notify">
                        <!-- <div class="w-6 h-6 p-1 rounded-md bg-black2 select-none"><img src="~/assets/images/check.svg" alt="" v-show="notify" /></div> -->
                        <div class="flex items-center justify-center w-6 h-6 p-1 rounded-md bg-white dark:bg-black2 select-none shadow-lg">
                            <Icon class="icon w-4 h-4 bg-green3 dark:bg-green2" name="check.svg" folder="icons" size="16px" v-show="notify" />
                        </div>
                        <span class="text-sm md:text-base">Get Notified When I'm Opened For Work</span>
                    </label>

                    <button
                        class="p-4 py-3 rounded-xl hover:shadow-lg hover:bg-green-50 bg-green-100 text-black1 border-2 border-solid border-black1"
                        type="submit"
                        v-if="responseType != 'success'"
                    >
                        <div class="flex items-center gap-4" v-if="!sending">
                            <span class="font-bold text-lg lg:text-2xl">Send</span> <img src="~/assets/images/arrow-right.svg" alt="" />
                        </div>
                        <Loader class="w-8 h-8" v-else />
                    </button>
                </div>
                <span class="text-xl bg-gray-100 bg-opacity-40 p-4 rounded-xl shadow-xl text-green-700" v-if="responseType == 'success'">
                    I got your message. Thank you for contacting me, I'll be in touch as soon as possible.
                </span>
            </form>
            <div class="inner-form flex flex-col gap-6 md:gap-10 p-6 md:p-10 bg-zinc-100 dark:bg-black2 w-full lg:max-w-lg flex-shrink-0">
                <div class="flex flex-col gap-4">
                    <p class="text-lg lg:text-2xl">I might be working on a project right now or be free to accept new work. you can check my status below.</p>
                    <p class="lg:text-lg opacity-60">But please don't hesitate to leave me a massage and I will be in touch as soon as possible.</p>
                    <small class="flex w-max p-2 px-3 rounded-full bg-black1 text-white">
                        <div class="flex items-center gap-3" v-if="personalInfo.data.work_status == 'open'">
                            <b class="bolb-green w-3 h-3 rounded-full"></b> <span>I'm Open For Work</span>
                        </div>
                        <div class="flex items-center gap-3" v-else-if="personalInfo.data.work_status == 'close'">
                            <b class="bolb-red w-3 h-3 rounded-full"></b> <span>Sorry, can't work right now</span>
                        </div>
                    </small>
                </div>

                <hr class="w-full border-b-2 border-gray2 opacity-75" />

                <div class="flex flex-col gap-4">
                    <span class="flex items-center gap-2 dark:text-gray1 lg:text-xl">
                        <img class="w-5 lg:w-6 mix-blend-difference" src="~/assets/images/envelop.svg" title="Email" alt="" /> You can also send me an email :
                    </span>
                    <a class="lg:text-2xl dark:text-green2 text-green3" :href="`mailto:${personalInfo.data.email}`">{{ personalInfo.data.email }}</a>
                </div>

                <hr class="w-full border-b-2 border-gray2 opacity-75" />

                <ul class="flex flex-wrap gap-8" v-if="!!personalInfo.data.socials">
                    <li class="w-7 sm:w-9 hover:scale-90" v-for="(link, name) in personalInfo.data.socials" :key="name">
                        <a :href="link"><img :src="`/socials/${name}.svg`" :alt="name" :title="name" /></a>
                    </li>
                </ul>
            </div>
            <span class="absolute -bottom-8 opacity-20 letter-space-2">
                101 011 10 10111 11 1101 0101011 11 01010 011011011 1110 100000 101011 11001 00 0010 10 10111 01 01 0010 101 01 1111 0
            </span>
        </div>
    </section>
</template>

<script setup>
import TextureText from "~/components/TextureText.vue";
import Input from "~/components/form/Input.vue";
import Textarea from "~/components/form/Textarea.vue";
import Loader from "~/components/loader.vue";
import axios from "axios";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const personalInfo = reactive({ data: [] });
const getPersonalInfo = async () => {
    await axios
        .get(`/api/v1/info`)
        .then((response) => (personalInfo.data = response.data))
        .catch((e) => {});
};
getPersonalInfo();

const name = ref("");
const email = ref("");
const message = ref("");
const notify = ref(false);
const sending = ref(false);
const responseType = ref("error");
const responseMessage = ref("");
const errorField = ref("");

const send = async () => {
    if (sending.value) return;
    sending.value = true;

    responseMessage.value = "";
    errorField.value = "";

    await axios
        .post(`/api/v1/contact-us/send-message`, {
            name: name.value,
            email: email.value,
            message: message.value,
            notify: notify.value.toString(),
        })
        .then(() => {
            responseType.value = "success";
            responseMessage.value = "Thank you for contacting me, I'll be in touch as soon as possible.";
        })
        .catch((e) => {
            responseType.value = "error";
            if (typeof e.response !== "undefined" && e.response.data) {
                if (typeof e.response.data.message === "object") {
                    responseMessage.value = e.response.data.message[0].errors[0];
                    errorField.value = e.response.data.message[0].property;
                }
            }
        })
        .finally(() => {
            sending.value = false;
        });
};

const ContactMeSection = ref("");
let inerFormAnimation = null;

onMounted(() => {
    gsap.from(ContactMeSection.value.querySelector("h2"), {
        scrollTrigger: { trigger: ContactMeSection.value, start: "top bottom", end: "top center", scrub: 2 },
        opacity: 0,
        y: "-100%",
        duration: 1,
        ease: "back.inOut(2.4)",
    });
    gsap.from(ContactMeSection.value.querySelector(".big-bg-text"), {
        scrollTrigger: { trigger: ContactMeSection.value, start: "top bottom", end: "top center", scrub: 1 },
        opacity: 0,
        y: "100%",
        duration: 1,
        ease: "back.inOut(2.4)",
    });
    gsap.from(ContactMeSection.value.querySelectorAll(".form > *"), {
        scrollTrigger: { trigger: ContactMeSection.value, start: "top bottom", end: "-10%", scrub: 2 },
        x: "300%",
        duration: 1,
        stagger: 0.3,
        ease: "ease.in",
    });
    inerFormAnimation = gsap.from(ContactMeSection.value.querySelector(".inner-form"), {
        scrollTrigger: { trigger: ContactMeSection.value.querySelector(".inner-form"), start: "top bottom", end: "bottom bottom", scrub: 2 },
        x: "100%",
        duration: 1,
        ease: "ease.in",
    });
    inerFormAnimation.progress(1);
});

onBeforeUnmount(() => {
    inerFormAnimation.progress(1).kill();
});
</script>
