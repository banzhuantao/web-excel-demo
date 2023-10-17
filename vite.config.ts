/**
 * @author        : banzhuantao
 * @date          : 2023-06-13 21:12:38
 * @description   : vite config
 */

import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import { wrapperEnv } from "./build/utils";
import { createProxy } from "./build/vite/proxy";
import { createVitePlugins } from "./build/vite/plugin";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const root = process.cwd();
  const isBuild = command === "build";
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  const { VITE_PUBLIC_PATH, VITE_PORT, VITE_PROXY, VITE_DROP_CONSOLE } =
    viteEnv;

  return {
    root,
    base: VITE_PUBLIC_PATH,
    plugins: createVitePlugins(viteEnv, isBuild),
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "#": fileURLToPath(new URL("./types", import.meta.url)),
      },
    },
    server: {
      host: true,
      port: VITE_PORT,
      strictPort: false,
      https: false,
      proxy: createProxy(VITE_PROXY),
    },
    build: {
      minify: "esbuild",
    },
    esbuild: {
      drop: VITE_DROP_CONSOLE ? ["console", "debugger"] : [],
    },
  };
});
