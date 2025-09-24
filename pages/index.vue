<template>
  <div>
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Brands Section -->
    <BrandsSection />
    
    <!-- Product Categories -->
    <ProductCategories />
    
    <!-- Testimonials -->
    <TestimonialsSection />
    
    <!-- Promotional Banners -->
    <PromotionalBanners />
    
    <!-- Vision Care Services -->
    <VisionCareSection />
    
    <!-- Family Business -->
    <FamilyBusinessSection />
    
    <!-- Customer Quote -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 text-center">
        <blockquote class="text-2xl lg:text-5xl font-bold text-gray-900 mb-4">
          "I finally ordered contacts online and OMG! I'm never going back to a store."
        </blockquote>
        <div class="flex justify-center items-center space-x-8 opacity-60 mt-5">
          <span class="text-lg font-semibold">LensCrafters</span>
          <span class="text-lg font-semibold">Warby Parker</span>
          <span class="text-lg font-semibold">Pearle Vision</span>
          <span class="text-lg font-semibold">LensDirect</span>
        </div>
      </div>
    </section>
    
    <!-- FAQ Section -->
    <FAQSection />
  </div>
</template>

<script setup>
// Page-specific meta
useSeoMeta({
  title: 'LensDirect - Contact Lenses, Glasses & Sunglasses at Unbeatable Prices',
  ogTitle: 'LensDirect - Your Trusted Eyewear Destination',
  description: 'Shop premium contact lenses, prescription glasses, sunglasses, and accessories at LensDirect. Fast shipping, authentic products, and unbeatable prices guaranteed.',
  ogDescription: 'Discover premium eyewear at unbeatable prices. Contact lenses, glasses, sunglasses & more with fast, free shipping.',
  keywords: 'contact lenses, glasses, sunglasses, prescription lenses, eyewear, vision care',
  ogType: 'website'
})

// Initialize data on page load
await callOnce(async () => {
  const productsStore = useProductsStore()
  await Promise.all([
    productsStore.fetchProducts(),
    productsStore.fetchTestimonials()
  ])
})
</script>
