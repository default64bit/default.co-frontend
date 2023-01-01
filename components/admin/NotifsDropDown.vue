<style scoped>
.wrapper {
    position: fixed;
    inset-inline-end: 1rem;
    top: 4rem;
    border-radius: 5px;
    overflow: hidden;
    height: 0px;
    max-width: 18rem;
    z-index: 2;
    transition: all 0.2s ease-in-out;
}
.wrapper.open {
    height: 20rem;
}

.link {
    display: flex;
    width: 100%;
    transition: all 0.2s;
    padding: 0.75rem 1rem;
}

.notif_list > li {
    border-bottom: 1px solid theme("colors.neutral.200");
}
.dark .notif_list > li {
    border-bottom: 1px solid theme("colors.neutral.900");
}
</style>

<template>
    <div class="wrapper bg-white dark:bg-zinc-700 dark:text-white w-full shadow-lg" :class="{ open: notifsDropdownOpen }">
        <div class="w-full h-80 max-h-80 overflow-auto" ref="notifsDropdown">
            <ul class="notif_list flex flex-col h-full">
                <li class="link flex items-start gap-3 hover:bg-zinc-200 hover:dark:bg-zinc-600" v-for="(notification, i) in notifications" :key="i">
                    <i class="flex items-center text-lg h-6" :class="[notification.icon]"></i>
                    <div class="flex flex-col gap-1">
                        <h5 class="font-bold">{{ notification.title }}</h5>
                        <p class="text-sm opacity-75">{{ notification.text }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    notifsDropdownOpen: Boolean,
});
const { notifsDropdownOpen, notifsDropdownToggler } = toRefs(props);
const notifsDropdown = ref(null);

const emit = defineEmits(["notifsDropdownOpen:update"]);

onMounted(() => {
    document.addEventListener("click", (event) => {
        if (notifsDropdown.value && !notifsDropdown.value.contains(event.target)) setTimeout(() => emit("notifsDropdownOpen:update", event.target), 50);
    });
});

const notifications = reactive([
    {
        title: "E-mail Delivary",
        text: "Your email delivary failed. Please check your internet connection and retry.",
        icon: "far fa-envelope",
        date: new Date(Date.now()),
    },
    {
        title: "E-mail Delivary",
        text: "Your email delivary failed. Please check your internet connection and retry.",
        icon: "far fa-envelope",
        date: new Date(Date.now()),
    },
    {
        title: "E-mail Delivary",
        text: "Your email delivary failed. Please check your internet connection and retry.",
        icon: "far fa-envelope",
        date: new Date(Date.now()),
    },
    {
        title: "E-mail Delivary",
        text: "Your email delivary failed. Please check your internet connection and retry.",
        icon: "far fa-envelope",
        date: new Date(Date.now()),
    },
]);
</script>
