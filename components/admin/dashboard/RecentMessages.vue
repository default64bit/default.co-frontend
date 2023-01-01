<style scoped>
.list {
    height: calc(100vh - 13rem);
    max-height: calc(100vh - 13rem);
    padding-inline-end: 1rem;
    overflow-y: scroll;
}
.bubble {
    position: relative;
    border-radius: 0px 1.5rem 1.5rem 1.5rem;
}
</style>

<template>
    <div class="flex flex-col gap-4 w-full">
        <div class="flex flex-wrap items-center justify-between gap-2">
            <h2 class="f-josefin text-xl md:text-2xl font-bold w-max pb-1 border-b-4 border-b-teal-300">Recent Messages</h2>
            <nuxt-link class="text-xs underline text-green3 dark:text-green1" :to="`/admin/contact-us`">View All Message</nuxt-link>
        </div>
        <ul class="list flex flex-col gap-6 w-full">
            <li class="flex flex-col" v-for="(item, i) in contactMessages.list" :key="i">
                <div class="flex flex-wrap items-center justify-between gap-2">
                    <span class="f-josefin text-xl text-teal-700 dark:text-teal-100">{{ item.name }}</span>
                    <div class="flex flex-wrap items-center gap-1">
                        <Icon
                            class="icon w-5 h-5"
                            :class="{ 'bg-stone-500 dark:bg-green1': !!item.wantsToNotify }"
                            name="bell-ringing.svg"
                            folder="icons"
                            size="20px"
                        />
                        <small class="opacity-75">{{ item.email }}</small>
                    </div>
                </div>
                <div class="bubble flex flex-col gap-2 p-4 w-full bg-stone-200 dark:bg-black">
                    <span class="absolute top-0 right-0 w-4 h-4 rounded-full bg-green3 dark:bg-green2" v-if="item.status == 'new'"></span>
                    <p class="w-full text-sm opacity-90">{{ item.message }}</p>
                    <small class="text-xs opacity-50">{{ item.createdAt.toLocaleString("en") }}</small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import axios from "axios";
import Icon from "~/components/Icon.vue";

const contactMessages = reactive({ list: [] });
const loadingData = ref(false);

const getData = async () => {
    if (loadingData.value) return;
    loadingData.value = true;

    let url = `/api/v1/admin/contact-messages`;
    let params = [`pp=10`];
    url = encodeURI(`${url}?${params.join("&")}`);

    await axios
        .get(url)
        .then((response) => {
            contactMessages.list = response.data.records;
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
