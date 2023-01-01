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
                <Icon class="icon w-8 h-8 bg-black2 dark:bg-white" name="data.svg" folder="icons" size="32px" /> Tech And Tools
            </Title>
            <button
                class="flex items-center justify-center gap-1 p-2 px-4 rounded-xl text-white bg-green3 dark:bg-green1 dark:text-black1 opacity-90 hover:opacity-100 shadow-xl"
                @click="createPopup()"
            >
                <Icon class="icon w-4 h-4 bg-white dark:bg-black1" name="plus.svg" folder="icons" size="16px" />
                New
            </button>
        </div>
        <!-- <hr class="border-b-2 bg-gray3 dark:opacity-30" /> -->
        <section class="flex flex-col gap-4 h-full">
            <ul class="list flex flex-col items-start gap-4 w-full">
                <li
                    class="flex flex-wrap items-center gap-2 p-4 rounded-xl w-full bg-white dark:bg-black1 shadow-nr"
                    v-for="(tool, i) in tools.values"
                    :key="i"
                >
                    <div class="w-14 h-12">
                        <img class="h-12 object-contain" :src="tool.image" :alt="tool.name" />
                    </div>
                    <div class="flex flex-wrap items-center justify-between gap-4 flex-grow">
                        <div class="flex items-center gap-2">
                            <span class="text-2xl">{{ tool.name }}</span>
                            <div class="flex flex-wrap items-center gap-1">
                                <small
                                    class="p-1 px-2 rounded-md text-xs text-green3 dark:text-green1 bg-stone-200 dark:bg-black2"
                                    v-if="tool.mostUsed && tool.mostUsed != 'off'"
                                >
                                    {{ tool.mostUsed }}
                                </small>
                                <span class="w-3 h-3 rounded-full" :class="[tool.showInList ? 'bg-green-400 ' : 'bg-red-400']"></span>
                            </div>
                        </div>
                        <div class="flex flex-wrap items-center gap-2">
                            <button class="flex items-center justify-center p-1.5 rounded-xl text-xs bg-stone-200 dark:bg-gray3" @click="confirmAndDelete(i)">
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
                            <button class="flex items-center justify-center p-1.5 rounded-xl text-xs bg-stone-200 dark:bg-gray3" @click="editPopup(i)">
                                <Icon class="icon w-4 h-4 bg-blue-600 dark:bg-blue-300" name="edit.svg" folder="icons" size="16px" />
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

        <teleport to="body">
            <CreateDialog :open="createDialogState" @update:open="createDialogState = $event" @record="addRecord($event)" v-if="createDialogState" />
            <EditDialog
                :open="editDialogState"
                @update:open="editDialogState = $event"
                @record="editRecord($event)"
                :data="tools.values[editIndex]"
                v-if="editDialogState"
            />
        </teleport>
    </div>
</template>

<script setup>
import axios from "axios";
import Icon from "~/components/Icon.vue";
import Title from "~/components/admin/Title.vue";
import CreateDialog from "~/components/admin/tech-and-tools/CreateDialog.vue";
import EditDialog from "~/components/admin/tech-and-tools/EditDialog.vue";
import { useToast } from "vue-toastification";

useHead({ title: `Default - Tech And Tools` });
definePageMeta({ layout: "admin" });
const toast = useToast();

const noMoreRecords = ref(false);
const loadingData = ref(false);
const tools = reactive({ values: [] });

const getData = async (loadMore = false) => {
    if (noMoreRecords.value || loadingData.value) return;
    loadingData.value = true;

    let url = `/api/v1/admin/tech-and-tools`;
    let params = [`pp=25`];
    if (loadMore && tools.values.length != 0) params.push(`lastRecordID=${tools.values[tools.values.length - 1]._id}`);
    url = encodeURI(`${url}?${params.join("&")}`);

    await axios
        .get(url)
        .then((response) => {
            tools.values = [...tools.values, ...response.data.records];
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
    tools.values = [];
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
        .delete(`/api/v1/admin/tech-and-tools/${tools.values[deleteIndex.value]._id}`)
        .then((response) => {
            tools.values.splice(index, 1);
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

const createDialogState = ref(false);
const editDialogState = ref(false);
const editIndex = ref(null);
const createPopup = () => {
    createDialogState.value = true;
};
const editPopup = (index) => {
    editIndex.value = index;
    editDialogState.value = true;
};

const addRecord = (record) => tools.values.unshift(record);
const editRecord = (record) => (tools.values[editIndex.value] = record);
</script>
