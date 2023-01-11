import { defineConfig, UserConfigExport } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import viteCompression from "vite-plugin-compression";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { resolve } from "path";
import {
  createStyleImportPlugin,
  ElementPlusResolve,
} from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  let config: UserConfigExport = {
    server: { port: 3333, host: "0.0.0.0" },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"), // 路径别名
      },
      extensions: [".js", ".json", ".ts"], // 使用路径别名时想要省略的后缀名，可以自己 增减
    },
    plugins: [
      vue(),
      viteCompression(),
      createStyleImportPlugin({
        resolves: [ElementPlusResolve()],
        libs: [
          {
            libraryName: "element-plus",
            esModule: true,
            resolveStyle: (name: string) => {
              return `element-plus/theme-chalk/${name}.css`;
            },
          },
        ],
      }),
      AutoImport({
        include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
        dirs: ["./src/components/*"],
        dts: "./src/auto-imports.d.ts",
        imports: ["vue", "vue-router", "pinia"],
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    build: {
      minify: "terser",
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              const arr = id.toString().split('node_modules/')[1].split('/')
              switch (arr[0]) {
                case '@vue':
                case 'axios':
                case 'pinia':
                case '@element-plus':
                case 'element-plus':
                case 'xlsx':
                  return '_' + arr[0]
                  break
                default:
                  return '__vendor'
                  break
              }
            }
          },
          chunkFileNames: 'assets/js1/[name]-[hash].js',
          entryFileNames: 'assets/js2/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
        },
      },
      postcss: {
        plugins: [
          {
            postcssPlugin: "internal:charset-removal",
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === "charset") {
                  atRule.remove();
                }
              },
            },
          },
        ],
      },
    },
  }
  return config;
});
