<style scoped>
.scrollBtn {
    transition: all 0.4s;
}
</style>

<template>
    <small
        class="scrollBtn fixed flex items-center justify-center gap-2 p-1 md:p-4 w-16 h-16 md:w-24 md:h-24 rounded-full f-jost-regular bg-white dark:bg-black1 cursor-pointer z-10"
        ref="scrollBtn"
        @click="scrollUpOrDown()"
    >
        <!-- <span>Scroll Down</span> -->
        <div
            class="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 p-1 md:p-4 rounded-full dark:bg-black2 dark:text-white hover:dark:text-green1 bg-stone-200 text-black2 hover:text-green3"
        >
            <img class="h-4 mix-blend-difference opacity-60" src="~/assets/images/arrow-down2.svg" />
        </div>
        <img class="scroll-down absolute w-16 md:w-22 mix-blend-difference" src="~/assets/images/scroll-down.png" />
    </small>
</template>

<script setup>
const scrollBtn = ref("");

const scrollUpOrDown = () => {
    const scrollTop = document.querySelector("html").scrollTop;
    if (scrollTop > 100) {
        document.querySelector("html").scrollTop = 0;
    } else {
        document.querySelector("html").scrollTop = window.outerHeight - 100;
    }
};

const calcBtnPostion = () => {
    if (!scrollBtn.value) return;
    
    const scrollTop = document.querySelector("html").scrollTop;
    if (scrollTop > 100) {
        scrollBtn.value.style.left = `0.5rem`;
        scrollBtn.value.style.bottom = `0.5rem`;
        scrollBtn.value.style.transform = `rotate(180deg)`;
        // scrollBtn.value.querySelector("span").innerText = `Go Up`;
        scrollBtn.value.querySelector(".scroll-down").style.display = `none`;
    } else {
        scrollBtn.value.style.left = `calc(50% + 4rem)`;
        scrollBtn.value.style.bottom = `6rem`;
        scrollBtn.value.style.transform = `rotate(0deg)`;
        // scrollBtn.value.querySelector("span").innerText = `Scroll Down`;
        scrollBtn.value.querySelector(".scroll-down").style.display = `flex`;
    }
};

onMounted(() => {
    calcBtnPostion();
    document.onscroll = () => calcBtnPostion();
});
</script>
