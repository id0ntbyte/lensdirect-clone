<template>
  <footer class="bg-gray-900 text-white">
    <div class="container-fluid mx-auto py-12 px-4 bg-white">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <!-- Newsletter signup -->
    <div class="bg-gray-100 text-black py-8">
      <div class="container mx-auto px-4 rounded-lg">
        <div class="max-w-4xl mx-auto text-center">
          <h3 class="text-2xl font-extrabold mb-2">Become an Insider</h3>
          <p class="text-black mb-6">Exclusive promotions, special offers and more</p>
          <div class="flex flex-col sm:flex-row gap-y-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              class="flex-1 px-4 py-3  text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
            <button class="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3  transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- App download section -->
    <div class="bg-gray-100 text-black py-8 rounded-lg">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h3 class="text-2xl font-extrabold mb-2">Get the app</h3>
          <p class="text-black-300 mb-6">The ultimate way to shop and manage your vision care</p>
          <div class="flex justify-center gap-4">
            <div class="bg-black rounded-lg px-4 py-2 flex items-center space-x-2">
              <span class="text-2xl"></span>
              <div class="text-center">
                <div class="text-sm text-gray-300">Download on the</div>
                <div class="text-sm text-white font-semibold">App Store</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div> 
  </div>

    <!-- Main footer content -->
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company -->
        <div>
          <h4 class="text-2xl font-extrabold mb-4">Shop</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-300 hover:text-white transition-colors text-sm">Contact Lenses</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white transition-colors text-sm">Glasses</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white transition-colors text-sm">Sunglasses</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white transition-colors text-sm">DIY Lens Replacement</a></li>
          </ul>
        </div>

        <!-- Customer Service -->
        <div>
          <h4 class="text-2xl font-extrabold mb-4">Guides & Resources</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-300 hover:text-white transition-colors text-sm">Blog</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white transition-colors text-sm">Lens Direct App</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white transition-colors text-sm">Download PD Rules</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white transition-colors text-sm">Face Shape Guide</a></li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h4 class="text-2xl font-extrabold mb-4">Support</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-300 hover:text-white transition-colors text-sm">Frequently Asked Questions</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white transition-colors text-sm">My Account</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white transition-colors text-sm">Return Policy</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white transition-colors text-sm">Warranty</a></li>
          </ul>
        </div>

        <!-- Programs -->
        <div>
          <h4 class="text-2xl font-extrabold mb-4">Programs</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-300 hover:text-white transition-colors text-sm">Rewards Program</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white transition-colors text-sm">Affiliate Program</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white transition-colors text-sm">Incfluencer Program</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white transition-colors text-sm">Subscribe and Save</a></li>
          </ul>
        </div>

        <!-- Lens Replacement -->
      </div>
    </div>

    <!-- Payment methods and certifications -->
    <div class="border-t border-gray-800 py-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center items-center gap-6 opacity-60">
          <span class="text-sm">Visa</span>
          <span class="text-sm">Mastercard</span>
          <span class="text-sm">American Express</span>
          <span class="text-sm">PayPal</span>
          <span class="text-sm">Apple Pay</span>
          <span class="text-sm">Google Pay</span>
        </div>
      </div>
    </div>

    <!-- Bottom footer -->
    <div class=" py-6">
      <div class="container-fluid mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 items-center">
          <!-- Left side - Links -->
          <div class="flex flex-wrap justify-center md:justify-start gap-6 mb-4 md:mb-0">
            <a href="#" class="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <span class="text-gray-500">|</span>
            <a href="#" class="text-gray-300 hover:text-white transition-colors text-sm">Terms & Conditions</a>
          </div>
          
          <!-- Center - LensDirect Logo -->
          <div class="flex justify-center mb-4 md:mb-0">
            <div class="text-2xl font-bold text-white">LensDirect</div>
          </div>
          
          <!-- Right side - Social Media Icons -->
          <div class="flex justify-center md:justify-end space-x-4">
            <!-- Facebook -->
            <a href="#" class="text-gray-300 hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            
            <!-- X (Twitter) -->
            <a href="#" class="text-gray-300 hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            <!-- Pinterest -->
            <a href="#" class="text-gray-300 hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.1.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </a>
            
            <!-- TikTok -->
            <a href="#" class="text-gray-300 hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>