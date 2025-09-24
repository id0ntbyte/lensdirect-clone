// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  
  // Development
  devtools: { enabled: true },
  
  // Rendering
  ssr: false, // SPA mode as requested
  
  // Modules
  modules: [
    '@pinia/nuxt',
    '@nuxt/icon',
    '@nuxtjs/tailwindcss'
  ],
  
  // Pinia configuration
  pinia: {
    storesDirs: ['./stores/**']
  },
  
  // Tailwind CSS configuration
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js'
  },
  
  // App configuration
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'LensDirect',
      meta: [
        { name: 'description', content: 'Your trusted source for contact lenses, glasses, and eyewear accessories.' }
      ]
    }
  },
  
  // CSS
  css: [],
  
  // Auto-imports
  imports: {
    dirs: [
      'composables'
    ]
  },
  
  // Components auto-import
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  
  // Runtime config
  runtimeConfig: {
    // Private keys (only available on server-side)
    // apiSecret: process.env.API_SECRET,
    
    // Public keys (exposed to client-side)
    public: {
      apiBase: '/api'
    }
  },
  
  // Nitro configuration
  nitro: {
    experimental: {
      wasm: true
    }
  }
})