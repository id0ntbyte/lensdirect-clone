<template>
  <section id="products-section" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Featured Products
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our best-selling contact lenses, glasses, and accessories at unbeatable prices.
        </p>
      </div>
      
      <!-- Quick Filters -->
      <div class="flex flex-wrap justify-center gap-4 mb-8">
        <button 
          v-for="filter in quickFilters"
          :key="filter.value"
          @click="setQuickFilter(filter.value)"
          :class="productsStore.filters.category === filter.value ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
          class="px-6 py-2 rounded-full transition-colors"
        >
          {{ filter.label }}
        </button>
      </div>
      
      <!-- Loading State -->
      <div v-if="productsStore.loading" class="text-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
        <p class="text-gray-600">Loading products...</p>
      </div>
      
      <!-- Error State -->
      <div v-else-if="productsStore.error" class="text-center py-12">
        <div class="text-6xl mb-4">⚠️</div>
        <p class="text-red-600">Failed to load products. Please try again later.</p>
        <button @click="productsStore.fetchProducts()" class="mt-4 btn-primary">
          Retry
        </button>
      </div>
      
      <!-- Products Grid -->
      <div v-else-if="productsStore.products.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <ProductCard 
          v-for="product in productsStore.products.slice(0, 8)" 
          :key="product.id"
          :product="product"
        />
      </div>
      
      <!-- No Products Found -->
      <div v-else class="text-center py-12">
        <div class="text-6xl mb-4">📦</div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
        <p class="text-gray-600 mb-4">Try adjusting your filters to see more products.</p>
        <button @click="productsStore.clearFilters()" class="btn-primary">
          Show All Products
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const productsStore = useProductsStore()

const quickFilters = [
  { label: 'All Products', value: 'all' },
  { label: 'Contact Lenses', value: 'contact-lenses' },
  { label: 'Glasses', value: 'glasses' },
  { label: 'Sunglasses', value: 'sunglasses' },
  { label: 'Accessories', value: 'accessories' }
]

const setQuickFilter = (category) => {
  productsStore.setFilter('category', category)
}
</script>