<style scoped>
.btn {
    transition: all 0.2s;
    box-shadow: 0px 15px 30px -15px rgba(0, 0, 0, 20%);
}
</style>

<template>
    <div>
        <a class="btn p-3 px-6 rounded-lg bg-green2 text-black1 hover:bg-green3 hover:text-white" :href="linkTo" v-if="isLink && samepage">
            {{ text }}
        </a>
        <nuxt-link class="btn p-3 px-6 rounded-lg bg-green2 text-black1 hover:bg-green3 hover:text-white" :to="linkTo" v-else-if="isLink && !samepage">
            {{ text }}
        </nuxt-link>
        <button class="btn p-3 px-6 rounded-lg bg-green2 text-black1 hover:bg-green3 hover:text-white" v-else>{{ text }}</button>
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
