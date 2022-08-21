import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      supportTs: true,
      mockPath: "./src/mock/"
    }),
  ],
  // 别名
  resolve: {
    alias: {
      src: resolve(__dirname, "src"),
    },
  },
  css: {
    // less预处理器的全局变量与全局混入
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: `@import "${resolve(
          __dirname,
          "./src/assets/style/variable.less"
        )}";
        @import "${resolve(__dirname, "./src/assets/style/maxin.less")}";
        @import "${resolve(__dirname, "./src/assets/style/function.less")}";`,
      },
    },
  },
  // 配置代理解决跨域，我们在端口号后最前面添加上/api,vite会帮我们去请求实际目标的接口并将值返回
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://10.1.1.252:10023',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     },
  //   }
  // }
});

