<style scoped>
.mask {
    /* background: linear-gradient(45deg, theme("colors.gray1"), rgba(0, 0, 0, 0)); */
    /* mask-image: linear-gradient(360deg, transparent 0%, black 100%); */
    mix-blend-mode: difference;
    mask-image: linear-gradient(0deg, transparent 20%, black 100%);
}
</style>

<template>
    <!-- <div class="mask overflow-hidden select-none" :style="{ 'mask-image': maskImage, '-webkit-mask-image': maskImage }"> -->
    <div class="mask overflow-hidden select-none" :style="`mask-image: ${maskImage}, -webkit-mask-image: ${maskImage}`">
        <div class="flex flex-row gap-1.5 flex-nowrap opacity-30" v-for="(row, r) in height" :key="r">
            <img
                class="image w-64 h-auto select-none"
                width="256"
                draggable="false"
                src="~/assets/images/binary_wall.png"
                v-for="(img, i) in imgCount"
                :key="i"
            />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    angle: { type: Number, default: 0 },
    rows: { type: Number, default: 8 },
});

let maskImage = ref(`linear-gradient(${props.angle}deg, transparent 20%, black 100%);`);

let imgCount = reactive([]);
imgCount.length = 7;
let height = reactive([]);
height.length = props.rows;

const reCalcLength = () => {
    imgCount.length = Math.floor(window.innerWidth / 175) + 1;
};

onMounted(() => {
    reCalcLength();
    window.addEventListener("resize", () => reCalcLength());

    // maskImage.value = `linear-gradient(${props.angle}deg, transparent 20%, black 100%);`;
});
</script>
