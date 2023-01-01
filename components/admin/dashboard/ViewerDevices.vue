<style scoped>
/* canvas {
    width: calc(100% - 2rem) !important;
    height: calc(100% - 2rem) !important;
} */
</style>

<template>
    <div class="flex flex-col gap-4">
        <div class="flex flex-wrap items-center justify-between gap-4 w-full">
            <h2 class="f-josefin text-xl md:text-2xl font-bold w-max pb-1 border-b-4 border-b-teal-300">Viewer Devices</h2>
            <ul class="relative flex items-center gap-4 p-2 bg-stone-200 dark:bg-zinc-700 rounded-lg">
                <li
                    class="relative p-0.5 px-2 rounded-md cursor-pointer"
                    :class="{ 'text-white dark:text-black2 bg-zinc-600 dark:bg-zinc-200': chartType == 'device' }"
                    @click="selectType('device')"
                >
                    Device
                </li>
                <li
                    class="relative p-0.5 px-2 rounded-md cursor-pointer"
                    :class="{ 'text-white dark:text-black2 bg-zinc-600 dark:bg-zinc-200': chartType == 'browser' }"
                    @click="selectType('browser')"
                >
                    Browser
                </li>
            </ul>
        </div>
        <div class="relative flex items-center w-full h-72 p-4 bg-stone-100 dark:bg-black2 rounded-2xl">
            <canvas ref="chartCanvas" class="w-full max-h-64"></canvas>
        </div>
    </div>
</template>

<script setup>
import { Chart, registerables } from "chart.js";

const chartCanvas = ref(""); // Dom Ref
const chartOptions = {
    responsive: true,
    interaction: { mode: "index", intersect: false },
    tooltips: { mode: "label", intersect: true },
    plugins: { legend: { position: "right", labels: { color: "#999", font: { size: "16px", family: "consolas" } } } },
};
const chartData = { data: [12, 16, 22, 9, 34], label: ["chrome", "chrome mobile", "firefox", "samsung mobile", "safari"] };

const chartType = ref("device");
const selectType = (name) => (chartType.value = name);

onMounted(() => {
    const ctx = chartCanvas.value.getContext("2d");
    Chart.register(...registerables);
    const chart = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: chartData.label,
            datasets: [
                // { data: chartData.data, borderWidth: 0, spacing: 2, backgroundColor: ["#ADD3B8", "#92E3A9", "#82D389", "#fff", "#444", "#0d9488"] },
                { data: chartData.data, borderWidth: 0, spacing: 2, backgroundColor: ["#fff", "#000", "#222", "#444", "#666", "#888", "#aaa"] },
            ],
        },
        options: chartOptions,
    });
});
</script>
