<template>
    <div class="bg-[#100E09] text-white min-h-screen">
        <Navbar />

        <div class="body bg-[#100E09] h-screen overflow-y-scroll overscroll-contain scroll-smooth no-scrollbar pt-[15dvh]">
            <div class="about min-h-screen bg-[#100E09] grid grid-cols-12">
                <div class="col-span-10 col-start-2 bg-white">
                    <p>blabla</p>
                </div>
            </div>
            <div class="skill min-h-screen bg-[#0D0E0E]">
                <p>blabla</p>
            </div>
            <div class="experience min-h-screen bg-[#100E09] grid grid-cols-12">
                <div class="col-span-10 col-start-2 bg-white">
                    <p>blabla</p>
                </div>
            </div>
            <div class="project min-h-screen bg-[#0D0E0E]">
                <p>blabla</p>
            </div>
            <div class="contact min-h-screen bg-[#100E09] grid grid-cols-12">
                <div class="col-span-10 col-start-2 bg-white">
                    <p>blabla</p>
                </div>
            </div>

            <Footer />
        </div>
    </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
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