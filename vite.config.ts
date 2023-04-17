import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    cssInjectedByJsPlugin({
      // relativeCSSInjection: true
    }),
    vue()
  ],
  build: {
    lib: {
      entry: "src/lib/Counter2.vue",
      name: "MyCounters2",
      fileName: "[name]"
    },
    minify: false,
    modulePreload: false,
    rollupOptions: {
      // treeshake: false,
      plugins: [],
      external: ["vue"],
      // input: ["src/lib/lib.ts"],
      output: {
        // entryFileNames: "[name].js",
        // chunkFileNames: "[name].js",
        // assetFileNames: "[name].[ext]"
        globals: {
          vue: "Vue"
        }
      }
    }
  }
})
