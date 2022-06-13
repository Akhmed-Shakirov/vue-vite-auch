import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        (componentName) => {
          if (componentName.startsWith('Van'))
            return { name: componentName.slice(3), from: 'vant' }
        }
      ]
    })
  ]
})
