<style scoped>
.btn {
    transition: all 0.2s;
}
</style>

<template>
    <div>
        <a
            class="btn p-3 px-6 rounded-lg border-2 border-solid dark:border-green-50 dark:bg-zinc-800 hover:bg-green1 hover:text-black2 hover:dark:bg-green1 hover:dark:text-black2"
            :href="linkTo"
            v-if="isLink && samepage"
        >
            {{ text }}
        </a>
        <nuxt-link
            class="btn p-3 px-6 rounded-lg border-2 border-solid dark:border-green-50 dark:bg-zinc-800 hover:bg-green1 hover:text-black2 hover:dark:bg-green1 hover:dark:text-black2"
            :to="linkTo"
            v-else-if="isLink && !samepage"
        >
            {{ text }}
        </nuxt-link>
        <button
            class="btn p-3 px-6 rounded-lg border-2 border-solid dark:border-green-50 dark:bg-zinc-800 hover:bg-green1 hover:text-black2 hover:dark:bg-green1 hover:dark:text-black2"
            v-else
        >
            {{ text }}
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    text: String,
    isLink: Boolean,
    samepage: Boolean,
    linkTo: { required: false, type: String },
});
// const { text } = toRefs(props);

// const emit = defineEmits(["state:update"]);
</script>
