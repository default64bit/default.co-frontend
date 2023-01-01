<style scoped>
.dialog {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 100;
    padding: 1rem;
    backdrop-filter: blur(5px);
}
.dialog .backdrop {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 50%);
}
.dialog > .box {
    min-width: 22rem;
    max-height: calc(100% - 5rem);
    z-index: 2;
}

@media (min-width: 768px) {
    .dialog > .box {
        max-height: 100%;
        margin-top: 0;
    }
}
</style>

<template>
    <div class="dialog flex flex-col items-center justify-center dark:text-white" :class="{ open: open }" v-show="open">
        <div class="backdrop" @click="close()"></div>
        <transition name="slide-up" mode="in-out" appear>
            <div class="box p-6 rounded-2xl shadow-xl w-max overflow-auto bg-white dark:bg-black1" :class="boxClass" v-show="open">
                <div class="flex justify-between items-center gap-4 mb-4">
                    <b class="f-josefin text-2xl" v-if="title">{{ title }}</b>
                    <!-- <span class="bg-green3 dark:bg-green1 h-1 opacity-50 flex-grow"></span> -->
                    <button
                        class="flex items-center justify-center bg-stone-50 dark:bg-black2 w-10 h-10 rounded-full p-2 shadow-xl border border-gray1 dark:border-gray3"
                        @click="close()"
                    >
                        <Icon class="icon w-6 h-6 bg-rose-800 dark:bg-rose-100" name="arrow-right-sm.svg" folder="icons" size="24px" />
                    </button>
                </div>
                <slot />
            </div>
        </transition>
    </div>
</template>

<script setup>
import Icon from "~/components/Icon.vue";

const props = defineProps({
    open: { type: Boolean, default: false },
    title: { type: String, default: "Title" },
    boxClass: String,
});

const emit = defineEmits(["update:open"]);

const close = () => {
    emit("update:open", false);
};
</script>
