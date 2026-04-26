<template>
    <div class="text-white min-h-screen">
        <!-- <Navbar /> -->
        <Navbar :isDark="isDark" @toggle="toggleMode" />

        <div  :class="['body', 'transition-all duration-500 ease-in-out', themeClass]" class="h-screen overflow-y-scroll overscroll-contain scroll-smooth no-scrollbar pt-[15dvh]">

            <div class="about min-h-screen grid grid-cols-12">
                <div class="col-span-10 col-start-2 flex flex-col gap-3 md:gap-1">

                    <!-- hero-profile -->
                    <div class="md:h-[70%] flex flex-col md:flex-row gap-1 md:items-center">
                        <div class="flex-1 pl-11 flex flex-col gap-6 md:gap-6">
                            <div class="flex flex-col gap-1 items-center md:items-start">
                                <p class="text-lg md:text-2xl font-semibold text-orange-500 pb-2 md:pb-0">Hello 👋, I'm</p>
                                <p class="text-4xl md:text-6xl font-bold">Depri Andiyanto</p>
                                <p class="text-xl font-thin text-gray-500 opacity-80">Programmer | Software Engineer</p>
                            </div>
                            <div class="flex flex-col gap-4 items-center md:items-start">
                                <p class="text-lg font-thin text-justify">
                                    Software Developer with 2+ years of experience in web development, specializing in backend and frontend systems.
                                    Proficient in <span class="text-orange-500 font-bold">PHP, Vue.js and Node.js</span> with hands-on experience building 
                                    scalable and user-focused web applications. Strong understanding of system development, API integration, Git, 
                                    and database management. 
                                </p>
                                <Button label="Chat here!" icon-pos="right" icon="pi pi-discord" class="!bg-orange-500 !border-0 !px-5 hover:!bg-opacity-85 
                                !w-fit !rounded-lg hover:!rounded-xl !transition-all" />
                            </div>
                            <div>
                            </div>
                        </div>
                        <div class="hidden md:flex w-[40%]">
                            <div ref="anim" class="" />
                        </div>
                    </div>

                    <!-- simple-desc -->
                    <div class="h-[25%]">
                        <p class="text-transparent">test</p>
                    </div>
                </div>
            </div>

            <div class="skill min-h-screen grid grid-cols-12">
                <div class="col-span-10 col-start-2 flex flex-col gap-1">
                    <div class="h-[70%] flex flex-row gap-1 items-center">
                        <div class="flex-1 bg-orange-300 h-full">
                            <p class="text-transparent">kiri</p>
                        </div>
                        <div class="w-[45%] bg-orange-300 h-full">
                            <p class="text-transparent">kanan</p>
                        </div>
                    </div>

                    <div class="h-[25%] bg-orange-200">
                        <p>test</p>
                    </div>
                </div>
            </div>
            
            <div class="experience min-h-screen grid grid-cols-12">
                <div class="col-span-10 col-start-2 flex flex-col gap-1">
                    <div class="h-[70%] flex flex-row gap-1 items-center">
                        <div class="flex-1 bg-orange-300 h-full">
                            <p class="text-transparent">kiri</p>
                        </div>
                        <div class="w-[45%] bg-orange-300 h-full">
                            <p class="text-transparent">kanan</p>
                        </div>
                    </div>

                    <div class="h-[25%] bg-orange-200">
                        <p>test</p>
                    </div>
                </div>
            </div>

            <div class="project min-h-screen grid grid-cols-12">
                <div class="col-span-10 col-start-2 flex flex-col gap-1">
                    <div class="h-[70%] flex flex-row gap-1 items-center">
                        <div class="flex-1 bg-orange-300 h-full">
                            <p class="text-transparent">kiri</p>
                        </div>
                        <div class="w-[45%] bg-orange-300 h-full">
                            <p class="text-transparent">kanan</p>
                        </div>
                    </div>

                    <div class="h-[25%] bg-orange-200">
                        <p>test</p>
                    </div>
                </div>
            </div>
            
            <div class="contact min-h-screen grid grid-cols-12">
                <div class="col-span-10 col-start-2 flex flex-col gap-1">
                    <div class="h-[70%] flex flex-row gap-1 items-center">
                        <div class="flex-1 bg-orange-300 h-full">
                            <p class="text-transparent">kiri</p>
                        </div>
                        <div class="w-[45%] bg-orange-300 h-full">
                            <p class="text-transparent">kanan</p>
                        </div>
                    </div>

                    <div class="h-[25%] bg-orange-200">
                        <p>test</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    </div>
</template>

<script setup>
// import
import { ref, onMounted, computed, onBeforeUnmount } from 'vue';
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Button from 'primevue/button'
import lottie from 'lottie-web';

// var
let instance = null
const anim = ref(null)
// const isDark = ref(true);
const isDark = ref(JSON.parse(localStorage.getItem('theme')) ?? true);

// method
const toggleMode = () => {
    isDark.value = !isDark.value;
    localStorage.setItem('theme', JSON.stringify(isDark.value));
};

const themeClass = computed(() => 
    isDark.value 
        ? 'bg-[#100E09] text-white' 
        : 'bg-white text-black'
);

onMounted(() => {
    instance = lottie.loadAnimation({
        container: anim.value,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/gif/walking.json',
    })
})

onBeforeUnmount(() => {
    instance?.destroy()
})
</script>

<style>
    .body {
        overflow: auto;
        scrollbar-width: none; /* Firefox */
    }
    
    .body::-webkit-scrollbar {
        display: none; /* Chrome, Safari */
    }
</style>