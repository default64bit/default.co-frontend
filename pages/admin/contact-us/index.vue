<style scoped>
.bubble {
    position: relative;
    border-radius: 0px 1.5rem 1.5rem 1.5rem;
}
.list {
    max-height: calc(100vh - 31rem);
    overflow: auto;
    padding-inline-end: 0.5rem;
}
</style>

<template>
    <div class="flex flex-col gap-4 mx-auto w-full max-w-screen-lg bg-stone-100 dark:bg-black2 bg-opacity-50 dark:bg-opacity-50 rounded-2xl p-4 h-full">
        <Title class="flex items-center gap-2">
            <Icon class="icon w-8 h-8 bg-black2 dark:bg-white" name="message-text.svg" folder="icons" size="32px" /> Contact Messages
        </Title>
        <div class="flex flex-wrap items-center justify-between gap-4">
            <span class="flex flex-wrap items-center justify-between gap-4 flex-grow p-4 bg-white dark:bg-black1 rounded-lg">
                <div class="flex items-center gap-2">
                    <Icon class="icon w-6 h-6 bg-black2 dark:bg-white" name="envelope-open.svg" folder="icons" size="24px" />
                    <span class="text-2xl opacity-60">Total Messages :</span>
                </div>
                <b class="text-3xl text-green3 dark:text-green1">{{ totalMessages }}</b>
            </span>
            <span class="flex flex-wrap items-center justify-between gap-4 flex-grow p-4 bg-white dark:bg-black1 rounded-lg">
                <div class="flex items-center gap-2">
                    <Icon class="icon w-6 h-6 bg-black2 dark:bg-white" name="bell-ringing.svg" folder="icons" size="24px" />
                    <span class="text-xl opacity-60">People Waiting To Be Notify :</span>
                </div>
                <b class="text-3xl text-green3 dark:text-green1">{{ totalWaitingToNotifed }}</b>
            </span>
        </div>
        <hr class="border-b-2 bg-gray3 dark:opacity-30" />
        <div class="flex flex-wrap items-center gap-4">
            <div class="flex items-center gap-2 p-3 bg-zinc-100 dark:bg-black2 dark:text-white rounded-xl shadow-nr flex-grow">
                <Icon class="icon w-4 h-4 bg-green3 dark:bg-green1" name="search.svg" folder="icons" size="16px" />
                <input class="w-full bg-transparent outline-none" type="text" v-model="searchQuery" @keydown="search($event)" placeholder="Search" />
            </div>
            <ul class="relative flex items-center gap-4 w-max p-2 mx-auto bg-stone-200 dark:bg-zinc-700 rounded-lg">
                <li
                    class="relative p-0.5 px-2 rounded-md cursor-pointer"
                    :class="{ 'text-white dark:text-black2 bg-zinc-600 dark:bg-zinc-200': listType == 'all' }"
                    @click="selectListType('all')"
                >
                    All
                </li>
                <li
                    class="relative p-0.5 px-2 rounded-md cursor-pointer"
                    :class="{ 'text-white dark:text-black2 bg-zinc-600 dark:bg-zinc-200': listType == 'new' }"
                    @click="selectListType('new')"
                >
                    New
                </li>
            </ul>
        </div>
        <section class="flex flex-col gap-4 w-full h-full">
            <ul class="list flex flex-col items-start gap-8 w-full h-full">
                <li class="flex flex-col w-full md:w-max max-w-3xl" v-for="(message, i) in messages.values" :key="i">
                    <div class="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-8">
                        <span class="f-josefin text-xl text-teal-700 dark:text-teal-100">{{ message.name }}</span>
                        <div class="flex flex-wrap items-center gap-1">
                            <small class="f-josefin opacity-75">{{ message.email }}</small>
                            <Icon
                                class="icon w-5 h-5 bg-stone-500 dark:bg-green1"
                                name="bell-ringing.svg"
                                folder="icons"
                                size="20px"
                                v-if="!!message.wantsToNotify"
                            />
                        </div>
                    </div>
                    <div class="bubble flex flex-col gap-2 p-4 w-full bg-stone-200 dark:bg-black">
                        <span class="absolute top-0 right-0 w-4 h-4 rounded-full bg-teal-500" v-if="message.status == 'new'"></span>
                        <p class="w-full text-sm pl-2 border-l-4 border-green1">{{ message.message }}</p>
                        <div class="flex items-end justify-between gap-1 w-full">
                            <small class="text-xs opacity-75">{{ new Date(message.createdAt).toLocaleString("en-uk") }}</small>
                            <button class="flex items-center justify-center p-1.5 rounded-xl text-xs bg-gray1 dark:bg-gray3" @click="confirmAndDelete(i)">
                                <transition name="fade" mode="out-in">
                                    <Icon
                                        class="icon w-4 h-4 bg-rose-600 dark:bg-rose-300"
                                        name="trash.svg"
                                        folder="icons"
                                        size="16px"
                                        v-if="deleteIndex != i"
                                    />
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
                        </div>
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
import Input from "~/components/form/Input.vue";
import { useToast } from "vue-toastification";

useHead({ title: `Default - Contact Messages` });
definePageMeta({ layout: "admin" });
const toast = useToast();

const noMoreRecords = ref(false);
const loadingData = ref(false);
const messages = reactive({ values: [] });
const totalMessages = ref(0);
const totalWaitingToNotifed = ref(0);

const searchQuery = ref("");
const search = async (e) => {
    if (e.keyCode != 13 || loadingData.value) return;
    resetList();
    await getData();
};
const listType = ref("all");
const selectListType = async (name) => {
    if (loadingData.value) return;
    listType.value = name;
    resetList();
    await getData();
};

const getData = async (loadMore = false) => {
    if (noMoreRecords.value || loadingData.value) return;
    loadingData.value = true;

    let url = `/api/v1/admin/contact-messages`;
    let params = [`pp=25`, `type=${listType.value}`, `search=${searchQuery.value}`];
    if (loadMore && messages.values.length != 0) params.push(`lastRecordID=${messages.values[messages.values.length - 1]._id}`);
    url = encodeURI(`${url}?${params.join("&")}`);

    await axios
        .get(url)
        .then((response) => {
            totalMessages.value = response.data.totalMessages;
            totalWaitingToNotifed.value = response.data.totalWaitingToNotifed;
            messages.values = [...messages.values, ...response.data.records];
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
    messages.values = [];
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
        .delete(`/api/v1/admin/contact-messages/${messages.values[deleteIndex.value]._id}`)
        .then((response) => {
            messages.values.splice(index, 1);
            deleteIndex.value = null;
            totalMessages.value--;
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
