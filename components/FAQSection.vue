<template>
  <section class="py-16 faq-bg-color">
    <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-gray-600">
            Get answers to the most common questions about our products and services.
          </p>
        </div>
        
        <!-- FAQ Items -->
        <div class="space-y-6">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="border-y border-dashed border-gray-100 rounded-lg"
          >
            <button 
              @click="toggleFAQ(index)"
              class="w-full px-6 py-4 text-left flex justify-between items-center transition-colors"
            >
              <span class="font-semibold text-gray-900 hover:underline">{{ faq.question }}</span>
              <svg 
                :class="{ 'rotate-180': openFAQ === index }"
                class="w-5 h-5 text-gray-500 transition-transform"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              v-if="openFAQ === index"
              class="px-6 pb-4 text-gray-600"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const openFAQ = ref(null)

const faqs = [
  {
    question: "Why buy contact lenses online?",
    answer: "Buying contact lenses online offers convenience, better prices, and a wider selection. You can order from home and have them delivered directly to your door."
  },
  {
    question: "How often should I replace my contact lenses?",
    answer: "It depends on the type of lenses you have. Daily lenses should be replaced every day, weekly lenses every week, and monthly lenses every month."
  },
  {
    question: "Can I order contacts without a prescription?",
    answer: "No, contact lenses are medical devices that require a valid prescription from an eye care professional. We verify all prescriptions before shipping."
  },
  {
    question: "What if I need to return my contact lenses?",
    answer: "We offer a 30-day return policy on unopened contact lens boxes. If you're not satisfied, you can return them for a full refund."
  },
  {
    question: "How long does shipping take?",
    answer: "Most orders ship within 1-2 business days. Standard shipping takes 3-5 business days, and expedited shipping options are available."
  },
  {
    question: "Why are glasses online less expensive?",
    answer: "Online retailers have lower overhead costs than traditional brick-and-mortar stores, allowing us to offer the same quality products at significantly lower prices."
  },
  {
    question: "Can I use my insurance to pay for my order?",
    answer: "We accept most vision insurance plans. You can submit your receipt to your insurance company for reimbursement, or we can bill them directly in some cases."
  }
]

const toggleFAQ = (index) => {
  openFAQ.value = openFAQ.value === index ? null : index
}
</script>

<style scoped>
.faq-bg-color {
  background-color: #f5f8f9;
}
</style>