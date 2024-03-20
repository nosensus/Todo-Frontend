import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@todo": path.resolve(__dirname, "./src/"),
      "@todo/api": `${path.resolve(__dirname, "./src/api/")}`,
      "@todo/utils": `${path.resolve(__dirname, "./src/utils/")}`,
      "@todo/store": `${path.resolve(__dirname, "./src/store/")}`,
      "@todo/setup": `${path.resolve(__dirname, "./src/setup/")}`,
      "@todo/components": `${path.resolve(__dirname, "./src/components/")}`,
      "@todo/hooks": `${path.resolve(__dirname, "./src/hooks/")}`,
      "@todo/consts": `${path.resolve(__dirname, "./src/consts")}`,
    }
  }
});
