<style scoped></style>

<template>
    <div class="flex flex-col gap-4 w-full">
        <Title class="flex items-center gap-2">
            <Icon class="icon w-8 h-8 bg-black2 dark:bg-white" name="file-edit.svg" folder="icons" size="32px" /> Blog Posts
        </Title>
    </div>
</template>

<script setup>
import Icon from "~/components/Icon.vue";
import Title from "~/components/admin/Title.vue";

useHead({ title: `Default - Blog Posts` });
definePageMeta({ layout: "admin" });
</script>
