<template>
    <div class="min-h-screen bg-gray-50 flex flex-col items-center py-20 space-y-32">
        <!-- Header -->
        <div class="text-center">
            <h1 class="text-4xl font-bold mb-4">PrimeVue AnimateOnScroll + Animate.css</h1>
            <p class="text-gray-600">Scroll ke bawah untuk melihat animasi.</p>
        </div>

        <!-- Spacer -->
        <div class="h-[50vh]"></div>

        <!-- Fade In Up -->
        <div
            v-animateonscroll="{
                enterClass: 'animate__animated animate__fadeInUp',
                threshold: 0.5,
                once: true
            }"
            class="w-64 h-64 bg-blue-500 text-white rounded-2xl shadow-xl flex items-center justify-center text-xl font-bold"
        >
            Fade In Up
        </div>

        <!-- Video dengan Fade In Up -->
        <div
            v-animateonscroll="{
                enterClass: 'animate__animated animate__fadeInUp',
                threshold: 0.5,
                once: true
            }"
            class="w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl"
        >
            <video
                ref="videoRef"
                class="w-full h-auto"
                autoplay
                muted
                loop
                playsinline
                preload="metadata"
            >
                <source src="@/assets/video/vid.mp4" type="video/mp4" />
                Browser Anda tidak mendukung pemutaran video.
            </video>

            <!-- Overlay -->
            <!-- <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h2 class="text-white text-3xl font-bold">Welcome to Our Platform</h2>
            </div> -->
        </div>

        <!-- Zoom In -->
        <div
            v-animateonscroll="{
                enterClass: 'animate__animated animate__zoomIn',
                leaveClass: 'animate__animated animate__zoomOut'
            }"
            class="w-64 h-64 bg-green-500 text-white rounded-2xl shadow-xl flex items-center justify-center text-xl font-bold"
        >
            Zoom In
        </div>

        <!-- Slide In From Left -->
        <div
            v-animateonscroll="{
                enterClass: 'animate__animated animate__fadeInLeft',
                leaveClass: 'animate__animated animate__fadeOutLeft'
            }"
            class="w-64 h-64 bg-purple-500 text-white rounded-2xl shadow-xl flex items-center justify-center text-xl font-bold"
        >
            Slide From Left
        </div>

        <!-- Bounce In -->
        <div
            v-animateonscroll="{
                enterClass: 'animate__animated animate__bounceIn',
                leaveClass: 'animate__animated animate__fadeOut'
            }"
            class="w-64 h-64 bg-orange-500 text-white rounded-2xl shadow-xl flex items-center justify-center text-xl font-bold"
        >
            Bounce In
        </div>

        <!-- Rotate In -->
        <div
            v-animateonscroll="{
                enterClass: 'animate__animated animate__rotateIn',
                leaveClass: 'animate__animated animate__fadeOut'
            }"
            class="w-64 h-64 bg-red-500 text-white rounded-2xl shadow-xl flex items-center justify-center text-xl font-bold"
        >
            Rotate In
        </div>

        <!-- Spacer -->
        <div class="h-[50vh]"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const videoRef = ref(null);
let observer = null;

onMounted(() => {
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (videoRef.value) {
                    if (entry.isIntersecting) {
                        // Play video ketika terlihat
                        videoRef.value.play().catch(() => {});
                    } else {
                        // Pause video ketika tidak terlihat
                        videoRef.value.pause();
                    }
                }
            });
        },
        {
            threshold: 0.5 // Video diputar saat 50% terlihat
        }
    );

    if (videoRef.value) {
        observer.observe(videoRef.value);
    }
});

onBeforeUnmount(() => {
    if (observer && videoRef.value) {
        observer.unobserve(videoRef.value);
        observer.disconnect();
    }
});
</script>