/**
 * @author        : banzhuantao
 * @date          : 2023-02-27 17:01:59
 * @description   : 状态管理器
 */

// 退出登录时重置 pinia 的state

import type { App } from "vue";
import { createPinia } from "pinia";

export const store = createPinia();

export function setupStore(app: App<Element>) {
  app.use(store);
}
