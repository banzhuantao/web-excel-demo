/**
 * @author        : banzhuantao
 * @date          : 2023-06-27 10:51:09
 */

export {};

declare module "vue-router" {
  interface RouteMeta extends Record<string | number | symbol, unknown> {
    // 进入页面是否需要鉴权
    authentication?: boolean;
  }
}
