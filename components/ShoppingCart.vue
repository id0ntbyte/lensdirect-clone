<template>
  <!-- Cart Overlay -->
  <div 
    v-if="cartStore.isOpen"
    class="fixed inset-0 z-50 overflow-hidden"
    @click="cartStore.closeCart()"
  >
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    
    <!-- Cart Panel -->
    <div 
      class="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl"
      @click.stop
    >
      <!-- Cart Header -->
      <div class="flex items-center justify-between p-4 border-b">
        <h2 class="text-lg font-semibold">Shopping Cart</h2>
        <button 
          @click="cartStore.closeCart()"
          class="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          ❌
        </button>
      </div>

      <!-- Cart Items -->
      <div class="flex-1 overflow-y-auto p-4">
        <div v-if="cartStore.items.length === 0" class="text-center py-12">
          <div class="text-6xl mb-4">🛒</div>
          <p class="text-gray-500 mb-4">Your cart is empty</p>
          <button 
            @click="cartStore.closeCart()"
            class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Continue Shopping
          </button>
        </div>

        <div v-else class="space-y-4">
          <div 
            v-for="item in cartStore.items" 
            :key="item.id"
            class="flex items-center space-x-3 p-3 border rounded-lg"
          >
            <!-- Product Image -->
            <div class="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded flex items-center justify-center text-2xl">
              {{ getProductEmoji(item.category) }}
            </div>
            
            <!-- Product Info -->
            <div class="flex-1 min-w-0">
              <h3 class="font-medium text-sm truncate">{{ item.name }}</h3>
              <p class="text-gray-500 text-xs">{{ item.brand }}</p>
              <p class="font-semibold text-primary-600">${{ item.price.toFixed(2) }}</p>
            </div>
            
            <!-- Quantity Controls -->
            <div class="flex items-center space-x-2">
              <button 
                @click="updateQuantity(item.id, item.quantity - 1)"
                class="w-6 h-6 flex items-center justify-center bg-gray-100 rounded hover:bg-gray-200 transition-colors"
                :disabled="item.quantity <= 1"
              >
                ➖
              </button>
              
              <span class="w-8 text-center text-sm">{{ item.quantity }}</span>
              
              <button 
                @click="updateQuantity(item.id, item.quantity + 1)"
                class="w-6 h-6 flex items-center justify-center bg-gray-100 rounded hover:bg-gray-200 transition-colors"
              >
                ➕
              </button>
            </div>
            
            <!-- Remove Button -->
            <button 
              @click="cartStore.removeFromCart(item.id)"
              class="p-1 text-red-500 hover:bg-red-50 rounded transition-colors"
            >
              🗑️
            </button>
          </div>
        </div>
      </div>

      <!-- Cart Footer -->
      <div v-if="cartStore.items.length > 0" class="border-t p-4 space-y-4">
        <!-- Totals -->
        <div class="space-y-2">
          <div class="flex justify-between text-sm">
            <span>Subtotal ({{ cartStore.totalItems }} items):</span>
            <span>${{ cartStore.totalPrice.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between text-sm text-gray-500">
            <span>Shipping:</span>
            <span>{{ cartStore.totalPrice >= 75 ? 'FREE' : '$5.99' }}</span>
          </div>
          <div class="flex justify-between font-semibold text-lg border-t pt-2">
            <span>Total:</span>
            <span>${{ (cartStore.totalPrice + (cartStore.totalPrice >= 75 ? 0 : 5.99)).toFixed(2) }}</span>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="space-y-2">
          <button class="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
            Proceed to Checkout
          </button>
          <button 
            @click="cartStore.closeCart()"
            class="w-full border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Continue Shopping
          </button>
        </div>

        <!-- Free shipping notice -->
        <div v-if="cartStore.totalPrice < 75" class="text-xs text-center text-gray-500">
          Add ${{ (75 - cartStore.totalPrice).toFixed(2) }} more for free shipping!
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cartStore = useCartStore()

const updateQuantity = (productId, quantity) => {
  cartStore.updateQuantity(productId, quantity)
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