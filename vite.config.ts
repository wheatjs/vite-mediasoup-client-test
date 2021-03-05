import { defineConfig } from 'vite'
import cdn from './plugins/plugin-cdn'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // @ts-ignore
    cdn('skypack', {
      'mediasoup-client': '^3.6.29'
    })
  ],
})
