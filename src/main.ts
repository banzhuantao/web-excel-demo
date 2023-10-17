/**
 * @author        : banzhuantao
 * @date          : 2023-05-06 13:55:58
 * @description   : 系统主文件
 */

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import { router, setupRouter } from "./router";

import { setupRouterGuard } from "@/router/guard";
import { setupStore } from "@/stores";

import "./styles/global.less";
import { setupGlobDirectives } from "@/directives";

const app = createApp(App);

app.use(createPinia());
app.use(router);

function bootstrap() {
  const app = createApp(App);

  setupStore(app);

  // 配置路由
  setupRouter(app);

  // 路由守卫
  setupRouterGuard(router);

  // 注册全局指令
  setupGlobDirectives(app);

  app.mount("#app");
}

bootstrap();
