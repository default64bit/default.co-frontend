<style scoped>
h1 {
    background: -webkit-linear-gradient(0deg, theme("colors.green3") 0%, theme("colors.teal.500") 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.dark h1 {
    background: -webkit-linear-gradient(0deg, theme("colors.green2") 0%, theme("colors.teal.400") 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>

<template>
    <h1 class="text-3xl md:text-4xl font-bold w-max">
        <slot />
    </h1>
</template>

<script setup></script>
