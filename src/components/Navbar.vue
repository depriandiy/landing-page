<template>
    <!-- <div class="grid fixed h-[15dvh] w-full grid-cols-12 place-items-end">
        <div class="_DESKTOP col-span-8 col-start-3 h-[10dvh] w-full hidden lg:grid grid-cols-12
        bg-white/10 backdrop-blur-xl shadow-lg border border-white/20 rounded-full">
            <div class="col-span-3 col-start-1 rounded-full flex flex-row gap-2 items-center justify-start px-7 cursor-pointer">
                <img src="/pumpkin.png" class="w-[24%]" />
            </div>
            <div class="col-span-8 col-start-7 rounded-full flex flex-row items-center justify-center gap-3 px-3">
                <Button
                    label="About Me"
                    @click="toHero"
                    rounded
                    class="flex-1 !text-[15.4px]
                        !bg-transparent !border-none !text-white/80
                        !transition-all !duration-100 !ease-out
                        hover:!bg-white/5 hover:!backdrop-blur-lg
                        hover:!shadow-[0_4px_20px_rgba(255,255,255,0.1)]
                        hover:!border hover:!border-white/10
                        hover:!text-white"
                />
                <Button
                    label="Projects"
                    @click="toProject"
                    rounded
                    class="flex-1 !text-[15.4px]
                        !bg-transparent !border-none !text-white/80
                        !transition-all !duration-100 !ease-out
                        hover:!bg-white/5 hover:!backdrop-blur-lg
                        hover:!shadow-[0_4px_20px_rgba(255,255,255,0.1)]
                        hover:!border hover:!border-white/10
                        hover:!text-white"
                />
                <Button
                    label="Contact"
                    @click="toContact"
                    rounded
                    icon="pi pi-whatsapp" iconPos="right"
                    class="flex-1 !text-[15.4px] !flex !items-center !justify-center !gap-3
                        !bg-transparent !border-none !text-white/80
                        !transition-all !duration-100 !ease-out
                        hover:!bg-gradient-to-r hover:!from-white/10 hover:!to-white/5
                        hover:!backdrop-blur-md
                        hover:!shadow-[0_4px_20px_rgba(255,255,255,0.15)]
                        hover:!border hover:!border-white/10
                        hover:!text-white"
                />
            </div>
        </div>
        
        <div class="_HANDPHONE col-span-10 col-start-2 h-[10dvh] w-full hidden flex-row justify-between
        bg-white/10 backdrop-blur-xl shadow-lg border border-white/20 rounded-full p-4">
            <div class="flex justify-center items-center">
                <img src="/pumpkin.png" class="w-[75%]" />
            </div>
            <div class="p-3 flex justify-center items-center">
                <span class="pi pi-bars !text-3xl !mt-0.5 !font-bold !text-gray-500" />
            </div>
        </div>
    </div> -->

    <nav class="fixed top-0 left-0 z-50 h-[15dvh] w-full grid grid-cols-12 bg-[#100E09]/10 backdrop-blur-md">
        <div class="col-start-2 col-span-10 flex items-center justify-between">
            <p class="font-display text-white text-3xl font-extrabold tracking-tight inline-block scale-x-110">
                depri<span class="text-transparent stroke-text">andiy</span>
            </p>
            <div>
                <p>dark/light mode</p>
            </div>
        </div>
    </nav>
</template>

<script setup>
// import
import Button from 'primevue/button';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

// variable
const router = useRouter();

// method
const scrollOrRedirect = (className, fallbackPath) => {
    const currentPath = window.location.pathname;

    if (currentPath === "/") {
        const el = document.getElementsByClassName(className)[0];
        el?.scrollIntoView({ behavior: "smooth" });
    } else {
        window.location.href = fallbackPath;
    }
};

const toHero = () => scrollOrRedirect("_my-hero", "/home");
const toProject = () => scrollOrRedirect("_my-projects", "/projects");
const toContact = () => scrollOrRedirect("_contact-me", "/contact-me");

// socket
//

// onMounted
onMounted(() => {
    console.log('');
});
</script>

<style>
    .stroke-text {
        -webkit-text-stroke: 1px #F97316;
    }
</style>