/**
 * @author        : banzhuantao
 * @date          : 2023/2/24 15:34:02
 * @description   : 导航守卫
 */

import type { Router } from "vue-router";

export function setupRouterGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    next();
  });

  router.beforeResolve((to, from, next) => {
    next();
  });
}
