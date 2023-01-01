<style scoped></style>

<template>
    <div class="flex flex-col gap-6 mx-auto w-full max-w-screen-md bg-stone-100 dark:bg-black2 bg-opacity-50 dark:bg-opacity-50 rounded-2xl p-4 h-full">
        <Title class="flex items-center gap-2">
            <Icon class="icon w-8 h-8 bg-black2 dark:bg-white" name="browser-code.svg" folder="icons" size="32px" /> New Project
        </Title>
        <div class="flex flex-col md:flex-row gap-6 w-full">
            <Input class="w-full" :shadow="false" name="name" type="text" placeholder="Project Name" v-model="name" />
            <Input class="w-full" :shadow="false" name="link" type="text" placeholder="Link" v-model="link" />
        </div>
        <Input class="" :shadow="false" name="description" type="text" placeholder="Project Description" v-model="desc" />

        <TagInput class="" :shadow="false" name="tags" type="text" placeholder="Tags" :tags="tags.values" @update:tags="tags.values = $event" />

        <hr class="w-full mx-auto border-0 border-b-2 bg-gray3 opacity-70 dark:opacity-10" />

        <div class="flex flex-col gap-4">
            <div class="flex items-start justify-between gap-2">
                <h5 class="flex items-center gap-2 text-lg text-gray3 dark:text-gray1"><span class="w-2.5 h-2.5 bg-green3 dark:bg-green1"></span> Used Tech</h5>
                <SearchData class="text-xs" :shadow="false" placeholder="Search Tech..." url="/api/v1/admin/tech-and-tools" v-slot="{ items }">
                    <div
                        class="flex items-center gap-2 p-2 rounded-lg bg-white dark:bg-black cursor-pointer"
                        v-for="(item, i) in items"
                        :key="i"
                        @click="addTech(item)"
                    >
                        <img class="w-6" :src="item.image" alt="" />
                        <span>{{ item.name }}</span>
                    </div>
                </SearchData>
            </div>
            <ul class="flex flex-wrap items-center gap-2">
                <li class="flex items-center gap-2 w-max p-2 rounded-lg bg-white dark:bg-black shadow-lg" v-for="(item, i) in tech.values" :key="i">
                    <img class="w-6" :src="item.image" alt="" />
                    <span>{{ item.name }}</span>
                    <Icon class="icon w-5 h-5 bg-rose-700 dark:bg-rose-300 cursor-pointer" name="x.svg" folder="icons" size="20px" @click="removeTech(i)" />
                </li>
                <li class="text-sm text-stone-300 dark:text-gray3 bg-white dark:bg-black1 p-2 rounded-xl w-max" v-if="Object.keys(tech.values).length == 0">
                    Nothing Selected
                </li>
            </ul>
        </div>

        <hr class="w-full mx-auto border-0 border-b-2 bg-gray3 opacity-70 dark:opacity-10" />

        <div class="relative flex flex-col gap-4">
            <div class="flex items-start justify-between gap-2">
                <div>
                    <h5 class="flex items-center gap-2 text-lg text-gray3 dark:text-gray1">
                        <span class="w-2.5 h-2.5 bg-green3 dark:bg-green1"></span> Images
                    </h5>
                    <small class="f-josefin opacity-60">First image will be used as the main image</small>
                </div>
                <button class="flex justify-center w-max p-3 rounded-lg bg-green1 hover:bg-green3 group shadow-xl" @click="selectImages()">
                    <Icon class="icon w-5 h-5 bg-black2 group-hover:bg-white" name="plus.svg" folder="icons" size="20px" />
                </button>
                <form class="absolute" @submit.prevent="" ref="fileInputForm">
                    <input class="absolute w-0 h-0 opacity-0" ref="fileInput" type="file" accept=".jpg,.jpeg,.png,.webp" multiple @input="addImages()" />
                </form>
            </div>
            <Draggable tag="ul" class="flex flex-wrap items-center gap-2" v-model="images.list" handle=".grab_area" item-key="id">
                <template #item="{ element, index }">
                    <li
                        class="flex items-start gap-2 p-2 rounded-lg bg-white dark:bg-black border-gray1 dark:border-gray3 shadow-lg"
                        :class="{ 'border-4': index == 0 }"
                    >
                        <img class="w-40 object-contain rounded-lg" :src="element.blob" alt="" />
                        <div class="flex flex-col items-center gap-4">
                            <small class="text-teal-600 dark:text-teal-200 border-b-2">{{ index + 1 }}</small>
                            <Icon class="grab_area icon w-5 h-5 bg-black2 dark:bg-white cursor-grab" name="grid.svg" folder="icons" size="20px" />
                            <Icon
                                class="icon w-5 h-5 bg-rose-700 dark:bg-rose-300 cursor-pointer"
                                name="x.svg"
                                folder="icons"
                                size="20px"
                                @click="removeImage(index)"
                            />
                        </div>
                    </li>
                </template>
            </Draggable>
            <div class="text-sm text-stone-300 dark:text-gray3 bg-white dark:bg-black1 p-2 rounded-xl w-max" v-if="images.list.length == 0">
                No Image Is Selected
            </div>
        </div>

        <hr class="w-full mx-auto border-0 border-b-2 bg-gray3 opacity-70 dark:opacity-10" />

        <client-only fallbackTag="span">
            <ckeditor class="" :editor="editor" v-model="text" :config="editorConfig"></ckeditor>
        </client-only>

        <hr class="w-full mx-auto border-0 border-b-2 bg-gray3 opacity-70 dark:opacity-10" />

        <button class="flex w-max p-3 px-6 rounded-lg bg-green2 text-black1 hover:bg-green3 hover:text-white group" @click="save()">
            <div class="flex items-center gap-2" v-if="!savingInfo">
                <Icon class="icon w-5 h-5 bg-black2 group-hover:bg-white" name="save.svg" folder="icons" size="20px" />Add
            </div>
            <Loader class="w-6 h-6" v-else />
        </button>
    </div>
</template>

<script setup>
import axios from "axios";
import Icon from "~/components/Icon.vue";
import Title from "~/components/admin/Title.vue";
import ImageUpload from "~/components/form/ImageUpload.vue";
import Input from "~/components/form/Input.vue";
import TagInput from "~/components/form/TagInput.vue";
import SearchData from "~/components/form/SearchData.vue";
import Loader from "~/components/loader.vue";
import Draggable from "vuedraggable";
import { useToast } from "vue-toastification";
import { ckUploadAdapter } from "~/composables/ckUploader";
import "~/assets/css/ckeditorStyles.css";

useHead({ title: `Default - New Project` });
definePageMeta({ layout: "admin" });
const router = useRouter();
const toast = useToast();

const fileInput = ref(""); // DOM ref
const fileInputForm = ref(""); // DOM ref

const savingInfo = ref(false);

const name = ref("");
const link = ref("");
const desc = ref("");
const tags = reactive({ values: [] });
const tech = reactive({ values: {} });
const images = reactive({ list: [] });
const text = ref("");

const addTech = (item) => (tech.values = { ...tech.values, [item._id]: { ...item } });
const removeTech = (id) => delete tech.values[id];

const selectImages = () => fileInput.value.click();
const addImages = () => {
    const files = [...fileInput.value.files];
    files.forEach((file) => images.list.push({ blob: URL.createObjectURL(file), file: file }));
    fileInputForm.value.reset();
};
const removeImage = (index) => images.list.splice(index, 1);

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

const save = async () => {
    if (savingInfo.value) return;
    savingInfo.value = true;

    const data = new FormData();
    images.list.forEach((item) => data.append("images", item.file));
    data.append("name", name.value);
    if (link.value) data.append("link", link.value);
    data.append("desc", desc.value);
    if (tags.values.length) data.append("tags", JSON.stringify(tags.values));
    if (Object.keys(tech.values).length) data.append("tech", JSON.stringify(Object.keys(tech.values)));
    data.append("text", text.value);

    await axios
        .post(`/api/v1/admin/projects/`, data)
        .then((response) => {
            toast.success("New Project has been added!", { timeout: 2000 });
            router.push(`/admin/projects/${response.data.id}`);
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
