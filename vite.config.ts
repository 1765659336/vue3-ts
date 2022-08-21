import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src'),
    },
  },
  css: {
   // css预处理器
		preprocessorOptions: {
			less: {
				charset: false,
				additionalData: `@import "${resolve(
					__dirname,
					'./src/assets/style/variable.less'
				)}";
        @import "${resolve(__dirname, './src/assets/style/maxin.less')}";
        @import "${resolve(__dirname, './src/assets/style/function.less')}";`
			}
		}
  },
});

