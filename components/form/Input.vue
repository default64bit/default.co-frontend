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
        <input
            ref="input"
            class="w-full bg-transparent p-2 pt-1 px-3 mt-6 rounded-b-xl outline-none"
            autocomplete="false"
            :required="required"
            :name="name"
            :type="type"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            @focus="isFocused = true"
            @blur="isFocused = false"
        />
        <span class="absolute flex items-center gap-2 opacity-90 f-josefin" :class="[isFocused || !!modelValue ? 'left-3 top-2 opacity-75' : 'left-4 top-5']">
            <Icon
                class="icon w-5 h-5 bg-black2 dark:bg-zinc-100"
                :class="{ 'w-4 h-4': isFocused || !!modelValue }"
                :name="iconName"
                folder="icons"
                :size="isFocused || !!modelValue ? '16px' : '20px'"
                v-if="iconName"
            />
            <span class="flex -mb-0.5 text-green3 dark:text-green1" :class="{ 'text-xs': isFocused || !!modelValue }"> {{ placeholder }} </span>
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
    modelValue: String,
    type: String,
    error: { type: String, default: "" },
    shadow: { type: Boolean, default: true },
    iconName: { type: String },
});
// const { modelValue } = toRefs(props);
defineEmits(["update:modelValue"]);

const input = ref("");

let isFocused = ref(false);
const focus = () => input.value.focus();
</script>
