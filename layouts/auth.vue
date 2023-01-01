<style scoped>
main {
    min-height: calc(100vh - 5rem);
}
</style>

<template>
    <div class="flex flex-col items-center w-screen min-h-screen bg-white dark:bg-black1 overflow-hidden" id="app">
        <NuxtLoadingIndicator />
        <main class="flex items-center justify-center">
            <slot />
        </main>
        <span class="mb-8 mt-4 f-josefin text-black1 dark:text-white">Default.Co © {{ year }}. All rights reserved.</span>
    </div>
</template>

<script setup>
const year = new Date(Date.now()).getFullYear();
</script>
