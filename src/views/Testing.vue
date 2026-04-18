<template>
    <div class="flex h-fit flex-col">
        <!-- <div class="lg:h-[65dvh] mx-20">
            <swiper
            :effect="'coverflow'"
            :grabCursor="true"
            :centeredSlides="true"
            :navigation="true"
            :slidesPerView="3"
            :initialSlide="2"
            :coverflowEffect="{
                rotate: -20,
                stretch: 0,
                depth: 150,
                modifier: 1,
                slideShadows: false,
            }"
            :pagination="true"
            :modules="modules"
            class="!py-[50px]"
            >
                <swiper-slide class="!flex !justify-center !items-center">
                    <img src="../assets/img/mangga1.png" />
                </swiper-slide>
                <swiper-slide class="!flex !justify-center !items-center">
                    <img src="../assets/img/mangga1.png" />
                </swiper-slide>
                <swiper-slide class="!flex !justify-center !items-center">
                    <img src="../assets/img/mangga1.png" />
                </swiper-slide>
                <swiper-slide class="!flex !justify-center !items-center">
                    <img src="../assets/img/mangga1.png" />
                </swiper-slide>
                <swiper-slide class="!flex !justify-center !items-center">
                    <img src="../assets/img/mangga1.png" />
                </swiper-slide>
                <swiper-slide class="!flex !justify-center !items-center">
                    <img src="../assets/img/mangga1.png" />
                </swiper-slide>
            </swiper>
        </div> -->
        <div class="h-[90dvh]">
            <swiper :spaceBetween="30" :loop="true" :centeredSlides="true" :autoplay="{ delay: 5000, disableOnInteraction: false }" :pagination="{ clickable: true }" :navigation="true" :modules="modules" class="mySwiper">
                <swiper-slide v-for="(image, index) in images" :key="index">
                    <img :src="image" />
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const modules = [Autoplay, Pagination, Navigation];
const images = [gold, peclipse, manalagi, mcerutu, morange, merahijo, leonis];

import gold from '@/assets/img/banners/FIN Gold.jpg';
import peclipse from '@/assets/img/banners/Polar Eclipse.jpg';
import manalagi from '@/assets/img/banners/Mustika Manalagi.jpg';
import mcerutu from '@/assets/img/banners/Mustika Cerutu.jpg';
import morange from '@/assets/img/banners/Mustika Orange.jpg';
import merahijo from '@/assets/img/banners/Mustika Merah & Hijau.jpg';
import leonis from '@/assets/img/banners/Leonis.jpg';
</script>

<style>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #444;

    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swiper-button-prev,
.swiper-button-next {
    color: white;
    padding: 0rem 2rem;
}

.swiper-pagination-bullet-active {
    background: #c9180b;
}
</style>
