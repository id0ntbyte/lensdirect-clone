<template>
  <header class="bg-white shadow-sm">
    <!-- Top promotional bar -->
    <div class="bg-blue-900 text-white py-4">
      <div class="container mx-auto px-4">
        <div class="flex items-center text-sm relative">
          <!-- Spacer for left side -->
          <div class="flex-1"></div>
          
          <!-- Center - Promotional message -->
          <div class="flex items-center space-x-2 absolute left-1/2 transform -translate-x-1/2">
            <span class="text-orange-400">🍂</span>
            <span class="font-medium">Fall Sale</span>
            <span class="text-orange-400">|</span>
            <span class="font-bold">FALL25</span>
            <span class="text-orange-400">|</span>
            <a href="#" class="underline hover:text-orange-200 transition-colors">Learn More</a>
          </div>
          
          <!-- Right side - Account links -->
          <div class="flex items-center space-x-2 text-sm ml-auto">
            <a href="#" class="hover:text-orange-200 transition-colors">Reorder Contacts</a>
            <span class="text-blue-300">|</span>
            <a href="#" class="hover:text-orange-200 transition-colors">Help</a>
            <span class="text-blue-300">|</span>
            <div class="relative group">
              <button class="hover:text-orange-200 transition-colors flex items-center">
                My Account
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Combined main header and navigation -->
    <div class="container-fluid mx-auto px-16 py-4">
      <div class="flex items-center justify-between gap-4">
        <!-- Logo -->
        <div class="flex items-center flex-shrink-0">
          <h1 class="text-2xl lg:text-3xl font-bold text-blue-600">LensDirect</h1>
        </div>

        <!-- Navigation menu -->
        <nav class="hidden lg:flex items-center space-x-4 xl:space-x-6">
          <button 
            v-for="item in navItems" 
            :key="item.name"
            @click="handleNavClick(item.slug)"
            class="text-gray-700 hover:text-blue-600 font-medium py-2 px-2 xl:px-3 transition-colors relative group text-sm xl:text-base whitespace-nowrap"
          >
            {{ item.name }}
            <div class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </button>
        </nav>

        <!-- Search bar and icons -->
        <div class="flex items-center space-x-2 lg:space-x-3">
          <!-- Search bar -->
          <div class="relative">
            <input
              v-model="searchQuery"
              @keyup.enter="handleSearch"
              type="text"
              placeholder="I'm searching for..."
              class="w-48 lg:w-64 xl:w-80 px-3 py-2 pl-8 pr-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            >
            <div class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
              <svg class="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          <!-- Heart icon -->
          <button class="p-1.5 lg:p-2 text-gray-600 hover:text-blue-600 flex-shrink-0">
            <svg class="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          
          <!-- Cart icon -->
          <button 
            @click="cartStore.toggleCart()"
            class="relative p-1.5 lg:p-2 text-gray-600 hover:text-blue-600 flex-shrink-0"
          >
            <svg class="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h10.5" />
            </svg>
            <span 
              v-if="cartStore.totalItems > 0"
              class="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
            >
              {{ cartStore.totalItems }}
            </span>
          </button>
          
          <!-- Mobile menu button (for smaller screens) -->
          <button class="lg:hidden p-2 text-gray-600 hover:text-blue-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const cartStore = useCartStore()
const productsStore = useProductsStore()
const searchQuery = ref('')

const navItems = [
  { name: 'Contact Lenses', slug: 'contact-lenses' },
  { name: 'Glasses', slug: 'glasses' },
  { name: 'Sunglasses', slug: 'sunglasses' },
  { name: 'Lens Replacement', slug: 'lens-replacement' },
  { name: 'Accessories', slug: 'accessories' }
]

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    productsStore.searchProducts(searchQuery.value.trim())
  }
}

const handleNavClick = (slug) => {
  productsStore.setFilter('category', slug)
}
</script>