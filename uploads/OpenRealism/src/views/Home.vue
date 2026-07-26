<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-20 md:py-32 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Great Books</span> for Modern Minds
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            Discover the timeless wisdom of the Great Books Program and John Senior's 1000 Good Books through our interactive agentic learning platform.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-500">
            <router-link to="/books" class="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Books
            </router-link>
            <router-link to="/programs" class="px-8 py-4 bg-gray-800 rounded-full font-semibold hover:bg-gray-700 transition-all duration-300 border border-gray-700">
              Learn Programs
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Books Section -->
    <section class="py-20 bg-gray-800 bg-opacity-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-16 animate-fade-in">
          Featured Great Books
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="book in featuredBooks" :key="book.id" class="bg-gray-800 bg-opacity-60 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700 transform transition-all duration-500 hover:scale-105 hover:border-blue-500">
            <div class="p-6">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <i class="fas fa-book text-white text-xl"></i>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">{{ book.title }}</h3>
                  <p class="text-gray-400 text-sm mb-3">{{ book.author }}</p>
                  <p class="text-gray-300 text-sm">{{ book.description.substring(0, 100) }}...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">Our Agentic Approach</h2>
          <p class="text-gray-400">Interactive learning powered by intelligent agents</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gray-800 bg-opacity-60 rounded-xl p-8 backdrop-blur-sm border border-gray-700 text-center transform transition-all duration-300 hover:scale-105">
            <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i class="fas fa-robot text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4">Intelligent Agents</h3>
            <p class="text-gray-400">AI-powered learning companions that adapt to your pace and understanding.</p>
          </div>
          
          <div class="bg-gray-800 bg-opacity-60 rounded-xl p-8 backdrop-blur-sm border border-gray-700 text-center transform transition-all duration-300 hover:scale-105">
            <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i class="fas fa-book-open text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4">Interactive Reading</h3>
            <p class="text-gray-400">Engage with texts through multimedia content and discussion prompts.</p>
          </div>
          
          <div class="bg-gray-800 bg-opacity-60 rounded-xl p-8 backdrop-blur-sm border border-gray-700 text-center transform transition-all duration-300 hover:scale-105">
            <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i class="fas fa-music text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4">Classical Music</h3>
            <p class="text-gray-400">Enhance your reading with musical accompaniment from the great composers.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      featuredBooks: [
        {
          id: 1,
          title: "The Republic",
          author: "Plato",
          description: "A Socratic dialogue that explores justice, the ideal state, and the nature of reality."
        },
        {
          id: 2,
          title: "The Divine Comedy",
          author: "Dante Alighieri",
          description: "An epic poem that describes the journey through Hell, Purgatory, and Paradise."
        },
        {
          id: 3,
          title: "The Iliad",
          author: "Homer",
          description: "An epic poem about the Trojan War and the wrath of Achilles."
        }
      ]
    }
  }
}
</script>

<style scoped>
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animation-delay-300 {
  animation-delay: 0.3s;
}

.animation-delay-500 {
  animation-delay: 0.5s;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}
</style>