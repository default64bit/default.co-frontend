<style scoped>
.list {
    padding-inline-end: 0.5rem;
}
</style>

<template>
    <div class="flex flex-col gap-4">
        <h2 class="f-josefin text-xl md:text-2xl font-bold w-max pb-1 border-b-4 border-b-teal-300">Project Views</h2>
        <ul class="list flex flex-col gap-2 w-full h-72 overflow-auto" v-if="!loadingData">
            <li class="flex flex-col w-full p-4 rounded-2xl bg-stone-100 dark:bg-black2" v-for="(item, i) in project.list" :key="i">
                <div class="flex flex-wrap items-center gap-4 w-full">
                    <h4 class="text-lg flex-shrink-0">{{ item.name }}</h4>
                    <span class="h-1 bg-gray3 opacity-50 rounded-full flex-grow"></span>
                    <div class="flex items-center gap-2">
                        <b class="text-2xl md:text-3xl text-green3 dark:text-green1">{{ new Intl.NumberFormat("en-IN").format(item.views) }}</b>
                        <small class="text-cyan-700 dark:text-teal-300">Views</small>
                    </div>
                </div>
                <p class="w-full text-xs opacity-75">{{ item.desc }}</p>
            </li>
        </ul>
        <ul class="list flex flex-col gap-2 w-full h-72 overflow-auto" v-else>
            <li class="flex flex-col w-full p-4 rounded-2xl bg-stone-100 dark:bg-black2" v-for="n in 5" :key="n">
                <div class="flex flex-wrap items-center gap-4 w-full">
                    <h4 class="skeleton w-16 h-3 mb-4"></h4>
                    <span class="h-1 bg-gray3 opacity-50 rounded-full flex-grow"></span>
                    <div class="flex items-center gap-2">
                        <b class="skeleton w-8 h-2"></b>
                        <small class="skeleton w-4 h-2"></small>
                    </div>
                </div>
                <p class="skeleton w-full h-2"></p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import axios from "axios";

const project = reactive({ list: [] });
const loadingData = ref(false);

const getData = async () => {
    if (loadingData.value) return;
    loadingData.value = true;

    let url = `/api/v1/admin/projects/views-list`;
    let params = [``];
    url = encodeURI(`${url}?${params.join("&")}`);

    await axios
        .get(url)
        .then((response) => {
            project.list = response.data.records;
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
</script>
