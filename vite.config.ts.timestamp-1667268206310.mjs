// vite.config.ts
import { defineConfig } from "file:///C:/Users/G/Desktop/project/vue3-ts-ui/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/G/Desktop/project/vue3-ts-ui/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import { viteMockServe } from "file:///C:/Users/G/Desktop/project/vue3-ts-ui/node_modules/vite-plugin-mock/dist/index.js";
import DefineOptions from "file:///C:/Users/G/Desktop/project/vue3-ts-ui/node_modules/unplugin-vue-define-options/dist/vite.mjs";
var __vite_injected_original_dirname = "C:\\Users\\G\\Desktop\\project\\vue3-ts-ui";
var vite_config_default = defineConfig({
    plugins: [
        vue(),
        viteMockServe({
            supportTs: true,
            mockPath: "./src/mock/"
        }),
        DefineOptions()
    ],
    resolve: {
        alias: {
            src: resolve(__vite_injected_original_dirname, "src")
        }
    },
    css: {
        preprocessorOptions: {
            less: {
                charset: false,
                additionalData: `@import "${resolve(
          __vite_injected_original_dirname,
          "./src/assets/style/variable.less"
        )}";
        @import "${resolve(__vite_injected_original_dirname, "./src/assets/style/maxin.less")}";
        @import "${resolve(__vite_injected_original_dirname, "./src/assets/style/function.less")}";`
            }
        }
    },
    server: {
        port: 10010,
        host: "0.0.0.0"
    }
});
export {
    vite_config_default as
    default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxHXFxcXERlc2t0b3BcXFxccHJvamVjdFxcXFx2dWUzLXRzLXVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxHXFxcXERlc2t0b3BcXFxccHJvamVjdFxcXFx2dWUzLXRzLXVpXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9HL0Rlc2t0b3AvcHJvamVjdC92dWUzLXRzLXVpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgeyB2aXRlTW9ja1NlcnZlIH0gZnJvbSBcInZpdGUtcGx1Z2luLW1vY2tcIjtcclxuaW1wb3J0IERlZmluZU9wdGlvbnMgZnJvbSAndW5wbHVnaW4tdnVlLWRlZmluZS1vcHRpb25zL3ZpdGUnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHZ1ZSgpLFxyXG4gICAgdml0ZU1vY2tTZXJ2ZSh7XHJcbiAgICAgIHN1cHBvcnRUczogdHJ1ZSxcclxuICAgICAgbW9ja1BhdGg6IFwiLi9zcmMvbW9jay9cIixcclxuICAgIH0pLFxyXG4gICAgRGVmaW5lT3B0aW9ucygpXHJcbiAgXSxcclxuICAvLyBcdTUyMkJcdTU0MERcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBzcmM6IHJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjc3M6IHtcclxuICAgIC8vIGxlc3NcdTk4ODRcdTU5MDRcdTc0MDZcdTU2NjhcdTc2ODRcdTUxNjhcdTVDNDBcdTUzRDhcdTkxQ0ZcdTRFMEVcdTUxNjhcdTVDNDBcdTZERjdcdTUxNjVcclxuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgbGVzczoge1xyXG4gICAgICAgIGNoYXJzZXQ6IGZhbHNlLFxyXG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgQGltcG9ydCBcIiR7cmVzb2x2ZShcclxuICAgICAgICAgIF9fZGlybmFtZSxcclxuICAgICAgICAgIFwiLi9zcmMvYXNzZXRzL3N0eWxlL3ZhcmlhYmxlLmxlc3NcIlxyXG4gICAgICAgICl9XCI7XHJcbiAgICAgICAgQGltcG9ydCBcIiR7cmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvYXNzZXRzL3N0eWxlL21heGluLmxlc3NcIil9XCI7XHJcbiAgICAgICAgQGltcG9ydCBcIiR7cmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvYXNzZXRzL3N0eWxlL2Z1bmN0aW9uLmxlc3NcIil9XCI7YCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICAvLyBcdTkxNERcdTdGNkVcdTRFRTNcdTc0MDZcdTg5RTNcdTUxQjNcdThERThcdTU3REZcdUZGMENcdTYyMTFcdTRFRUNcdTU3MjhcdTdBRUZcdTUzRTNcdTUzRjdcdTU0MEVcdTY3MDBcdTUyNERcdTk3NjJcdTZERkJcdTUyQTBcdTRFMEEvYXBpLHZpdGVcdTRGMUFcdTVFMkVcdTYyMTFcdTRFRUNcdTUzQkJcdThCRjdcdTZDNDJcdTVCOUVcdTk2NDVcdTc2RUVcdTY4MDdcdTc2ODRcdTYzQTVcdTUzRTNcdTVFNzZcdTVDMDZcdTUwM0NcdThGRDRcdTU2REVcclxuICAvLyBcdTkxNERcdTdGNkVwb3J0XHU1NDhDaG9zdFx1NUMzMVx1NTNFRlx1NEVFNVx1OEREMVx1OEQ3N1x1Njc2NVx1RkYwQ1x1OEJBOVx1NEVENlx1NEVCQVx1NTcyOFx1NUM0MFx1NTdERlx1N0Y1MVx1NEUwQlx1OEJCRlx1OTVFRVxyXG4gIHNlcnZlcjoge1xyXG4gICAgcG9ydDogMTAwMTAsXHJcbiAgICBob3N0OiBcIjAuMC4wLjBcIixcclxuICAgIC8vIHByb3h5OiB7XHJcbiAgICAvLyAgICcvYXBpJzoge1xyXG4gICAgLy8gICAgIHRhcmdldDogJ2h0dHA6Ly8xMC4xLjEuMjUyOjEwMDIzJyxcclxuICAgIC8vICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAvLyAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcnKVxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gfVxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZTLFNBQVMsb0JBQW9CO0FBQzFVLE9BQU8sU0FBUztBQUNoQixTQUFTLGVBQWU7QUFDeEIsU0FBUyxxQkFBcUI7QUFDOUIsT0FBTyxtQkFBbUI7QUFKMUIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osY0FBYztBQUFBLE1BQ1osV0FBVztBQUFBLE1BQ1gsVUFBVTtBQUFBLElBQ1osQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLEVBQ2hCO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLElBQy9CO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBRUgscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osU0FBUztBQUFBLFFBQ1QsZ0JBQWdCLFlBQVk7QUFBQSxVQUMxQjtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsbUJBQ1csUUFBUSxrQ0FBVywrQkFBK0I7QUFBQSxtQkFDbEQsUUFBUSxrQ0FBVyxrQ0FBa0M7QUFBQSxNQUNsRTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFHQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFRUjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==