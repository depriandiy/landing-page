<template>
    <div class="w-full overflow-x-hidden">
      <!-- Spacer Atas -->
      <section class="h-screen flex items-center justify-center bg-gray-100">
        <h1 class="text-4xl font-bold">Scroll Down</h1>
      </section>
  
      <!-- Section Animasi -->
      <section ref="sectionRef" class="relative h-[200vh] bg-white">
        <div class="sticky top-0 h-screen flex items-center justify-center">
          <div
            ref="boxRef"
            class="box bg-indigo-500 text-white flex items-center justify-center font-bold shadow-2xl"
          >
            <span ref="textRef" class="text-2xl md:text-4xl">Welcome</span>
          </div>
        </div>
      </section>
  
      <!-- Konten Setelah Animasi -->
      <section class="h-screen flex items-center justify-center bg-gray-200">
        <h2 class="text-3xl font-semibold">Next Section</h2>
      </section>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const boxRef = ref(null)
const sectionRef = ref(null)
const textRef = ref(null)

onMounted(() => {
  const ctx = gsap.context(() => {
    // Set kondisi awal
    gsap.set(boxRef.value, {
      width: 200,
      height: 200,
      borderRadius: 20
    })

    // Timeline animasi
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top center',     // Mulai saat section mencapai tengah layar
        end: 'center center',    // Selesai saat teks berada di tengah layar
        scrub: true,             // Mengikuti scroll
        pin: true,               // Menahan section
        toggleActions: 'play none none none', // Tidak reverse saat scroll ke atas
        anticipatePin: 1
      }
    })

    // Animasi kotak menjadi full screen
    tl.to(boxRef.value, {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
      ease: 'power2.out'
    })

    // Animasi teks (opsional agar lebih dramatis)
    tl.to(
      textRef.value,
      {
        scale: 1.5,
        ease: 'power2.out'
      },
      0 // dijalankan bersamaan dengan animasi kotak
    )
  }, sectionRef)

  onUnmounted(() => {
    ctx.revert() // Membersihkan animasi saat komponen di-unmount
  })
})
</script>

<style scoped>
.box {
  min-width: 200px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

/* Mencegah scroll horizontal */
:global(body) {
  overflow-x: hidden;
}
</style>