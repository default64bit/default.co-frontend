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
        :class="{ error: !!error, 'input-box-shadow': !!shadow }"
        @click="focus()"
    >
        <div class="flex flex-wrap items-center gap-2 w-full p-2 pt-1 mt-6 rounded-b-xl">
            <div class="flex items-center gap-1 bg-white dark:bg-black p-1 px-2 rounded-lg shadow-lg" v-for="(tag, i) in tags" :key="i">
                {{ tag }}
                <Icon class="icon w-4 h-4 bg-rose-700 dark:bg-rose-300 cursor-pointer" name="x.svg" folder="icons" size="16px" @click="removeTag(i)" />
            </div>
            <input
                ref="input"
                class="bg-transparent outline-none flex-grow"
                autocomplete="false"
                :required="required"
                :name="name"
                :type="type"
                v-model="inputValue"
                @keydown="addValue($event)"
                @focus="isFocused = true"
                @blur="blur()"
            />
        </div>
        <span class="absolute flex items-center gap-2 opacity-90 f-josefin" :class="[placeholderShouldBeUp ? 'left-3 top-2 opacity-75' : 'left-4 top-5']">
            <Icon
                class="icon w-5 h-5 bg-black2 dark:bg-zinc-100"
                :class="{ 'w-4 h-4': placeholderShouldBeUp }"
                :name="iconName"
                folder="icons"
                :size="placeholderShouldBeUp ? '16px' : '20px'"
                v-if="iconName"
            />
            <span class="flex -mb-0.5 text-green3 dark:text-green1" :class="{ 'text-xs': placeholderShouldBeUp }"> {{ placeholder }} </span>
        </span>
        <small class="absolute -bottom-7 flex items-center gap-1 text-sm text-rose-800" v-if="!!error">
            <Icon class="icon w-5 h-5 bg-rose-700" name="alert-circle.svg" folder="icons" size="20px" />{{ error }}
        </small>
    </div>
</template>

<script setup>
import Icon from "~/components/Icon.vue";

const props = defineProps({
    name: String,
    placeholder: String,
    required: { type: Boolean, default: false },
    tags: Array,
    type: String,
    error: { type: String, default: "" },
    shadow: { type: Boolean, default: true },
    iconName: { type: String },
});
const { tags } = toRefs(props);
const emit = defineEmits(["update:tags"]);

const input = ref(""); // DOM ref
const inputValue = ref("");

const addValue = (e) => {
    if (e.keyCode != 13) return;
    const set = new Set(tags.value);
    set.add(inputValue.value);
    emit("update:tags", Array.from(set));
    inputValue.value = "";
};
const removeTag = (index) => {
    tags.value.splice(index, 1);
    emit("update:tags", tags.value);
};

const placeholderShouldBeUp = computed(() => isFocused.value || tags.value.length > 0);

let isFocused = ref(false);
const focus = () => input.value.focus();
const blur = () => {
    isFocused.value = false;
    inputValue.value = "";
};
</script>
