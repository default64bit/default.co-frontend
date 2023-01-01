<style scoped>
section {
    height: calc(100vh - 14rem);
}
</style>

<template>
    <div class="flex flex-col gap-4 mx-auto w-full max-w-screen-lg bg-stone-100 dark:bg-black2 bg-opacity-50 dark:bg-opacity-50 rounded-2xl p-4">
        <Title class="flex items-center gap-2">
            <Icon class="icon w-8 h-8 bg-black2 dark:bg-white" name="file.svg" folder="icons" size="32px" /> Terms Text
        </Title>
        <section class="relative flex flex-col gap-4 text-black dark:text-stone-200">
            <client-only fallbackTag="span">
                <ckeditor class="" :editor="editor" v-model="text" :config="editorConfig"></ckeditor>
            </client-only>
            
            <hr class="w-full mx-auto border-0 border-b-2 bg-gray3 opacity-70 dark:opacity-10" />

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
import Icon from "~/components/Icon.vue";
import Title from "~/components/admin/Title.vue";
import { useToast } from "vue-toastification";
import { ckUploadAdapter } from "~/composables/ckUploader";
import "~/assets/css/ckeditorStyles.css";

useHead({ title: `Default - Terms Text` });
definePageMeta({ layout: "admin" });
const toast = useToast();

let editor;
let ClassicEditor;
if (process.client) {
    ClassicEditor = await import("@ckeditor/ckeditor5-build-classic/build/ckeditor");
    editor = ClassicEditor.default;
}

const editorConfig = {
    extraPlugins: [
        function (editor) {
            editor.plugins.get("FileRepository").createUploadAdapter = (loader) => new ckUploadAdapter(loader);
        },
    ],
};
const text = ref("");
const savingInfo = ref(false);

const getData = async () => {
    savingInfo.value = true;

    await axios
        .get(`/api/v1/admin/terms`)
        .then((response) => {
            text.value = response.data.text;
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

const save = async () => {
    if (savingInfo.value) return;
    savingInfo.value = true;

    await axios
        .post(`/api/v1/admin/terms/update`, {
            text: text.value,
        })
        .then(() => {
            toast.success("Terms text has been updated!", { timeout: 2000 });
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
