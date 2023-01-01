<style scoped></style>

<template>
    <div class="relative flex flex-col items-start gap-2">
        <img
            class="w-48 h-36 bg-stone-50 dark:bg-black1 rounded-xl object-contain border-2 border-dashed border-gray2 border-opacity-30"
            :src="imageBlob || blob || '/icons/file.svg'"
            alt=""
        />
        <div class="flex flex-wrap items-start gap-2 w-full">
            <button
                type="button"
                class="p-2 px-6 rounded-lg bg-zinc-700 text-white hover:text-green1 text-sm flex-grow"
                @click="fileInputImage.click()"
                :disabled="loading"
            >
                Select Image
            </button>
            <button type="button" class="p-2 px-4 rounded-lg text-sm bg-gray3 text-white group" @click="deleteImage()" v-if="!!image">
                <Icon class="icon w-5 h-5 bg-white group-hover:bg-rose-300" name="trash.svg" folder="icons" size="20px" />
            </button>
        </div>
        <input class="absolute w-0 h-0 opacity-0" ref="fileInputImage" type="file" accept=".jpg,.jpeg,.png,.gif" @change="selectFile()" />
    </div>
</template>

<script setup>
import Icon from "~/components/Icon.vue";

const props = defineProps({
    image: Object | "",
    blob: String,
    loading: Boolean,
});
const { image } = toRefs(props);
const emit = defineEmits(["update:image"]);

const fileInputImage = ref(""); // Dom Ref
const imageBlob = ref(null);

const deleteImage = () => {
    fileInputImage.value.files = undefined;
    imageBlob.value = null
    emit("update:image", "");
};
const selectFile = () => {
    if (!fileInputImage.value.files[0]) return;
    imageBlob.value = URL.createObjectURL(fileInputImage.value.files[0]);
    emit("update:image", fileInputImage.value.files[0]);
};
</script>
