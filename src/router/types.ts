/**
 * @author        : banzhuantao
 * @date          : 2023-06-26 17:48:23
 */

import { defineComponent } from "vue";
import type { RouteRecordRaw, RouteMeta, _RouteRecordBase } from "vue-router";

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import("*.vue")>)
  | (() => Promise<T>);

// @ts-ignore
export interface AppRouteRecordRaw extends RouteRecordRaw {
  path: string;
  name?: string;
  meta?: RouteMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[];
  props?: Recordable;
  fullPath?: string;
  redirect?: string;
  beforeEnter?: _RouteRecordBase["beforeEnter"];
}
