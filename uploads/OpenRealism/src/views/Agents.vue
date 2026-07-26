<template>
  <div class="min-h-screen py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold mb-4">Intelligent Learning Agents</h1>
        <p class="text-gray-400 max-w-2xl mx-auto">Our AI-powered agents enhance your Great Books learning experience</p>
      </div>

      <!-- Agent Overview -->
      <div class="mb-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">Personalized Learning Agents</h2>
            <p class="text-gray-300 mb-6">
              Our intelligent agents adapt to your learning style, pace, and interests. They provide personalized recommendations, facilitate discussions, and offer context for challenging texts.
            </p>
            <div class="space-y-4">
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-brain text-white"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-1">Adaptive Learning</h3>
                  <p class="text-gray-400">Adjusts content difficulty and presentation based on your engagement</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-comments text-white"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-1">Discussion Facilitation</h3>
                  <p class="text-gray-400">Guides group discussions and provides insights into complex themes</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-music text-white"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-1">Cultural Context</h3>
                  <p class="text-gray-400">Provides historical and cultural context for each work</p>
                </div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-xl p-8 backdrop-blur-sm border border-gray-700">
              <div class="bg-gray-800 rounded-lg p-6">
                <div class="flex items-center space-x-4 mb-6">
                  <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <i class="fas fa-robot text-white"></i>
                  </div>
                  <div>
                    <h3 class="font-semibold">Book Companion Agent</h3>
                    <p class="text-sm text-gray-400">AI Learning Assistant</p>
                  </div>
                </div>
                <div class="space-y-4">
                  <div class="bg-gray-700/50 rounded-lg p-4">
                    <p class="text-gray-300 text-sm">"This passage from The Republic discusses the nature of justice. What are your thoughts on how Plato's perspective compares to modern concepts of justice?"</p>
                  </div>
                  <div class="flex justify-end">
                    <div class="bg-blue-600 rounded-lg p-4 max-w-xs">
                      <p class="text-white text-sm">I think Plato's focus on the ideal state's justice differs from modern views that emphasize individual rights.</p>
                    </div>
                  </div>
                  <div class="bg-gray-700/50 rounded-lg p-4">
                    <p class="text-gray-300 text-sm">"Excellent point! You've identified a key distinction. How does this connect to the concept of social contract theory we'll explore next?"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Agent Types -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold text-center mb-12">Agent Types</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Literary Analysis Agent -->
          <div class="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-xl p-8 backdrop-blur-sm border border-gray-700 transform transition-all duration-500 hover:scale-105">
            <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
              <i class="fas fa-book-open text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4">Literary Analysis</h3>
            <p class="text-gray-400 mb-6">
              Specializes in deep literary interpretation and thematic analysis of classic texts.
            </p>
            <ul class="space-y-2">
              <li class="flex items-center text-sm">
                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                Symbolic interpretation
              </li>
              <li class="flex items-center text-sm">
                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                Character analysis
              </li>
              <li class="flex items-center text-sm">
                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                Literary devices
              </li>
            </ul>
          </div>
          
          <!-- Historical Context Agent -->
          <div class="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl p-8 backdrop-blur-sm border border-gray-700 transform transition-all duration-500 hover:scale-105">
            <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
              <i class="fas fa-history text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4">Historical Context</h3>
            <p class="text-gray-400 mb-6">
              Provides historical background and cultural context for each literary work.
            </p>
            <ul class="space-y-2">
              <li class="flex items-center text-sm">
                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                Time period details
              </li>
              <li class="flex items-center text-sm">
                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                Cultural influences
              </li>
              <li class="flex items-center text-sm">
                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                Social conditions
              </li>
            </ul>
          </div>
          
          <!-- Discussion Facilitation Agent -->
          <div class="bg-gradient-to-br from-pink-900/40 to-red-900/40 rounded-xl p-8 backdrop-blur-sm border border-gray-700 transform transition-all duration-500 hover:scale-105">
            <div class="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
              <i class="fas fa-comments text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4">Discussion Guide</h3>
            <p class="text-gray-400 mb-6">
              Facilitates meaningful discussions with thought-provoking questions and insights.
            </p>
            <ul class="space-y-2">
              <li class="flex items-center text-sm">
                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                Discussion prompts
              </li>
              <li class="flex items-center text-sm">
                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                Critical thinking
              </li>
              <li class="flex items-center text-sm">
                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                Group dynamics
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Interactive Demo -->
      <div class="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl p-8 backdrop-blur-sm border border-gray-700">
        <h2 class="text-3xl font-bold text-center mb-12">Try the Agent in Action</h2>
        
        <div class="max-w-3xl mx-auto">
          <div class="bg-gray-800 rounded-lg p-6 mb-6">
            <div class="flex items-center space-x-4 mb-4">
              <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <i class="fas fa-robot text-white"></i>
              </div>
              <div>
                <h3 class="font-semibold">Learning Agent</h3>
                <p class="text-sm text-gray-400">Ready to assist with your reading</p>
              </div>
            </div>
            
            <div class="space-y-4">
              <div class="bg-gray-700/50 rounded-lg p-4">
                <p class="text-gray-300">
                  "What would you like to explore about this section of The Republic?"
                </p>
              </div>
              
              <div class="flex space-x-2">
                <button class="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300 text-sm">
                  Justice and the Ideal State
                </button>
                <button class="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300 text-sm">
                  Socrates' Method
                </button>
                <button class="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300 text-sm">
                  Philosophical Concepts
                </button>
              </div>
            </div>
          </div>
          
          <div class="text-center">
            <button class="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Start Interactive Session
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Agents'
}
</script>