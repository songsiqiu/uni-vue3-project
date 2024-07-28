import {defineConfig} from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {VantResolver} from '@vant/auto-import-resolver';
import proxy from "./src/config/proxy";

export default defineConfig({
  plugins: [
    uni(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  css: {
    postcss: {
      plugins: [require('autoprefixer'), require('tailwindcss')],
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
