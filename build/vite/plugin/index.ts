/**
 * @author        : banzhuantao
 * @date          : 2023-06-19 21:18:10
 */

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VitePluginCertificate from "vite-plugin-mkcert";
// import { viteMockServe } from "vite-plugin-mock";
import { configHtmlPlugin } from "./html";
import { configCompressPlugin } from "./compress";

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  // const {
  //   // VITE_USE_IMAGEMIN,
  //   // VITE_USE_MOCK,
  //   // VITE_LEGACY,
  //   // VITE_BUILD_COMPRESS,
  //   // VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
  // } = viteEnv;

  const { VITE_BUILD_COMPRESS } = viteEnv;

  const vitePlugins = [
    vue(),
    vueJsx(),
    VitePluginCertificate({ source: "coding" }),
  ];

  // VITE_USE_MOCK &&
  //   vitePlugins.push(
  //     viteMockServe({
  //       /**
  //        * 参考文章：
  //        * https://blog.csdn.net/lhkuxia/article/details/125000115
  //        */
  //       // supportTs?: boolean; --是否读取ts文件模块，设置为true时不能读取js文件
  //       // logger?:boolean; --是否在控制台显示请求日志
  //       // mockPath?: string;  --设置模拟数据的存储文件夹，如果不是index.js需要写明完整路径
  //       // ignore?: RegExp | ((fileName: string) => boolean);--读取文件时忽略指定格式的文件
  //       // watchFiles?: boolean;--是否监视mockPath文件夹内文件的修改
  //       // localEnabled?: boolean;--设置是否启用本地 xxx.ts 文件，不要在生产环境中打开它.设置为 false 将禁用 mock 功能
  //       // ignoreFiles?: string[]; --读取文件时忽略的文件
  //       // configPath?: string;--设置模拟读取的数据条目。 当文件存在并且位于项目根目录中时，将首先读取并使用该文件。 配置文件返回一个数组
  //       // prodEnabled?: boolean;--设置打包是否启用 mock 功能
  //       // injectFile?: string;--如果生产环境开启了 mock 功能,即prodEnabled=true.则该代码会被注入到injectFile对应的文件的底部。默认为main.{ts,js}。这样做的好处是,可以动态控制生产环境是否开启 mock 且在没有开启的时候 mock.js 不会被打包。如果代码直接写在main.ts内，则不管有没有开启,最终的打包都会包含mock.js
  //       // injectCode?: string;--injectCode代码注入的文件,默认为项目根目录下src/main.{ts,js}
  //       mockPath: "mock",
  //     }),
  //   );

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild));

  // 以下插件仅在生产环境中工作
  if (isBuild) {
    // rollup-plugin-gzip
    vitePlugins.push(configCompressPlugin({ compress: VITE_BUILD_COMPRESS }));
  }

  return vitePlugins;
}
