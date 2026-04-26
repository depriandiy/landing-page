<template>
    <div class="relative h-dvh text-white bg-gradient-to-b from-gray-900 via-gray-800 to-black">
        <Navbar />

        <!-- <main ref="scroller" class="body h-full lg:snap-y lg:snap-mandatory lg:snap-always overflow-auto overscroll-contain scroll-smooths">
            
            <section class="_my-hero grid min-h-[calc(100dvh)] snap-start grid-cols-12">
                <div class="_DESKTOP col-span-10 col-start-2 hidden lg:grid grid-rows-12">
                    <div class="row-span-9 row-start-2 flex flex-row gap-7 items-center">
                        <p>test</p>
                    </div>
                </div>

                <div class="_HANDPHONE col-span-10 col-start-2 grid lg:hidden grid-rows-12">
                    <div class="row-span-9 row-start-2 flex flex-col gap-0 items-center">
                        <p>test</p>
                    </div>
                </div>
            </section>

            <section class="_my-projects grid min-h-[calc(100dvh)] snap-start grid-cols-12">
                <div class="h-[calc(100dvh)] col-span-10 col-start-2 flex flex-col lg:flex-row gap-5 lg:gap-11 py-11">
                    <p>test</p>
                </div>
            </section>

            <section class="_contact-me grid bg-white min-h-[calc(100dvh)] snap-start grid-cols-12">
                <div class="_DESKTOP col-span-10 col-start-2 hidden lg:grid grid-rows-12 gap-7">
                    <p>test</p>
                </div>

                <div class="_HANDPHONE col-span-10 col-start-2 lg:hidden flex flex-col py-14 gap-5">
                    <p>test</p>
                </div>
            </section>

            <Footer />
        </main> -->
    
        <main ref="scroller" class="body h-dvh overflow-y-scroll overscroll-contain scroll-smooth no-scrollbar">
            
            <section class="_my-hero grid min-h-[100dvh] grid-cols-12">
                <!-- <div class="_DESKTOP col-span-11 col-start-2 hidden lg:grid grid-rows-12">
                    <div class="row-span-9 row-start-3 flex flex-row justify-center items-center gap-0">
                        <div class="w-[50%] h-fit flex flex-col justify-center gap-0 border-l-2 border-[#F97316]/10 pl-6">
                            <h1 class="text-white text-5xl font-extrabold leading-tight">
                                Hi, I'm <span class="text-[#F97316]">Depri</span> 👋
                            </h1>
                            <div class="mt-3">
                                <span class="inline-block px-4 py-1 text-xs font-medium rounded-full bg-[#F97316]/10 text-[#F97316]">
                                    Software Developer • HRIS Systems Experience
                                </span>
                            </div>
                            <p class="text-gray-400 mt-4 max-w-xl leading-relaxed">
                                Experienced in building real-world applications using
                                <span class="text-white font-medium">Vue.js</span>,
                                <span class="text-white font-medium">Node.js</span>, and
                                <span class="text-white font-medium">PHP</span>.
                            </p>                              
                            <div class="flex gap-3 mt-6 mb-4">
                                <Button icon="pi pi-file-export" label="My Projects" rounded severity="warn" size="small" @click="toProject" class="!px-5 !transition-transform !duration-200 !ease-out 
                                hover:!shadow-[0_0_6px_2px_rgba(251,146,60,0.35),0_0_2px_2px_rgba(253,186,116,0.6)_inset,0_-2px_10px_0_rgba(253,186,116,0.35)_inset] hover:!-translate-y-0.5 active:!translate-y-0" />
                                <Button label="Chat me, here!" rounded severity="warn" size="small" @click="toContact" class="!px-5 !transition-transform !duration-200 !ease-out 
                                hover:!shadow-[0_0_6px_2px_rgba(251,146,60,0.35),0_0_2px_2px_rgba(253,186,116,0.6)_inset,0_-2px_10px_0_rgba(253,186,116,0.35)_inset] hover:!-translate-y-0.5 active:!translate-y-0" />
                            </div>
                        </div>

                        <div class="w-[35%] h-fit">
                            <div ref="anim" class="w-[100%] h-[100%]" />
                        </div>
                    </div>
                </div> -->
                
                <!-- <div class="_DESKTOP col-span-10 col-start-2 hidden lg:grid grid-rows-12">
                    <div class="row-span-10 row-start-3 flex flex-row items-center pl-9">
                        <div class="w-[55%] h-fit flex flex-col justify-center gap-0 border-l-2 border-[#F97316]/10 pl-7 mb-7">
                            <h1 class="text-white text-5xl font-extrabold leading-tight">
                                Hi, I'm <span class="text-[#F97316]">Depri</span> 👋
                            </h1>
                            <div class="mt-3">
                                <span class="inline-block px-4 py-1 text-xs font-medium rounded-full bg-[#F97316]/10 text-[#F97316]">
                                    Software Developer • HRIS Systems Experience
                                </span>
                            </div>
                            <p class="text-gray-400 mt-4 max-w-xl leading-relaxed">
                                Experienced in building real-world applications using
                                <span class="text-white font-medium">Vue.js</span>,
                                <span class="text-white font-medium">Node.js</span>, and
                                <span class="text-white font-medium">PHP</span>.
                            </p>
                            <div class="_SOCMED w-fit">
                                <ul class="wrapper !h-fit">
                                    <li class="icon facebook">
                                        <span class="tooltip">Facebook</span>
                                        <svg
                                            viewBox="0 0 320 512"
                                            height="1.2em"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                            ></path>
                                        </svg>
                                    </li>
                                    <li class="icon instagram">
                                        <span class="tooltip">Instagram</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="1.2em"
                                            fill="currentColor"
                                            class="bi bi-instagram"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                            ></path>
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="flex-1 h-full flex justify-end pr-0 items-end">
                            <img src="../assets/img/profile.png" alt="Depri A." class="h-[95%]" />
                        </div>
                    </div>
                </div> -->
                
                <div class="_DESKTOP col-span-10 col-start-2 hidden lg:grid grid-rows-12 gap-7">
                    <div class="row-span-8 row-start-4 flex flex-row">
                        <div class="flex-1 flex flex-col gap-3">
                            <p class="font-syne text-[96px] leading-[0.95] font-bold tracking-tight">
                                <span class="highlight">Depri</span><br>Andiyanto
                            </p>
                            <p class="font-syne text-lg font-semibold tracking-wide text-neutral-200">
                                Software Developer
                                <span class="mx-2 text-neutral-500">•</span>
                                HRIS Systems Experience
                            </p>
                            <p class="text-gray-400 max-w-xl font-syne leading-relaxed">
                                Experienced in building real-world applications using
                                <span class="text-[#F97316] font-medium">Vue.js</span>,
                                <span class="text-[#F97316] font-medium">Node.js</span>, and
                                <span class="text-[#F97316] font-medium">PHP</span>.
                                Focused on creating efficient, scalable, and maintainable systems.
                            </p>  
                            <div class="_SOCMED w-fit ml-4 mt-4">
                                <ul class="wrapper">
                                    <li class="icon facebook">
                                        <span class="tooltip">Facebook</span>
                                        <svg
                                            viewBox="0 0 320 512"
                                            height="1.2em"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                            ></path>
                                        </svg>
                                    </li>
                                    <li class="icon instagram">
                                        <span class="tooltip">Instagram</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="1.2em"
                                            fill="currentColor"
                                            class="bi bi-instagram"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                            ></path>
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="w-[35%] flex flex-col gap-3">
                        </div>
                    </div>
                </div>
            
                <div class="_HANDPHONE col-span-10 col-start-2 grid lg:hidden grid-rows-12">
                    <div class="row-span-9 row-start-2 flex flex-col items-center">
                        <p>test</p>
                    </div>
                </div>
            </section>

            <section class="_my-projects grid min-h-[100dvh] grid-cols-12">
                <div class="_DESKTOP col-span-10 col-start-2 hidden lg:grid grid-rows-12 gap-7">
                    <p>test</p>
                </div>
            
                <div class="_HANDPHONE col-span-10 col-start-2 lg:hidden flex flex-col py-14 gap-5">
                    <p>test</p>
                </div>
            </section>

            <section class="_contact-me grid min-h-[100dvh] grid-cols-12">
                <div class="_DESKTOP col-span-10 col-start-2 hidden lg:grid grid-rows-12 gap-7">
                    <p>test</p>
                </div>
            
                <div class="_HANDPHONE col-span-10 col-start-2 lg:hidden flex flex-col py-14 gap-5">
                    <p>test</p>
                </div>
            </section>

        </main>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Button from 'primevue/button';

import Navbar from '@/components/Navbar.vue';
import lottie from 'lottie-web';
import Typed from "typed.js";

// methods
const anim = ref(null)
let instance = null

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

const scrollOrRedirect = (className, fallbackPath) => {
    const currentPath = window.location.pathname;

    if (currentPath === "/") {
        const el = document.getElementsByClassName(className)[0];
        el?.scrollIntoView({ behavior: "smooth" });
    } else
        window.location.href = fallbackPath;
};

const toProject = () => scrollOrRedirect("_my-projects", "/projects");
const toContact = () => scrollOrRedirect("_contact-me", "/contact-me");

const scroller = ref(null);
const navEl = ref(null);
const typedEl = ref(null);

onMounted(() => {
    // new Typed(typedEl.value, {
    //     strings: ["Website Developer | Designer"], 
    //     typeSpeed: 80,
    //     backSpeed: 40,
    //     backDelay: 1500,
    //     loop: true,
    // });
});

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

<style scoped>
    .highlight {
        color: transparent;
        -webkit-text-stroke: 1.5px #F97316;
        font-weight: 700;
        letter-spacing: 2px;
    }

    .wrapper {
        display: inline-flex;
        list-style: none;
        height: 120px;
        width: 100%;
        padding-top: 17px;
        justify-content: center;
    }

    .wrapper .icon {
        position: relative;
        background: black;
        border-radius: 50%;
        margin-right: 20px;
        margin-left: 10px;
        width: 40px;
        height: 40px;
        font-size: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .wrapper .tooltip {
        position: absolute;
        top: 0;
        font-size: 14px;
        background: #fff;
        color: #fff;
        padding: 5px 8px;
        border-radius: 5px;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .wrapper .tooltip::before {
        position: absolute;
        content: "";
        height: 8px;
        width: 8px;
        background: #fff;
        bottom: -3px;
        left: 50%;
        transform: translate(-50%) rotate(45deg);
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .wrapper .icon:hover .tooltip {
        top: -37px;
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
    }

    .wrapper .icon:hover span,
    .wrapper .icon:hover .tooltip {
        text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
    }

    .wrapper .facebook:hover,
    .wrapper .facebook:hover .tooltip,
    .wrapper .facebook:hover .tooltip::before {
        background: #1877f2;
        color: #fff;
    }

    .wrapper .twitter:hover,
    .wrapper .twitter:hover .tooltip,
    .wrapper .twitter:hover .tooltip::before {
        background: #1da1f2;
        color: #fff;
    }

    .wrapper .instagram:hover,
    .wrapper .instagram:hover .tooltip,
    .wrapper .instagram:hover .tooltip::before {
        background: #e4405f;
        color: #fff;
    }
</style>