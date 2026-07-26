<template>
  <div class="min-h-screen py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold mb-4">Great Books Programs</h1>
        <p class="text-gray-400 max-w-2xl mx-auto">Explore the foundational programs that guide classical education</p>
      </div>

      <!-- Program Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <!-- Great Books Program -->
        <div class="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-xl p-8 backdrop-blur-sm border border-gray-700 transform transition-all duration-500 hover:scale-105">
          <div class="flex items-start space-x-6">
            <div class="flex-shrink-0">
              <div class="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <i class="fas fa-graduation-cap text-white text-2xl"></i>
              </div>
            </div>
            <div>
              <h2 class="text-2xl font-bold mb-4">Great Books Program</h2>
              <p class="text-gray-300 mb-6">
                The Great Books Program is a curriculum designed to introduce students to the great works of Western civilization through a Socratic method of discussion and analysis. This program emphasizes the importance of reading original texts and engaging in thoughtful dialogue.
              </p>
              <div class="flex items-center space-x-4">
                <div class="flex items-center">
                  <i class="fas fa-book text-blue-400 mr-2"></i>
                  <span class="text-sm">100+ books</span>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-users text-purple-400 mr-2"></i>
                  <span class="text-sm">Socratic discussions</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 1000 Good Books Program -->
        <div class="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl p-8 backdrop-blur-sm border border-gray-700 transform transition-all duration-500 hover:scale-105">
          <div class="flex items-start space-x-6">
            <div class="flex-shrink-0">
              <div class="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <i class="fas fa-star text-white text-2xl"></i>
              </div>
            </div>
            <div>
              <h2 class="text-2xl font-bold mb-4">John Senior's 1000 Good Books</h2>
              <p class="text-gray-300 mb-6">
                John Senior's 1000 Good Books is a comprehensive list of the finest books in English literature and philosophy, carefully curated to provide a broad and deep reading experience. This program emphasizes the cultivation of taste and judgment in literature.
              </p>
              <div class="flex items-center space-x-4">
                <div class="flex items-center">
                  <i class="fas fa-book text-purple-400 mr-2"></i>
                  <span class="text-sm">1000 books</span>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-trophy text-pink-400 mr-2"></i>
                  <span class="text-sm">Literary excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Timeline Section -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold text-center mb-12">Program Evolution</h2>
        
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          <div class="space-y-12">
            <!-- 1960s: Great Books Program Founded -->
            <div class="relative flex items-center">
              <div class="w-1/2 pr-8 text-right">
                <div class="bg-gray-800 bg-opacity-60 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
                  <div class="text-blue-400 font-bold mb-2">1960s</div>
                  <h3 class="text-xl font-semibold mb-2">Great Books Program Founded</h3>
                  <p class="text-gray-400">The Great Books Program was established, emphasizing the importance of reading original texts and engaging in philosophical discussion.</p>
                </div>
              </div>
              <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-900"></div>
              <div class="w-1/2 pl-8"></div>
            </div>
            
            <!-- 1980s: John Senior's Contribution -->
            <div class="relative flex items-center">
              <div class="w-1/2 pr-8"></div>
              <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-gray-900"></div>
              <div class="w-1/2 pl-8 text-left">
                <div class="bg-gray-800 bg-opacity-60 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
                  <div class="text-purple-400 font-bold mb-2">1980s</div>
                  <h3 class="text-xl font-semibold mb-2">John Senior's 1000 Good Books</h3>
                  <p class="text-gray-400">John Senior compiled his list of 1000 Good Books, providing a comprehensive guide to literary excellence in English.</p>
                </div>
              </div>
            </div>
            
            <!-- 2000s: Modern Integration -->
            <div class="relative flex items-center">
              <div class="w-1/2 pr-8 text-right">
                <div class="bg-gray-800 bg-opacity-60 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
                  <div class="text-pink-400 font-bold mb-2">2000s</div>
                  <h3 class="text-xl font-semibold mb-2">Modern Integration</h3>
                  <p class="text-gray-400">Digital platforms began to integrate these programs, making classic literature more accessible to new generations.</p>
                </div>
              </div>
              <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-pink-500 rounded-full border-4 border-gray-900"></div>
              <div class="w-1/2 pl-8"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Resources Section -->
      <div>
        <h2 class="text-3xl font-bold text-center mb-12">Program Resources</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gray-800 bg-opacity-60 rounded-xl p-6 backdrop-blur-sm border border-gray-700 text-center">
            <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-file-alt text-white text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Study Guides</h3>
            <p class="text-gray-400 mb-4">Comprehensive guides for understanding each book in the program</p>
            <button class="text-blue-400 hover:text-blue-300 transition-colors duration-300">
              Explore Guides <i class="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
          
          <div class="bg-gray-800 bg-opacity-60 rounded-xl p-6 backdrop-blur-sm border border-gray-700 text-center">
            <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-music text-white text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Classical Music</h3>
            <p class="text-gray-400 mb-4">Listen to classical compositions that complement your reading</p>
            <button class="text-purple-400 hover:text-purple-300 transition-colors duration-300">
              Explore Music <i class="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
          
          <div class="bg-gray-800 bg-opacity-60 rounded-xl p-6 backdrop-blur-sm border border-gray-700 text-center">
            <div class="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-comments text-white text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Discussion Forums</h3>
            <p class="text-gray-400 mb-4">Join community discussions about the Great Books</p>
            <button class="text-pink-400 hover:text-pink-300 transition-colors duration-300">
              Join Discussions <i class="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Programs'
}
</script>