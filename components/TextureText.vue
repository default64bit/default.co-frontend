<style scoped>
.dark .ring-text {
    opacity: 13%;
}
.ring-text {
    text-shadow: 2px 0px #fff, 0px 2px #fff, -2px 0px #fff, 0px -2px #fff;
    font-size: 5rem;
    line-height: 5rem;
    opacity: 10%;
    user-select: none;
    /* mix-blend-mode: difference; */
}
@media (min-width: 768px) {
    .ring-text {
        font-size: 10rem;
        line-height: 9rem;
    }
}
@media (min-width: 1440px) {
    .ring-text {
        font-size: 17rem;
        line-height: 15rem;
    }
}
</style>

<template>
    <span class="ring-text text-center dark:text-zinc-300 whitespace-nowrap">{{ text }}</span>
</template>

<script setup>
const props = defineProps({
    text: String,
});
</script>
