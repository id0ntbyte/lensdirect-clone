<template>
  <section class="py-16 bg-color-testimonials">
    <div class="container mx-auto px-4">
      <!-- Testimonials Slider -->
      <div class="relative max-w-6xl mx-auto">
        <swiper
          :modules="modules"
          :slides-per-view="1.5"
          :space-between="20"
          :centered-slides="true"
          :loop="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }"
          :pagination="{
            clickable: true,
            dynamicBullets: true,
          }"
          :navigation="false"
          :breakpoints="{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 15,
              centeredSlides: true
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 20,
              centeredSlides: true
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 25,
              centeredSlides: true
            },
            1280: {
              slidesPerView: 3.2,
              spaceBetween: 30,
              centeredSlides: true
            }
          }"
          class="testimonials-swiper"
        >
          <swiper-slide 
            v-for="testimonial in testimonials" 
            :key="testimonial.id"
          >
            <!-- Testimonial Card -->
            <div class="bg-white shadow-lg rounded-2xl p-6 h-full flex flex-col">
              <!-- Stars Rating -->
              <div class="flex mb-4">
                <span 
                  v-for="star in testimonial.rating" 
                  :key="star"
                  class="text-orange-400 text-xl mr-1"
                >
                  ★
                </span>
              </div>
              
              <!-- Review Text -->
              <blockquote class="text-gray-900 mb-6 leading-relaxed text-xl font-medium flex-grow">
                {{ testimonial.review }}
              </blockquote>
              
              <!-- Customer Info -->
              <div class="flex items-center mt-auto">
                <div class="flex-col items-center">
                  <div class="font-bold text-gray-900 text-sm mr-2">{{ testimonial.name }}</div>
                  <div class="flex items-center text-green-600">
                    <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span class="text-xs font-medium">Verified customer</span>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

// Use the testimonials composable
const { testimonials, fetchTestimonials } = useTestimonials()

// Swiper modules
const modules = [Autoplay, Pagination]

onMounted(async () => {
  await fetchTestimonials()
})
</script>
<style scoped>
.bg-color-testimonials{
    background-color:#f5f8f9;
}

/* Swiper pagination styling */
.testimonials-swiper :deep(.swiper-pagination) {
  bottom: -10px;
}

.testimonials-swiper :deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  background: #d1d5db;
  opacity: 1;
}

.testimonials-swiper :deep(.swiper-pagination-bullet-active) {
  background: #374151;
}

/* Ensure proper spacing for testimonial cards */
.testimonials-swiper {
  padding-bottom: 40px;
  overflow: visible;
}

/* Ensure equal height for all testimonial cards */
.testimonials-swiper .swiper-slide {
  height: auto;
  display: flex;
}

/* Add subtle opacity to non-active slides for preview effect */
.testimonials-swiper .swiper-slide:not(.swiper-slide-active) {
  opacity: 0.7;
  transform: scale(0.95);
  transition: all 0.3s ease;
}

.testimonials-swiper .swiper-slide.swiper-slide-active {
  opacity: 1;
  transform: scale(1);
  transition: all 0.3s ease;
}

/* Responsive adjustments for smaller screens */
@media (max-width: 768px) {
  .testimonials-swiper {
    padding-left: 10px;
    padding-right: 10px;
  }
  
  .testimonials-swiper .swiper-slide:not(.swiper-slide-active) {
    opacity: 0.6;
    transform: scale(0.9);
  }
}

/* Ensure container allows overflow for preview slides */
/* .testimonials-swiper .swiper-wrapper {
  align-items: stretch;
} */
 
</style>