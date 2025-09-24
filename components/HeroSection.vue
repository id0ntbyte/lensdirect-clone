<template>
  <section class="bg-gradient-to-r from-blue-50 to-blue-100 py-16 top-hero-section">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left content -->
        <div class="text-left">
          <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Give your frames<br>
            a fresh start
            <!-- <span class="text-blue-600">a fresh start</span> -->
          </h1>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            Replace your perscripttion lenses at a fraction of the cost of the retail cost.
          </p>
          <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-md text-lg transition-colors">
            Get Started
          </button>
        </div>
        
        <!-- Right image -->
        <!-- <div class="relative">
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="w-full h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
              <div class="text-center">
                <div class="text-8xl mb-4">👓</div>
                <div class="text-2xl mb-2">🧽</div>
                <p class="text-gray-600 text-sm">Cleaning glasses with microfiber cloth</p>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
    <!-- Guarantee Section -->
    <section class="">
      <div class="container-fluid px-4 py-2 mb-8 shadow-lg text-gray-600 text-sm font-semibold">
        <div class="flex items-center divide-x divide-gray-300">
          <div class="flex items-center space-x-2 px-4">
            <svg class="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span class="font-medium">Free Shipping & Returns</span>
          </div>
          
          <div class="flex items-center space-x-2 px-4">
            <svg class="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span class="font-medium">Legendary Service</span>
          </div>
          
          <div class="flex items-center space-x-2 px-4">
            <svg class="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span class="font-medium">Vision Insurance</span>
          </div>
          
          <div class="flex items-center space-x-2 px-4">
            <svg class="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span class="font-medium">100% Money Back Guarantee</span>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped>
  .top-hero-section {
    background-image: url('@/assets/images/hero-section-background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>