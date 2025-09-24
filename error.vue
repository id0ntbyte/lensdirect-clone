<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="text-center">
        <h1 class="text-6xl font-bold text-gray-900 mb-4">{{ error.statusCode }}</h1>
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">
          {{ error.statusCode === 404 ? 'Page Not Found' : 'An Error Occurred' }}
        </h2>
        <p class="text-gray-600 mb-8">
          {{ error.statusMessage || 'Sorry, something went wrong.' }}
        </p>
        
        <div class="space-y-4">
          <NuxtLink
            to="/"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Go Home
          </NuxtLink>
          
          <button
            @click="handleError"
            class="block w-full text-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })

useSeoMeta({
  title: `${props.error?.statusCode} - Error | LensDirect`,
  description: 'An error occurred while loading the page.'
})
</script>
