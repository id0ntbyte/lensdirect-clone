<template>
  <section class="py-16 bg-white">
    <div class="container-fluid mx-auto px-4">
      <!-- Main product grid - 2x2 layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <!-- Contact Lenses - Top Left -->
        <div class="bg-gradient-to-br from-gray-200 via-gray-100 to-gray-50 rounded-xl overflow-hidden relative h-72 shadow-md">
            <div class="absolute inset-0 p-8 flex justify-between items-center">
                <div class="flex-1">
              <!-- Placeholder for eyewear images -->
              <div class="relative">
                <img class="max-w-full h-auto" src="https://placehold.co/200x200">
                <!-- <div class="w-32 h-20 bg-gray-300 rounded-lg opacity-80 transform rotate-12"></div>
                <div class="w-32 h-20 bg-gray-400 rounded-lg absolute top-4 left-4 transform -rotate-6"></div>
                <div class="w-32 h-20 bg-gray-500 rounded-lg absolute top-8 left-8"></div> -->
              </div>
            </div>
            <div class="flex-1 justify-end items-center">
              <h2 class="text-2xl font-extrabold text-gray-800 mb-2">Contact Lenses</h2>
              <p class="text-gray-600 text-md mb-6">Skip the doctor's office, and save up to 40% on your contacts</p>
              <div class="flex gap-3">
                <button class="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded font-semibold transition-colors">
                  Shop Now
                </button>
                <button class="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-6 py-3 rounded font-semibold transition-colors">
                  Reorder
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Eyewear - Top Right -->
        <div class="e-wear-bg rounded-xl overflow-hidden relative h-72">
          <div class="absolute inset-0 p-8 flex justify-between items-center">
            <div class="flex-1">
              <h3 class="text-2xl font-extrabold text-gray-800 mb-2">Eyewear</h3>
              <p class="text-gray-600 text-md mb-6">Stylish frames with high-quality, customizable lenses tailored to you</p>
              <div class="flex gap-3">
                <button class="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded font-semibold transition-colors">
                  Eyeglasses
                </button>
                <button class="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-6 py-3 rounded font-semibold transition-colors">
                  Sunglasses
                </button>
              </div>
            </div>
            <div class="flex-1 flex justify-end items-center me-4">
              <!-- Placeholder for eyewear images -->
              <div class="relative">
                <div class="w-32 h-20 bg-gray-300 rounded-lg opacity-80 transform rotate-12"></div>
                <div class="w-32 h-20 bg-gray-400 rounded-lg absolute top-4 left-4 transform -rotate-6"></div>
                <div class="w-32 h-20 bg-gray-500 rounded-lg absolute top-8 left-8"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Prescription Lens Replacement - Bottom Left -->
        <div class="p-lens-bg rounded-xl overflow-hidden relative h-72">
          <div class="absolute inset-0 p-8 flex justify-between items-center">
            <div class="flex-1 order-2">
              <h3 class="text-2xl font-extrabold text-gray-800 mb-2">Prescription Lens Replacement</h3>
              <p class="text-gray-600 text-md mb-6">Upgrade your favorite frames with new, high-quality prescription lenses</p>
              <button class="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded font-semibold transition-colors">
                Get Started
              </button>
            </div>
            <div class="flex-1 flex justify-start items-center order-1">
              <!-- Placeholder for lens replacement imagery -->
              <div class="relative">
                <div class="w-24 h-24 border-4 border-gray-400 rounded-full opacity-60"></div>
                <div class="w-20 h-20 border-4 border-gray-500 rounded-full absolute top-2 left-2 opacity-80"></div>
                <div class="w-16 h-16 bg-gray-600 rounded-full absolute top-4 left-4"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- DIY Sunglass Lens Replacement - Bottom Right -->
        <div class="diy-sunglass-bg rounded-xl overflow-hidden relative h-72">
          <div class="absolute inset-0 p-8 flex justify-between items-center">
            <div class="flex-1">
              <h3 class="text-2xl font-extrabold text-gray-800 mb-2">DIY Sunglass Lens Replacement</h3>
              <p class="text-gray-600 text-md mb-2">Easy to install, premium non-Rx sunglass lenses for <strong class="underline">Ray-Ban</strong>, <strong class="underline">Oakley</strong>, and more shipped to your door</p>
              <button class="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded font-semibold transition-colors mt-4">
                Find Your Lenses
              </button>
            </div>
            <div class="flex-1 flex justify-end items-center">
              <!-- Placeholder for hand holding sunglasses -->
              <div class="relative">
                <div class="w-20 h-24 bg-pink-300 rounded-full opacity-70 transform rotate-12"></div>
                <div class="w-16 h-6 bg-gray-800 rounded absolute top-8 left-2 transform -rotate-12"></div>
                <div class="w-2 h-2 bg-blue-400 rounded-full absolute top-9 left-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const productsStore = useProductsStore()

const handleCategoryClick = (categorySlug) => {
  productsStore.setFilter('category', categorySlug)
}
</script>

<style scoped>
.e-wear-bg{
    background-color:#e6e6e8;
}
.p-lens-bg{
    background-color:#d8e3e9;
}
.diy-sunglass-bg{
    background-color:#eddbd9;
}
</style>