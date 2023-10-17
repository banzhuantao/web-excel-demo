/**
 * @author        : banzhuantao
 * @date          : 2023-06-14 16:29:01
 * @description   : 介绍文件的作用、文件的入参、出参
 */

declare type Recordable<T = any> = Record<string, T>;

declare interface ViteEnv {
  VITE_USE_MOCK: boolean;
  VITE_PUBLIC_PATH: string;
  VITE_GLOB_APP_TITLE: string;
  VITE_BUILD_COMPRESS: "gzip" | "brotli" | "none";
  VITE_PORT: number;
  VITE_PROXY: [string, string][];
}

declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
