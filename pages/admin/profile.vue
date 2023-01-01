<style scoped></style>

<template>
    <div class="flex flex-col gap-6 mx-auto w-full max-w-screen-sm bg-stone-100 dark:bg-black2 bg-opacity-50 dark:bg-opacity-50 rounded-2xl p-4">
        <Title class="flex items-center gap-2">
            <Icon class="icon w-8 h-8 bg-black2 dark:bg-white" name="gear.svg" folder="icons" size="32px" /> Personal Info
        </Title>
        <section class="flex flex-col gap-4">
            <h4 class="flex items-center gap-2 text-xl">
                <span class="pb-1 border-b-4 border-b-teal-300"> Your Work Status </span>
            </h4>
            <div class="flex items-center gap-2">
                <Switch class="" :state="openToWorkState" @update:state="updateOpenToWorkState($event)" />
                <span class="text-sm opacity-75">Are you open for more work?</span>
                <Loader class="w-6 h-6" v-if="updatingOpenToWork" />
            </div>
        </section>
        <hr class="w-full border-b-2 border-gray1 dark:border-gray3 opacity-40" />
        <section class="flex flex-col gap-4">
            <h4 class="flex items-center gap-2 text-xl">
                <span class="pb-1 border-b-4 border-b-teal-300"> Socials </span>
            </h4>
            <Input class="" :shadow="false" iconName="envelope-open.svg" name="email" type="email" placeholder="Your Work Email" v-model="email" />
            <hr class="w-full border-gray1 dark:border-gray3 opacity-40" />
            <div class="flex flex-col gap-2 w-full">
                <Input class="" :shadow="false" iconName="telegram.svg" name="telegram" type="text" placeholder="Your Telegram" v-model="telegram" />
                <Input class="" :shadow="false" iconName="linkedin.svg" name="linkedin" type="text" placeholder="Your Linkedin" v-model="linkedin" />
                <Input class="" :shadow="false" iconName="dribbble.svg" name="dribbble" type="text" placeholder="Your Dribbble" v-model="dribbble" />
                <Input class="" :shadow="false" iconName="github.svg" name="github" type="text" placeholder="Your Github" v-model="github" />
            </div>
            <hr class="w-full border-gray1 dark:border-gray3 opacity-40" />
            <button class="flex w-max p-3 px-6 rounded-lg bg-green2 text-black1 hover:bg-green3 hover:text-white group" @click="save()">
                <div class="flex items-center gap-2" v-if="!savingInfo">
                    <Icon class="icon w-5 h-5 bg-black2 group-hover:bg-white" name="save.svg" folder="icons" size="20px" />Save
                </div>
                <Loader class="w-6 h-6" v-else />
            </button>
        </section>
    </div>
</template>

<script setup>
import axios from "axios";
import Loader from "~/components/loader.vue";
import Icon from "~/components/Icon.vue";
import Title from "~/components/admin/Title.vue";
import Switch from "~/components/form/Switch.vue";
import Input from "~/components/form/Input.vue";
import { useToast } from "vue-toastification";

useHead({ title: `Default - Projects` });
definePageMeta({ layout: "admin" });
const toast = useToast();

const openToWorkState = ref(false);
const updatingOpenToWork = ref(false);

const email = ref("");
const telegram = ref("");
const linkedin = ref("");
const dribbble = ref("");
const github = ref("");
const savingInfo = ref(false);

const getData = async () => {
    updatingOpenToWork.value = true;
    savingInfo.value = true;

    await axios
        .get(`/api/v1/admin/personal-info`)
        .then((response) => {
            openToWorkState.value = response.data.work_status == "open" ? true : false;
            email.value = response.data.email;
            telegram.value = response.data.socials.telegram;
            linkedin.value = response.data.socials.linkedin;
            dribbble.value = response.data.socials.dribbble;
            github.value = response.data.socials.github;
            updatingOpenToWork.value = false;
            savingInfo.value = false;
        })
        .catch((e) => {
            if (typeof e.response !== "undefined" && e.response.data) {
                if (typeof e.response.data.message === "object") toast.error(e.response.data.message[0].errors[0], { timeout: 2000 });
                else toast.error(e.response.data, { timeout: 2000 });
            }
        });
};
getData();

const updateOpenToWorkState = async (newState) => {
    if (updatingOpenToWork.value) return;
    updatingOpenToWork.value = true;

    openToWorkState.value = newState;

    await axios
        .post(`/api/v1/admin/personal-info/update-status`, { state: openToWorkState.value.toString() })
        .then(() => {
            toast.success("Status has been updated!", { timeout: 2000 });
        })
        .catch((e) => {
            openToWorkState.value = !newState;
            if (typeof e.response !== "undefined" && e.response.data) {
                if (typeof e.response.data.message === "object") {
                    toast.error(e.response.data.message[0].errors[0], { timeout: 2000 });
                }
            }
        })
        .finally(() => (updatingOpenToWork.value = false));
};

const save = async () => {
    if (savingInfo.value) return;
    savingInfo.value = true;

    await axios
        .post(`/api/v1/admin/personal-info/update-socials`, {
            email: email.value,
            telegram: telegram.value,
            linkedin: linkedin.value,
            dribbble: dribbble.value,
            github: github.value,
        })
        .then(() => {
            toast.success("Socials has been updated!", { timeout: 2000 });
        })
        .catch((e) => {
            if (typeof e.response !== "undefined" && e.response.data) {
                if (typeof e.response.data.message === "object") {
                    toast.error(e.response.data.message[0].errors[0], { timeout: 2000 });
                }
            }
        })
        .finally(() => (savingInfo.value = false));
};
</script>
