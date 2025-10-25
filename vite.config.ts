import {defineConfig} from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import proxy from "./src/config/api-proxy";

export default defineConfig({
  plugins: [
    uni(),
    AutoImport({
      imports: ['vue', 'uni-app'],
    }),
    Components({
      dts: true,
    }),
  ],
  css: {
    postcss: {
      plugins: [require('autoprefixer'), require('tailwindcss')],
    },
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy,
  },
  optimizeDeps: {
    include: ['@dcloudio/uni-ui/lib/uni-file-picker/uni-file-picker.vue'],
  },
})
