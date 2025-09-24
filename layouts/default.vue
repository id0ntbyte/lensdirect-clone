<template>
  <div class="min-h-screen bg-white">
    <NuxtRouteAnnouncer />
    
    <!-- Header -->
    <AppHeader />
    
    <!-- Main Content -->
    <main>
      <slot />
    </main>
    
    <!-- Footer -->
    <AppFooter />
    
    <!-- Shopping Cart -->
    <ShoppingCart />
  </div>
</template>

<script setup>
// Layout-level setup
// Any layout-specific logic can go here
</script>
