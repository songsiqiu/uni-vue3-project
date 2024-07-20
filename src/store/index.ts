import { App } from 'vue'
import { createPinia } from 'pinia'

export const pinia = createPinia()

export default function setupPinia(app: App) {
    app.use(pinia)
}