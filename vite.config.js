import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path, { resolve } from "path";

const isDev = process.env.NODE_ENV !== "production";

const baseConfig = {
  plugins: [vue()],
  resolve: {
    conditions: ["import", "require", "browser"]
  },
  build: {
    minify: true,
    lib: {
      entry: path.resolve(__dirname, "src/vuedraggable.js"),
      name: "vuedraggable",
      formats: ["es"],
      fileName: format => `index.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        "vue",
        "sortablejs",
      ],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue"
        }
      },
      plugins: [
        // terser({
        //   compress: true
        // })
      ]
    }
  },
};


// https://vitejs.dev/config/
export default defineConfig(baseConfig);
