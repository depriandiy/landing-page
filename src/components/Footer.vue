<template>
    <!-- <section class="grid min-h-[calc(60dvh)] snap-start grid-cols-12">
        <div class="_DESKTOP hidden lg:grid col-span-10 col-start-2 grid-rows-12">
            <div class="row-span-8 row-start-3 flex flex-row gap-5">
                <div class="w-[40%]">
                    <p>footer</p>
                </div>
                <div class="w-[30%]">
                    <p>footer</p>
                </div>
                <div class="flex-1 flex flex-col gap-7">
                    <div class="flex flex-col gap-1">
                        <p class="text-sm font-semibold underline">Information Contact:</p>
                        <div class="flex flex-row gap-3 items-center">
                            <span class="pi pi-envelope" />
                            <p class="">depriandianton22@gmail.com</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <p class="text-sm font-semibold underline">Social Media:</p>
                        <div class="flex flex-row gap-2 items-center">
                            <span class="pi pi-instagram bg-black py-3 px-3 rounded-full hover:bg-white/10 transition-all cursor-pointer" />
                            <span class="pi pi-linkedin bg-black py-3 px-3 rounded-full hover:bg-white/10 transition-all cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="_HANDPHONE lg:hidden flex flex-col col-span-10 col-start-2 gap-7 py-11">
            <p>test</p>
        </div>
    </section> -->

    <div class="h-[15dvh] text-white flex justify-center items-center">
        <p class="text-sm">&copy; 2026 Depri Andiyanto. All rights reserved.</p>
    </div>
</template>

<script setup>
// import
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
import Button from 'primevue/button';
import { onMounted } from 'vue';

// asset

// variable
//

// method
const open = (url) => {
    window.open(url, '_blank');
};

// socket
//

// onMounted
onMounted(() => {
    console.log('');
});
</script>
