import { createSSRApp } from "vue";
import App from "./App.vue";

import setupPinia from './store'

import '@/style/index.scss'

export function createApp() {
  const app = createSSRApp(App);

  // 配置pinia
  setupPinia(app)


  return {
    app,
  };
}
