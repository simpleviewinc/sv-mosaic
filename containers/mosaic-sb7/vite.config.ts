import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@root": path.resolve(__dirname, "/lib/src")
    }
  },
  plugins: [react()]
})
