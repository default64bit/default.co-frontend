<style scoped></style>

<template>
    <Dialog title="New Tool" :open="open" @update:open="updateOpenState" boxClass="w-full max-w-xl">
        <form class="flex flex-col gap-4 flex-grow w-full max-w-2xl max-h-full overflow-auto" @submit.prevent="">
            <div class="flex flex-col md:flex-row items-start gap-4">
                <ImageUpload class="flex-shrink-0" :image="image" @update:image="image = $event" :loading="creating" />
                <div class="flex flex-col gap-4 w-full flex-grow">
                    <Input class="" :shadow="false" name="name" type="text" placeholder="Tool Name" v-model="name" />
                    <div class="flex flex-wrap items-center justify-between gap-2">
                        <label class="flex flex-wrap items-center gap-2 cursor-pointer" @click="toggleMostUsed('design')">
                            <div class="flex items-center justify-center w-6 h-6 p-1 rounded-md bg-zinc-200 dark:bg-black2 select-none">
                                <Icon class="icon w-4 h-4 bg-green3 dark:bg-green1" name="check.svg" folder="icons" size="16px" v-if="mostUsed == 'design'" />
                            </div>
                            <span class="opacity-75">Design</span>
                        </label>
                        <label class="flex flex-wrap items-center gap-2 cursor-pointer" @click="toggleMostUsed('develop')">
                            <div class="flex items-center justify-center w-6 h-6 p-1 rounded-md bg-zinc-200 dark:bg-black2 select-none">
                                <Icon class="icon w-4 h-4 bg-green3 dark:bg-green1" name="check.svg" folder="icons" size="16px" v-if="mostUsed == 'develop'" />
                            </div>
                            <span class="opacity-75">Develop</span>
                        </label>
                        <label class="flex flex-wrap items-center gap-2 cursor-pointer" @click="toggleMostUsed('deploy')">
                            <div class="flex items-center justify-center w-6 h-6 p-1 rounded-md bg-zinc-200 dark:bg-black2 select-none">
                                <Icon class="icon w-4 h-4 bg-green3 dark:bg-green1" name="check.svg" folder="icons" size="16px" v-if="mostUsed == 'deploy'" />
                            </div>
                            <span class="opacity-75">Deploy</span>
                        </label>
                    </div>
                    <div class="flex flex-wrap items-center gap-1">
                        <Switch class="" :state="showInList" @update:state="showInList = $event" />
                        <small class="opacity-80">Show this item at all??</small>
                    </div>
                </div>
            </div>
            
            <hr class="w-full mx-auto border-0 border-b-2 bg-gray3 opacity-70 dark:opacity-10" />

            <small class="flex items-start gap-1 w-full text-sm text-rose-700 dark:text-rose-200" v-if="error">
                <Icon class="icon w-5 h-5 lamp-effect bg-rose-700 dark:bg-rose-300 flex-shrink-0" name="alert-circle.svg" folder="icons" size="20px" />
                {{ error }}
            </small>
            <button
                class="flex justify-center w-max p-3 px-6 rounded-lg bg-green2 text-black1 hover:bg-green3 hover:text-white group"
                type="button"
                @click="add()"
            >
                <div class="flex items-center gap-2" v-if="!creating">
                    <Icon class="icon w-5 h-5 bg-black2 group-hover:bg-white" name="save.svg" folder="icons" size="20px" />Add
                </div>
                <Loader class="w-6 h-6" v-else />
            </button>
        </form>
    </Dialog>
</template>

<script setup>
import axios from "axios";
import Dialog from "~/components/admin/Dialog.vue";
import ImageUpload from "~/components/form/ImageUpload.vue";
import Input from "~/components/form/Input.vue";
import Switch from "~/components/form/Switch.vue";
import Loader from "~/components/loader.vue";
import Icon from "~/components/Icon.vue";
import { useToast } from "vue-toastification";

const toast = useToast();

const props = defineProps({
    open: { type: Boolean, default: false },
});

const emit = defineEmits(["update:open", "record"]);
const updateOpenState = (state) => {
    emit("update:open", state);
};

const image = ref(null);
const name = ref("");
const mostUsed = ref("off");
const toggleMostUsed = (name) => {
    if (mostUsed.value !== name) mostUsed.value = name;
    else mostUsed.value = "off";
};
const showInList = ref(false);

const creating = ref(false);
const error = ref("");

const add = async () => {
    if (creating.value) return;
    creating.value = true;

    const data = new FormData();
    if (image.value) data.append("file", image.value);
    data.append("name", name.value);
    data.append("mostUsed", mostUsed.value);
    data.append("showInList", showInList.value);

    await axios
        .post(`/api/v1/admin/tech-and-tools`, data)
        .then((response) => {
            toast.success("New tool added to the list!", { timeout: 2000 });
            emit("record", response.data.record);
        })
        .catch((e) => {
            if (typeof e.response !== "undefined" && e.response.data) {
                if (typeof e.response.data.message === "object") {
                    toast.error(e.response.data.message[0].errors[0], { timeout: 2000 });
                }
            }
        })
        .finally(() => (creating.value = false));
};
</script>
