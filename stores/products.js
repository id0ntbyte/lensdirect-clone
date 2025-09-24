export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
    testimonials: [],
    loading: false,
    error: null,
    filters: {
      category: 'all',
      search: '',
      brand: '',
      minPrice: null,
      maxPrice: null
    }
  }),
  
  getters: {
    filteredProducts: (state) => {
      return state.products.filter(product => {
        // Category filter
        if (state.filters.category !== 'all' && product.category !== state.filters.category) {
          return false
        }
        
        // Search filter
        if (state.filters.search) {
          const searchTerm = state.filters.search.toLowerCase()
          if (!product.name.toLowerCase().includes(searchTerm) &&
              !product.brand.toLowerCase().includes(searchTerm) &&
              !product.description.toLowerCase().includes(searchTerm)) {
            return false
          }
        }
        
        // Brand filter
        if (state.filters.brand && product.brand !== state.filters.brand) {
          return false
        }
        
        // Price filters
        if (state.filters.minPrice && product.price < state.filters.minPrice) {
          return false
        }
        if (state.filters.maxPrice && product.price > state.filters.maxPrice) {
          return false
        }
        
        return true
      })
    }
  },
  
  actions: {
    async fetchProducts() {
      this.loading = true
      this.error = null
      
      try {
        const response = await $fetch('/api/products', {
          query: this.filters
        })
        
        if (response.success) {
          this.products = response.data || []
        }
      } catch (error) {
        this.error = error.message
        console.error('Error fetching products:', error)
      } finally {
        this.loading = false
      }
    },
    
    async fetchTestimonials() {
      try {
        const response = await $fetch('/api/testimonials')
        if (response.success) {
          this.testimonials = response.data || []
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error)
      }
    },
    
    setFilter(filterType, value) {
      this.filters[filterType] = value
      this.fetchProducts()
    },
    
    clearFilters() {
      this.filters = {
        category: 'all',
        search: '',
        brand: '',
        minPrice: null,
        maxPrice: null
      }
      this.fetchProducts()
    },
    
    searchProducts(searchTerm) {
      this.filters.search = searchTerm
      this.fetchProducts()
    }
  }
})