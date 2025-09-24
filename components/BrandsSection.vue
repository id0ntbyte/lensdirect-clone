<template>
  <section class="py-12 bg-white">
    <div class="container-fluid mx-auto px-4">
      <div class="text-start mb-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-2">Every brand of contacts</h2>
        <p class="text-gray-600">We carry all the major contact lens brands</p>
      </div>
      
      <div class="flex flex-wrap justify-start items-center gap-3 lg:gap-5">
        <div 
          v-for="brand in brands" 
          :key="brand.name"
          class="flex rounded-md items-center justify-center opacity-100 hover:opacity-60 transition-opacity border border-2 p-2"
        >
          <span class="text-xl font-bold text-black">{{ brand.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const brands = [
  { name: 'ACUVUE' },
  { name: 'AIR OPTIX' },
  { name: 'BIOFINITY' },
  { name: 'DAILIES' },
  { name: 'PROCLEAR' },
  { name: 'CLARITI' },
  { name: 'SOFLENS' }
]
</script>
