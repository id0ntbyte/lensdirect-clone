export const useCart = () => {
  const cartStore = useCartStore()
  
  const addToCart = (product, quantity = 1) => {
    cartStore.addToCart(product, quantity)
    
    // Show success notification (you could use a toast library here)
    console.log(`Added ${product.name} to cart`)
  }
  
  const removeFromCart = (productId) => {
    cartStore.removeFromCart(productId)
  }
  
  const updateQuantity = (productId, quantity) => {
    cartStore.updateQuantity(productId, quantity)
  }
  
  const clearCart = () => {
    cartStore.clearCart()
  }
  
  const toggleCart = () => {
    cartStore.toggleCart()
  }
  
  // Computed properties
  const totalItems = computed(() => cartStore.totalItems)
  const totalPrice = computed(() => cartStore.totalPrice)
  const cartItems = computed(() => cartStore.items)
  const isCartOpen = computed(() => cartStore.isOpen)
  
  return {
    // Actions
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart,
    
    // Computed
    totalItems,
    totalPrice,
    cartItems,
    isCartOpen
  }
}
