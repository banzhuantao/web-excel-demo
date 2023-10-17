/**
 * @author        : banzhuantao
 * @date          : 2023-06-13 21:12:38
 * @description   : 路由主文件
 */

import type { AppRouteRecordRaw } from "@/router/types";

const path = "/excel";

export const routes: AppRouteRecordRaw[] = [
  {
    path: "/:pathMatch(.*)*",
    redirect: path,
  },
  { path: "/", redirect: path },
  {
    path: path,
    component: () => {
      // return import("@/views/enter.vue");
      return import("@/views/workbook/index.vue");
    },
  },
];
