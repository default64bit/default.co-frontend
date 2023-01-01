<style scoped></style>

<template>
    <div class="flex flex-col gap-4 w-full">
        <!-- <Title class="flex items-center gap-2">
            <Icon class="icon w-8 h-8 bg-black2 dark:bg-white" name="home2.svg" folder="icons" size="32px" /> Dashboard
        </Title> -->
        <section class="flex flex-col items-start lg:flex-row gap-4 md:gap-6 w-full">
            <div class="flex flex-col gap-4 md:gap-6 flex-shrink-0 w-full lg:w-7/12">
                <Chart class="" />
                <div class="flex flex-col md:flex-row gap-4 md:gap-6 w-full">
                    <ProjectViews class="w-full md:w-6/12" />
                    <ViewerDevices class="w-full md:w-6/12" />
                </div>
            </div>
            <RecentMessages class="flex-shrink-0 w-full lg:w-0 lg:flex-grow" />
            <!-- <div class="flex flex-col gap-4 md:gap-6 flex-shrink-0 w-full lg:w-0 lg:flex-grow">
            </div> -->
        </section>
    </div>
</template>

<script setup>
import Icon from "~/components/Icon.vue";
import Title from "~/components/admin/Title.vue";
import Chart from "~/components/admin/dashboard/Chart.vue";
import RecentMessages from "~/components/admin/dashboard/RecentMessages.vue";
import ProjectViews from "~/components/admin/dashboard/ProjectViews.vue";
import ViewerDevices from "~/components/admin/dashboard/ViewerDevices.vue";

useHead({ title: `Default - Admin Dashboard` });
definePageMeta({ layout: "admin" });
</script>
