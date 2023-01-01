<style scoped>
.flag {
    filter: grayscale(70%);
}
</style>

<template>
    <div class="flex items-start gap-1" aria-label="language-selector" role="switch">
        <img class="flag w-6" src="~/assets/images/lang_en.png" alt="lang_image" />
        <div class="flex flex-col gap-0">
            <small class="text-xs">En</small>
            <svg width="15" height="9" viewBox="0 0 15 9" fill="#646464" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2.82843 0C1.04662 0 0.154284 2.15428 1.41421 3.41421L6.08579 8.08579C6.86683 8.86683 8.13316 8.86683 8.91421 8.08579L13.5858 3.41421C14.8457 2.15428 13.9534 0 12.1716 0H2.82843Z"
                />
            </svg>
        </div>
    </div>
</template>

<script setup></script>
