import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server:{
  //   proxy:{
  //     '/api' : "https://ecommerce-backend-fpas.onrender.com"
  //   }
  // },
  plugins: [react()],
})
