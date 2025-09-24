export const useTestimonials = () => {
  const productsStore = useProductsStore()
  
  const fetchTestimonials = async () => {
    await productsStore.fetchTestimonials()
  }
  
  // Computed properties
  const testimonials = computed(() => productsStore.testimonials)
  
  return {
    // Actions
    fetchTestimonials,
    
    // Computed
    testimonials
  }
}
