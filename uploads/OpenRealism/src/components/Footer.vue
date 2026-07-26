<template>
  <footer class="bg-gray-800 bg-opacity-80 backdrop-blur-md border-t border-gray-700 mt-12">
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <i class="fas fa-book-open text-white"></i>
            </div>
            <h3 class="text-xl font-bold">Great Books</h3>
          </div>
          <p class="text-gray-400 text-sm">
            Fostering classical education and the appreciation of great literature.
          </p>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">Programs</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Great Books Program</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">1000 Good Books</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Classical Education</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Catholic Tradition</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">Resources</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Audio Books</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Classical Music</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Study Guides</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Discussion Forums</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">Connect</h4>
          <div class="flex space-x-4">
            <a href="#" class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors duration-300">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div class="border-t border-gray-700 mt-8 pt-6 text-center">
        <p class="text-gray-500 text-sm">
          &copy; {{ new Date().getFullYear() }} Great Books Agentic App. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>