<template>
  <div class="min-h-screen py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold mb-4">The Great Books Collection</h1>
        <p class="text-gray-400 max-w-2xl mx-auto">Explore the timeless works that form the foundation of Western civilization</p>
      </div>

      <!-- Search and Filter -->
      <div class="mb-12">
        <div class="max-w-2xl mx-auto">
          <div class="relative">
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="Search books by title, author, or subject..."
              class="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
            <i class="fas fa-search absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          </div>
        </div>
      </div>

      <!-- Books Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="book in filteredBooks" 
          :key="book.id"
          class="bg-gray-800 bg-opacity-60 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700 transform transition-all duration-500 hover:scale-105 hover:border-blue-500 group"
        >
          <div class="p-6">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <i class="fas fa-book text-white text-xl"></i>
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">{{ book.title }}</h3>
                <p class="text-gray-400 text-sm mb-3">{{ book.author }}</p>
                <div class="flex items-center space-x-2 mb-3">
                  <span class="px-3 py-1 bg-blue-900 text-blue-300 text-xs rounded-full">{{ book.category }}</span>
                  <span class="text-gray-500 text-xs">{{ book.year }}</span>
                </div>
                <p class="text-gray-300 text-sm line-clamp-2">{{ book.description }}</p>
              </div>
            </div>
            
            <div class="mt-6 flex justify-between items-center">
              <div class="flex space-x-2">
                <button @click="viewBook(book.id)" class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300">
                  <i class="fas fa-eye mr-2"></i>View
                </button>
                <button class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300">
                  <i class="fas fa-download mr-2"></i>Download
                </button>
              </div>
              <button @click="toggleFavorite(book.id)" class="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
                <i :class="book.favorited ? 'fas fa-heart text-red-500' : 'far fa-heart text-gray-400'"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="mt-12 flex justify-center">
        <nav class="flex items-center space-x-2">
          <button class="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="px-4 py-2 bg-blue-600 rounded-lg">1</button>
          <button class="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">2</button>
          <button class="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">3</button>
          <button class="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
            <i class="fas fa-chevron-right"></i>
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Books',
  data() {
    return {
      searchQuery: '',
      books: [
        {
          id: 1,
          title: "The Republic",
          author: "Plato",
          description: "A Socratic dialogue that explores justice, the ideal state, and the nature of reality.",
          category: "Philosophy",
          year: "380 BCE",
          favorited: false
        },
        {
          id: 2,
          title: "The Divine Comedy",
          author: "Dante Alighieri",
          description: "An epic poem that describes the journey through Hell, Purgatory, and Paradise.",
          category: "Poetry",
          year: "1320",
          favorited: false
        },
        {
          id: 3,
          title: "The Iliad",
          author: "Homer",
          description: "An epic poem about the Trojan War and the wrath of Achilles.",
          category: "Epic Poetry",
          year: "8th century BCE",
          favorited: false
        },
        {
          id: 4,
          title: "Meditations",
          author: "Marcus Aurelius",
          description: "A series of personal writings by the Roman emperor on Stoic philosophy.",
          category: "Philosophy",
          year: "170-180 CE",
          favorited: false
        },
        {
          id: 5,
          title: "The Canterbury Tales",
          author: "Geoffrey Chaucer",
          description: "A collection of 24 stories that run the gamut from comedy to tragedy.",
          category: "Poetry",
          year: "1387",
          favorited: false
        },
        {
          id: 6,
          title: "The Prince",
          author: "Niccolò Machiavelli",
          description: "A political treatise that discusses the nature of power and statecraft.",
          category: "Political Philosophy",
          year: "1532",
          favorited: false
        }
      ]
    }
  },
  computed: {
    filteredBooks() {
      if (!this.searchQuery) return this.books
      return this.books.filter(book => 
        book.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        book.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  },
  methods: {
    viewBook(id) {
      // Navigation to book details page
      this.$router.push(`/book/${id}`)
    },
    toggleFavorite(id) {
      const book = this.books.find(b => b.id === id)
      if (book) {
        book.favorited = !book.favorited
      }
    }
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>