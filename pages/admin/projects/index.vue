<style scoped>
.list {
    height: 100vh;
    max-height: calc(100vh - 19rem);
    overflow: auto;
}
</style>

<template>
    <div class="flex flex-col gap-4 mx-auto w-full max-w-screen-lg bg-stone-100 dark:bg-black2 bg-opacity-50 dark:bg-opacity-50 rounded-2xl p-4 h-full">
        <div class="flex flex-wrap items-center justify-between gap-4">
            <Title class="flex items-center gap-2">
                <Icon class="icon w-8 h-8 bg-black2 dark:bg-white" name="browser-code.svg" folder="icons" size="32px" /> Projects
            </Title>
            <nuxt-link
                class="flex items-center justify-center gap-1 p-2 px-4 rounded-xl text-white bg-green3 dark:bg-green1 dark:text-black1 opacity-90 hover:opacity-100 shadow-xl"
                :to="`/admin/projects/new`"
            >
                <Icon class="icon w-4 h-4 bg-white dark:bg-black1" name="plus.svg" folder="icons" size="16px" />
                New
            </nuxt-link>
        </div>
        <!-- <hr class="border-b-2 bg-gray3 dark:opacity-30" /> -->
        <section class="flex flex-col gap-4 h-full">
            <ul class="list flex flex-col items-start gap-4 w-full">
                <li
                    class="flex flex-wrap items-center gap-4 p-4 rounded-xl w-full bg-white dark:bg-black1 shadow-nr"
                    v-for="(project, i) in projects.values"
                    :key="i"
                >
                    <img class="w-32 h-auto object-contain rounded-lg shadow-xl" :src="project.images[0]" :alt="project.name" />
                    <div class="flex flex-col items-start gap-2 flex-grow">
                        <div class="flex flex-col">
                            <span class="text-2xl">{{ project.name }}</span>
                            <small class="opacity-75">{{ project.desc }}</small>
                        </div>
                        <ul class="flex flex-wrap items-center gap-2">
                            <li class="w-max p-1 px-2 text-xs rounded-lg bg-stone-200 dark:bg-stone-700" v-for="(tag, i) in project.tags" :key="i">
                                {{ tag.name }}
                            </li>
                        </ul>
                    </div>
                    <div class="flex md:flex-col items-center gap-2">
                        <button class="flex items-center justify-center p-1.5 rounded-xl text-xs bg-stone-200 dark:bg-gray3" @click="confirmAndDelete(i)">
                            <transition name="fade" mode="out-in">
                                <Icon class="icon w-4 h-4 bg-rose-600 dark:bg-rose-300" name="trash.svg" folder="icons" size="16px" v-if="deleteIndex != i" />
                                <Icon
                                    class="icon w-4 h-4 bg-amber-600 dark:bg-amber-300"
                                    name="alert-circle.svg"
                                    folder="icons"
                                    size="16px"
                                    v-else-if="deleteIndex == i && !deleting"
                                />
                                <Loader class="w-4 h-4" v-else />
                            </transition>
                        </button>
                        <nuxt-link
                            class="flex items-center justify-center p-1.5 rounded-xl text-xs bg-stone-200 dark:bg-gray3"
                            :to="`/admin/projects/${project._id}`"
                        >
                            <Icon class="icon w-4 h-4 bg-blue-600 dark:bg-blue-300" name="edit.svg" folder="icons" size="16px" />
                        </nuxt-link>
                    </div>
                </li>
                <li class="flex items-center justify-center opacity-40 text-xs mx-auto" v-if="noMoreRecords">End of list</li>
            </ul>
            <button
                class="flex w-max p-3 px-6 mx-auto rounded-lg bg-gray1 text-black dark:bg-gray3 dark:text-white"
                @click="getData(true)"
                v-if="!noMoreRecords"
            >
                <div class="flex items-center gap-2" v-if="!loadingData">Load More</div>
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

useHead({ title: `Default - Projects` });
definePageMeta({ layout: "admin" });
const toast = useToast();

const noMoreRecords = ref(false);
const loadingData = ref(false);
const projects = reactive({ values: [] });

const getData = async (loadMore = false) => {
    if (noMoreRecords.value || loadingData.value) return;
    loadingData.value = true;

    let url = `/api/v1/admin/projects`;
    let params = [`pp=25`];
    if (loadMore && projects.values.length != 0) params.push(`lastRecordID=${projects.values[projects.values.length - 1]._id}`);
    url = encodeURI(`${url}?${params.join("&")}`);

    await axios
        .get(url)
        .then((response) => {
            projects.values = [...projects.values, ...response.data.records];
            if (response.data.records.length == 0) noMoreRecords.value = true;
        })
        .catch((e) => {
            if (typeof e.response !== "undefined" && e.response.data) {
                if (typeof e.response.data.message === "object") toast.error(e.response.data.message[0].errors[0], { timeout: 2000 });
                else toast.error(e.response.data, { timeout: 2000 });
            }
        })
        .finally(() => (loadingData.value = false));
};
getData();

const resetList = () => {
    projects.values = [];
    noMoreRecords.value = false;
};

const deleteIndex = ref(null);
const deleting = ref(false);
const confirmAndDelete = async (index) => {
    if (deleteIndex.value != index) {
        deleteIndex.value = index;
        return;
    }

    if (deleting.value) return;
    deleting.value = true;

    await axios
        .delete(`/api/v1/admin/projects/${projects.values[deleteIndex.value]._id}`)
        .then((response) => {
            projects.values.splice(index, 1);
            deleteIndex.value = null;
            toast.info("record deleted", { timeout: 2000 });
        })
        .catch((e) => {
            if (typeof e.response !== "undefined" && e.response.data) {
                if (typeof e.response.data.message === "object") toast.error(e.response.data.message[0].errors[0], { timeout: 2000 });
                else toast.error(e.response.data, { timeout: 2000 });
            }
        })
        .finally(() => (deleting.value = false));
};
</script>
