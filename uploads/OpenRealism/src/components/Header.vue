<template>
  <header class="bg-gray-800 bg-opacity-80 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110">
          <i class="fas fa-book-open text-white text-xl"></i>
        </div>
        <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Great Books Agentic
        </h1>
      </div>
      
      <nav class="hidden md:flex space-x-8">
        <router-link 
          v-for="item in navItems" 
          :key="item.name"
          :to="item.path"
          class="text-gray-300 hover:text-white transition-all duration-300 relative group"
        >
          {{ item.name }}
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
        </router-link>
      </nav>
      
      <div class="flex items-center space-x-4">
        <button @click="toggleTheme" class="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
          <i :class="themeIcon"></i>
        </button>
        <button class="md:hidden p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      navItems: [
        { name: 'Home', path: '/' },
        { name: 'Books', path: '/books' },
        { name: 'Programs', path: '/programs' },
        { name: 'Agents', path: '/agents' },
        { name: 'Resources', path: '/resources' }
      ],
      isDarkTheme: true
    }
  },
  computed: {
    themeIcon() {
      return this.isDarkTheme ? 'fas fa-sun' : 'fas fa-moon'
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme
      document.documentElement.classList.toggle('dark', this.isDarkTheme)
    }
  }
}
</script>

<style scoped>
.router-link-active {
  @apply text-white;
}
</style>