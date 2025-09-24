export default defineEventHandler(async (event) => {
  // Get query parameters
  const query = getQuery(event)
  const { category, search, minPrice, maxPrice, brand } = query
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300))
  
  const allProducts = [
    // Contact Lenses
    {
      id: 1,
      name: "Acuvue Oasys Daily",
      category: "contact-lenses",
      brand: "Acuvue",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.8,
      reviews: 1250,
      image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=300&h=300&fit=crop",
      description: "Daily disposable contact lenses with superior comfort and UV protection.",
      inStock: true,
      features: ["UV Protection", "Daily Disposable", "Silicone Hydrogel"]
    },
    {
      id: 2,
      name: "Biofinity Monthly",
      category: "contact-lenses",
      brand: "CooperVision",
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.6,
      reviews: 890,
      image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=300&h=300&fit=crop",
      description: "Monthly silicone hydrogel lenses for exceptional comfort all day long.",
      inStock: true,
      features: ["Monthly Wear", "Silicone Hydrogel", "High Oxygen Permeability"]
    },
    {
      id: 3,
      name: "Dailies Total 1",
      category: "contact-lenses",
      brand: "Alcon",
      price: 35.99,
      originalPrice: 45.99,
      rating: 4.9,
      reviews: 2100,
      image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=300&h=300&fit=crop",
      description: "Premium daily lenses with water gradient technology for ultimate comfort.",
      inStock: true,
      features: ["Water Gradient", "Daily Disposable", "Premium Comfort"]
    },
    
    // Glasses
    {
      id: 4,
      name: "Ray-Ban Aviator Classic",
      category: "glasses",
      brand: "Ray-Ban",
      price: 159.99,
      originalPrice: 199.99,
      rating: 4.7,
      reviews: 3450,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300&h=300&fit=crop",
      description: "Iconic aviator style glasses with premium lenses and durable frames.",
      inStock: true,
      features: ["Prescription Ready", "Anti-Glare Coating", "UV Protection"]
    },
    {
      id: 5,
      name: "Oakley Holbrook",
      category: "glasses",
      brand: "Oakley",
      price: 129.99,
      originalPrice: 169.99,
      rating: 4.5,
      reviews: 1890,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300&h=300&fit=crop",
      description: "Modern square frame design with superior optical clarity.",
      inStock: true,
      features: ["Impact Resistant", "Prescription Ready", "Lightweight"]
    },
    {
      id: 6,
      name: "Warby Parker Clark",
      category: "glasses",
      brand: "Warby Parker",
      price: 95.99,
      originalPrice: 125.99,
      rating: 4.6,
      reviews: 2340,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300&h=300&fit=crop",
      description: "Classic rectangular frames perfect for everyday wear.",
      inStock: true,
      features: ["Blue Light Blocking", "Prescription Ready", "Acetate Frame"]
    },
    
    // Sunglasses
    {
      id: 7,
      name: "Ray-Ban Wayfarer",
      category: "sunglasses",
      brand: "Ray-Ban",
      price: 149.99,
      originalPrice: 189.99,
      rating: 4.8,
      reviews: 5670,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop",
      description: "Timeless Wayfarer style with 100% UV protection.",
      inStock: true,
      features: ["100% UV Protection", "Polarized", "Classic Design"]
    },
    {
      id: 8,
      name: "Oakley Frogskins",
      category: "sunglasses",
      brand: "Oakley",
      price: 119.99,
      originalPrice: 149.99,
      rating: 4.4,
      reviews: 1230,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop",
      description: "Retro-inspired design with modern performance technology.",
      inStock: true,
      features: ["Impact Resistant", "Polarized", "Lightweight"]
    },
    {
      id: 9,
      name: "Maui Jim Peahi",
      category: "sunglasses",
      brand: "Maui Jim",
      price: 219.99,
      originalPrice: 279.99,
      rating: 4.9,
      reviews: 890,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop",
      description: "Premium polarized sunglasses with exceptional color enhancement.",
      inStock: true,
      features: ["PolarizedPlus2", "Color Enhancement", "Premium Materials"]
    },
    
    // Accessories
    {
      id: 10,
      name: "Lens Cleaning Kit",
      category: "accessories",
      brand: "LensDirect",
      price: 12.99,
      originalPrice: 19.99,
      rating: 4.3,
      reviews: 456,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop",
      description: "Complete cleaning kit with solution, microfiber cloth, and case.",
      inStock: true,
      features: ["Microfiber Cloth", "Cleaning Solution", "Storage Case"]
    },
    {
      id: 11,
      name: "Premium Glasses Case",
      category: "accessories",
      brand: "LensDirect",
      price: 8.99,
      originalPrice: 14.99,
      rating: 4.1,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop",
      description: "Durable hard case to protect your glasses from damage.",
      inStock: true,
      features: ["Hard Shell", "Compact Design", "Scratch Resistant"]
    },
    {
      id: 12,
      name: "Blue Light Blocking Clips",
      category: "accessories",
      brand: "LensDirect",
      price: 19.99,
      originalPrice: 29.99,
      rating: 4.0,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop",
      description: "Clip-on blue light filters for existing prescription glasses.",
      inStock: true,
      features: ["Blue Light Filter", "Clip-On Design", "Anti-Glare"]
    }
  ]
  
  let filteredProducts = [...allProducts]
  
  // Filter by category
  if (category && category !== 'all') {
    filteredProducts = filteredProducts.filter(product => product.category === category)
  }
  
  // Filter by search term
  if (search) {
    const searchTerm = search.toLowerCase()
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.brand.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
    )
  }
  
  // Filter by brand
  if (brand) {
    filteredProducts = filteredProducts.filter(product => product.brand === brand)
  }
  
  // Filter by price range
  if (minPrice) {
    filteredProducts = filteredProducts.filter(product => product.price >= parseFloat(minPrice))
  }
  if (maxPrice) {
    filteredProducts = filteredProducts.filter(product => product.price <= parseFloat(maxPrice))
  }
  
  return {
    success: true,
    data: filteredProducts,
    total: filteredProducts.length,
    filters: {
      categories: ['all', 'contact-lenses', 'glasses', 'sunglasses', 'accessories'],
      brands: ['Ray-Ban', 'Oakley', 'Acuvue', 'CooperVision', 'Alcon', 'Warby Parker', 'Maui Jim', 'LensDirect'],
      priceRange: { min: 8.99, max: 279.99 }
    }
  }
})
