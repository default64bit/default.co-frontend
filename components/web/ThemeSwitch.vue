<style scoped>
.switch {
    box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease-in-out;
}
.switch_dot {
    transition: all 0.2s ease-in-out;
    background-color: theme("colors.white");
}
.dark {
    transform: translateX(-0.45rem);
}
.light {
    transform: translateX(0.45rem);
}
</style>

<template>
    <div
        aria-label="theme-switch"
        role="switch"
        class="switch flex items-center justify-center w-10 h-6 p-1 cursor-pointer rounded-full bg-gray3"
        @click="switchTheme()"
    >
        <span class="switch_dot flex items-center justify-center w-5 h-5 rounded-full" draggable="false" :class="[state ? 'dark' : 'light']">
            <img class="select-none w-5 h-5" draggable="false" src="~/assets/images/sun.svg" alt="" v-if="state" />
            <img class="select-none w-5 h-5" draggable="false" src="~/assets/images/moon.svg" alt="" v-else />
        </span>
    </div>
</template>

<script setup>
// const props = defineProps({
//     state: Boolean,
// });
// defineEmits(["state:update"]);
// const { state } = toRefs(props);
const state = ref(true);

const switchTheme = () => {
    localStorage.setItem("theme", !!state.value ? "dark" : "light");

    if (!state.value) document.documentElement.classList.remove("dark");
    else document.documentElement.classList.add("dark");
    state.value = !state.value;
};

onMounted(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme == "dark") switchTheme();
});
</script>
