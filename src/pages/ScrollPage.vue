<template>
    <div class="bg-gray-50">
      <!-- Header -->
      <section class="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 class="text-4xl font-bold mb-4">
          Scroll Driven Video Animation
        </h1>
        <p class="text-gray-600">
          Scroll ke bawah untuk melihat animasi video.
        </p>
      </section>
  
      <!-- Scroll Controlled Video Section -->
      <section ref="scrollSection" class="relative h-[400vh]">
        <div class="sticky top-0 h-screen flex items-center justify-center bg-black">
          <video
            ref="videoRef"
            class="w-full h-full object-cover"
            muted
            playsinline
            preload="auto"
          >
            <source src="@/assets/video/vid2.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
  
      <!-- Section Setelah Video -->
      <section class="min-h-screen flex items-center justify-center">
        <h2 class="text-3xl font-bold">Animasi Selesai 🎉</h2>
      </section>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const videoRef = ref(null);
const scrollSection = ref(null);

let handleScroll = null;
let rafId = null;
let targetTime = 0;
let currentTime = 0;

onMounted(() => {
  const video = videoRef.value;
  const section = scrollSection.value;

  const onLoadedMetadata = () => {
    const duration = video.duration;

    handleScroll = () => {
      const scrollableHeight = section.offsetHeight - window.innerHeight;
      const scrolled = window.scrollY - section.offsetTop;

      // Clamp progress antara 0 - 1
      const progress = Math.min(Math.max(scrolled / scrollableHeight, 0), 1);
      targetTime = duration * progress;
    };

    const smoothUpdate = () => {
      // Interpolasi untuk pergerakan yang lebih halus
      currentTime += (targetTime - currentTime) * 0.1;

      if (Math.abs(currentTime - video.currentTime) > 0.01) {
        video.currentTime = currentTime;
      }

      rafId = requestAnimationFrame(smoothUpdate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    smoothUpdate();
  };

  video.addEventListener('loadedmetadata', onLoadedMetadata);

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
    video.removeEventListener('loadedmetadata', onLoadedMetadata);
    if (rafId) cancelAnimationFrame(rafId);
  });
});
</script>