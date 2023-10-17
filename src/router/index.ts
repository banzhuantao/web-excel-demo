/**
 * @author        : banzhuantao
 * @date          : 2023-06-13 21:10:03
 * @description   : 路由主文件
 */

import type { App } from "vue";
import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import { routes } from "./routes";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  strict: true,
  scrollBehavior: () => {
    return { left: 0, top: 0 };
  },
  routes: routes as unknown as RouteRecordRaw[],
});

// 应用载入路由
export function setupRouter(app: App<Element>) {
  app.use(router);
}
