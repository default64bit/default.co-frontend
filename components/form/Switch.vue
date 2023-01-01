<style scoped>
.switch {
    box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in-out;
}
.switch_dot {
    transition: all 0.2s ease-in-out;
}
.on {
    transform: translateX(-0.55rem);
    background-color: theme("colors.white");
    box-shadow: 0px 0px 20px 2px rgb(55 216 117 / 60%);
}
.dark .on {
    background-color: theme("colors.black1");
    box-shadow: 0px 0px 20px 2px rgb(55 216 117 / 60%);
}
.off {
    transform: translateX(0.55rem);
    background-color: theme("colors.white");
}
.dark .off {
    background-color: theme("colors.black1");
}
</style>

<template>
    <div
        class="switch flex items-center justify-center w-11 h-6 p-1 cursor-pointer rounded-full"
        :class="[state ? 'bg-green1' : 'bg-zinc-200 dark:bg-zinc-700']"
        @click="$emit('update:state', !state)"
    >
        <span class="switch_dot w-5 h-5 rounded-full" :class="[state ? 'on' : 'off']"></span>
    </div>
</template>

<script setup>
const props = defineProps({
    state: Boolean,
});
const { state } = toRefs(props);

defineEmits(["update:state"]);
</script>
