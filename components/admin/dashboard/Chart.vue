<style scoped>
.drop-down-wrapper {
    position: absolute;
    top: 2.5rem;
    border-radius: 5px;
    overflow: hidden;
    height: 0px;
    z-index: 2;
    transition: all 0.2s ease-in-out;
}
.drop-down-wrapper.open {
    height: 6rem;
}

.drop-down-item {
    display: flex;
    transition: all 0.2s;
    padding: 0.75rem 1rem;
}

.drop-down-list > li {
    border-bottom: 1px solid theme("colors.neutral.200");
}
.dark .drop-down-list > li {
    border-bottom: 1px solid theme("colors.neutral.900");
}
</style>

<template>
    <div class="flex flex-col gap-4 w-full">
        <div class="flex flex-wrap items-center justify-between gap-4 w-full">
            <div class="relative flex flex-col items-start gap-2 w-max">
                <h2 class="f-josefin flex items-center gap-2 text-xl md:text-2xl font-bold" @click="toggleDropdown()" ref="dropdownToggler">
                    <span class="pb-1 border-b-4 border-b-teal-300"> {{ chartTitleList[chartTitle].name }} </span>
                    <Icon class="icon w-4 h-8 bg-black2 dark:bg-white" name="chevron-down.svg" folder="icons" size="32px" />
                </h2>
                <div class="drop-down-wrapper bg-stone-100 dark:bg-zinc-700 dark:text-white w-max shadow-lg" :class="{ open: dropdownOpen }">
                    <div class="w-full h-80 max-h-80 overflow-auto" ref="dropdown">
                        <ul class="drop-down-list flex flex-col h-full cursor-pointer">
                            <li
                                class="drop-down-item hover:bg-zinc-200 hover:dark:bg-zinc-600"
                                :class="{ 'bg-zinc-200 dark:bg-zinc-600': chartTitle == 'wv' }"
                                @click="selectChart('wv')"
                            >
                                Website Views
                            </li>
                            <li
                                class="drop-down-item hover:bg-zinc-200 hover:dark:bg-zinc-600"
                                :class="{ 'bg-zinc-200 dark:bg-zinc-600': chartTitle == 'cm' }"
                                @click="selectChart('cm')"
                            >
                                Contact Messages
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul class="relative flex items-center gap-4 p-2 bg-stone-200 dark:bg-zinc-700 rounded-lg">
                <li
                    class="relative p-0.5 px-2 rounded-md cursor-pointer"
                    :class="{ 'text-white dark:text-black2 bg-zinc-600 dark:bg-zinc-200': chartTime == 'pm' }"
                    @click="selectTime('pm')"
                >
                    Past Month
                </li>
                <li
                    class="relative p-0.5 px-2 rounded-md cursor-pointer"
                    :class="{ 'text-white dark:text-black2 bg-zinc-600 dark:bg-zinc-200': chartTime == 'ty' }"
                    @click="selectTime('ty')"
                >
                    This Year
                </li>
                <li
                    class="relative p-0.5 px-2 rounded-md cursor-pointer"
                    :class="{ 'text-white dark:text-black2 bg-zinc-600 dark:bg-zinc-200': chartTime == 'at' }"
                    @click="selectTime('at')"
                >
                    All Times
                </li>
            </ul>
        </div>
        <canvas ref="chartCanvas" class="w-full max-h-96 p-2 bg-stone-100 dark:bg-black2 rounded-2xl"></canvas>
    </div>
</template>

<script setup>
import Icon from "~/components/Icon.vue";
import { Chart, registerables } from "chart.js";

const dropdownOpen = ref(false);
const dropdownToggler = ref(""); // Dom Ref
const dropdown = ref(""); // Dom Ref

const chartCanvas = ref(""); // Dom Ref
const chartOptions = {
    responsive: true,
    interaction: { mode: "index", intersect: false },
    tooltips: { mode: "label", intersect: true },
    plugins: { legend: { display: false, labels: { font: { family: "consolas" } } } },
    scales: { x: { grid: { display: false }, ticks: { color: "#999" } }, y: { grid: { display: false }, ticks: { color: "#999" } } },
};
const chartData = { data: [12, 16, 22, 9, 34], label: ["n1", "n2", "n3", "n4", "n5"] };

const chartTime = ref("pm");
const chartTitle = ref("wv");
const chartTitleList = reactive({
    wv: { name: "Website Views" },
    cm: { name: "Contact Messages" },
});

const toggleDropdown = () => (dropdownOpen.value = !dropdownOpen.value);
const clickAwayHandle = (event) => {
    if (dropdown.value && !dropdown.value.contains(event.target)) {
        dropdownOpen.value = event.target;
        if (!dropdownToggler.value.contains(event.target)) dropdownOpen.value = false;
    }
};

const selectChart = (name) => {
    chartTitle.value = name;
    toggleDropdown();
};
const selectTime = (name) => (chartTime.value = name);

onMounted(() => {
    document.addEventListener("click", clickAwayHandle);

    const ctx = chartCanvas.value.getContext("2d");
    Chart.register(...registerables);
    const chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: chartData.label,
            datasets: [
                {
                    data: chartData.data,
                    lineTension: 0.4,
                    fill: true,
                    borderWidth: 2,
                    borderColor: "#3C9A70",
                    backgroundColor: (context) => {
                        const chartArea = context.chart.chartArea;
                        if (!chartArea) return;
                        const gradient = ctx.createLinearGradient(0, chartArea.bottom - 5, 0, chartArea.top + 5);
                        gradient.addColorStop(1, "#ADD3B8ff");
                        gradient.addColorStop(0.75, "#ADD3B8aa");
                        gradient.addColorStop(0, "#2dd4bf00");
                        return gradient;
                    },
                },
            ],
        },
        options: chartOptions,
    });
});
onUnmounted(() => {
    document.removeEventListener("click", clickAwayHandle);
});
</script>
