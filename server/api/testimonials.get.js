export default defineEventHandler(async (event) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  
  return {
    success: true,
    data: [
      {
        id: 1,
        name: "Sarah Johnson",
        rating: 5,
        review: "Amazing service! Got my contact lenses delivered super fast and the quality is outstanding. Will definitely order again!",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        date: "2024-03-15"
      },
      {
        id: 2,
        name: "Michael Chen",
        rating: 5,
        review: "Best prices I've found online for designer glasses. The prescription was perfect and shipping was incredibly fast.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        date: "2024-03-10"
      },
      {
        id: 3,
        name: "Emily Rodriguez",
        rating: 4,
        review: "Great selection of sunglasses! Found exactly what I was looking for at a fraction of retail price. Highly recommended!",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        date: "2024-03-08"
      },
      {
        id: 4,
        name: "David Thompson",
        rating: 5,
        review: "Customer service is top-notch. Had an issue with my order and they resolved it immediately. Very professional team!",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        date: "2024-03-05"
      },
      {
        id: 5,
        name: "Lisa Park",
        rating: 5,
        review: "Love the virtual try-on feature! Made it so easy to pick the perfect frames. The quality exceeded my expectations.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        date: "2024-03-01"
      }
    ]
  }
})
