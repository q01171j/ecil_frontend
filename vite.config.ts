import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@layouts': path.resolve(__dirname, 'src/layouts/index'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components/index'),
      '@utils': path.resolve(__dirname, 'src/utils/index'),
      '@hooks': path.resolve(__dirname, 'src/hooks/index'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces/index'),
      '@icons': path.resolve(__dirname, 'src/icons/index'),
      '@assets': path.resolve(__dirname, 'src/assets/index'),
      '@data': path.resolve(__dirname, 'src/data/index'),
      "@features": path.resolve(__dirname, "src/features"),
    },
  },
})
