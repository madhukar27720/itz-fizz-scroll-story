import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  build: {
    minify: 'terser',
    terserOptions: { format: { comments: false }, compress: { passes: 1 } },
    rollupOptions: { output: { manualChunks: { react: ['react', 'react-dom'], gsap: ['gsap', 'gsap/ScrollTrigger'] } } },
  },
})
