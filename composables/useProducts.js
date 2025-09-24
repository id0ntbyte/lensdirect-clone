export const useProducts = () => {
  const productsStore = useProductsStore()
  
  const fetchProducts = async (filters) => {
    await productsStore.fetchProducts()
  }
  
  const searchProducts = (searchTerm) => {
    productsStore.searchProducts(searchTerm)
  }
  
  const setFilter = (filterType, value) => {
    productsStore.setFilter(filterType, value)
  }
  
  const clearFilters = () => {
    productsStore.clearFilters()
  }
  
  // Computed properties
  const products = computed(() => productsStore.products)
  const filteredProducts = computed(() => productsStore.filteredProducts)
  const loading = computed(() => productsStore.loading)
  const error = computed(() => productsStore.error)
  const filters = computed(() => productsStore.filters)
  
  return {
    // Actions
    fetchProducts,
    searchProducts,
    setFilter,
    clearFilters,
    
    // Computed
    products,
    filteredProducts,
    loading,
    error,
    filters
  }
}
