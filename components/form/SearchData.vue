<style scoped>
.dark.input-box-shadow {
    box-shadow: 0px 10px 15px -5px rgba(0, 0, 0, 40%);
}
.input-box-shadow {
    box-shadow: 0px 10px 15px -5px rgba(0, 0, 0, 10%);
}

.error {
    border: 4px solid theme("colors.rose.400");
}

span {
    transition: all 0.2s;
}
</style>

<template>
    <div
        class="relative flex items-center bg-zinc-100 dark:bg-black2 dark:text-white rounded-xl"
        :class="{ error: !!error, 'input-box-shadow': !!shadow, 'z-10': isFocused || showList }"
        @click="focus()"
    >
        <input
            ref="input"
            class="w-full bg-transparent p-2 pt-1 px-3 mt-6 rounded-b-xl outline-none"
            name="search"
            type="text"
            v-model="searchQuery"
            @keydown="checkKeyDown($event)"
            @focus="isFocused = true"
            @blur="isFocused = false"
        />
        <Icon
            class="icon w-5 h-5 mr-3 bg-rose-700 dark:bg-rose-300 cursor-pointer"
            name="x.svg"
            folder="icons"
            size="20px"
            v-if="isFocused || !!searchQuery || showList"
            @click="cancel()"
        />
        <span class="absolute flex items-center gap-2 opacity-90 f-josefin" :class="[isFocused || !!searchQuery ? 'left-3 top-2 opacity-75' : 'left-4 top-5']">
            <Icon
                class="icon w-5 h-5 bg-black2 dark:bg-zinc-100"
                :class="{ 'w-4 h-4': isFocused || !!searchQuery }"
                :name="iconName"
                folder="icons"
                :size="isFocused || !!searchQuery ? '16px' : '20px'"
                v-if="iconName"
            />
            <span class="flex -mb-0.5 text-green3 dark:text-green1" :class="{ 'text-xs': isFocused || !!searchQuery }"> {{ placeholder }} </span>
        </span>
        <small class="absolute -bottom-7 flex items-center gap-1 text-sm text-rose-800" v-if="!!error">
            <Icon class="icon w-5 h-5 bg-rose-700" name="alert-circle.svg" folder="icons" size="20px" />{{ error }}
        </small>
        <ul class="absolute top-14 w-full flex flex-col gap-2 p-2 rounded-xl bg-stone-200 dark:bg-neutral-700 shadow-xl" v-show="showList">
            <slot :items="data.values"></slot>
            <small class="opacity-40" v-if="!searching && searchQuery && data.values.length == 0">We Find Nothing...</small>
        </ul>
    </div>
</template>

<script setup>
import axios from "axios";
import { prop } from "dom7";
import Icon from "~/components/Icon.vue";

const props = defineProps({
    placeholder: String,
    required: { type: Boolean, default: false },
    url: String,
    error: { type: String, default: "" },
    shadow: { type: Boolean, default: true },
    iconName: { type: String },
});
// const { modelValue } = toRefs(props);
const emit = defineEmits([""]);

const input = ref(""); // DOM ref
const searchQuery = ref("");
const showList = ref(false);

let isFocused = ref(false);
const focus = () => input.value.focus();

const data = reactive({ values: [] });
const searching = ref(false);

const search = async () => {
    if (searching.value) return;
    searching.value = true;
    showList.value = true;

    let url = props.url;
    let params = [`pp=10`, `search=${searchQuery.value}`];
    url = encodeURI(`${url}?${params.join("&")}`);

    await axios
        .get(url)
        .then((response) => {
            data.values = response.data.records;
        })
        .catch((e) => {
            // if (typeof e.response !== "undefined" && e.response.data) {
            //     if (typeof e.response.data.message === "object") toast.error(e.response.data.message[0].errors[0], { timeout: 2000 });
            //     else toast.error(e.response.data, { timeout: 2000 });
            // }
        })
        .finally(() => (searching.value = false));
};

const checkKeyDown = async (e) => {
    if (e.keyCode != 13) return;
    await search();
};

const cancel = () => {
    showList.value = false;
    searchQuery.value = "";
    data.values = [];
};
</script>
