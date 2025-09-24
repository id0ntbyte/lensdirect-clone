<template>
  <div class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
    <!-- Product Image -->
    <div class="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
      <div class="text-4xl">{{ getProductEmoji(product.category) }}</div>
      
      <!-- Sale badge -->
      <div 
        v-if="product.originalPrice > product.price" 
        class="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded"
      >
        SAVE ${{ (product.originalPrice - product.price).toFixed(2) }}
      </div>
      
      <!-- Wishlist button -->
      <button class="absolute top-2 right-2 p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-colors">
        ❤️
      </button>
    </div>
    
    <!-- Product Info -->
    <div class="p-4 space-y-2">
      <!-- Brand -->
      <p class="text-sm text-gray-500 font-medium">{{ product.brand }}</p>
      
      <!-- Product Name -->
      <h3 class="font-semibold text-gray-900 hover:text-primary-600 transition-colors line-clamp-2">
        {{ product.name }}
      </h3>
      
      <!-- Rating -->
      <div class="flex items-center space-x-1">
        <div class="flex">
          <span 
            v-for="star in 5" 
            :key="star"
            :class="star <= Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'"
          >
            ⭐
          </span>
        </div>
        <span class="text-sm text-gray-500">({{ product.reviews }})</span>
      </div>
      
      <!-- Features -->
      <div class="flex flex-wrap gap-1">
        <span 
          v-for="feature in product.features?.slice(0, 2)" 
          :key="feature"
          class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
        >
          {{ feature }}
        </span>
      </div>
      
      <!-- Price -->
      <div class="flex items-center space-x-2">
        <span class="text-lg font-bold text-primary-600">${{ product.price.toFixed(2) }}</span>
        <span 
          v-if="product.originalPrice > product.price" 
          class="text-sm text-gray-500 line-through"
        >
          ${{ product.originalPrice.toFixed(2) }}
        </span>
      </div>
      
      <!-- Stock status -->
      <div class="flex items-center space-x-2">
        <div 
          :class="product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
          class="text-xs font-medium px-2 py-1 rounded-full"
        >
          {{ product.inStock ? '✅ In Stock' : '❌ Out of Stock' }}
        </div>
      </div>
    </div>
    
    <!-- Add to Cart Button -->
    <div class="p-4 pt-0">
      <button 
        @click="addToCart"
        :disabled="!product.inStock"
        :class="product.inStock ? 'bg-primary-600 hover:bg-primary-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'"
        class="w-full py-2 px-4 rounded-lg font-semibold transition-colors"
      >
        {{ product.inStock ? 'Add to Cart' : 'Out of Stock' }}
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()

const addToCart = () => {
  if (props.product.inStock) {
    cartStore.addToCart(props.product)
    // You could add a toast notification here
  }
}

const getProductEmoji = (category) => {
  const emojis = {
    'contact-lenses': '👁️',
    'glasses': '👓',
    'sunglasses': '🕶️',
    'accessories': '⚙️'
  }
  return emojis[category] || '📦'
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>