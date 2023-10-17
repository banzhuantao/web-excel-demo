/**
 * @author        : banzhuantao
 * @date          : 2023-03-20 14:56:09
 * @description   : 环境变量工具集
 */

import type { GlobEnvConfig } from "types/config";

import { util_warn } from "@/utils/log";
import { getConfigFileName } from "../../build/getConfigFileName";

export function util_getCommonStoragePrefix() {
  const { VITE_GLOB_APP_SHORT_NAME } = util_getAppEnvConfig();
  return `${VITE_GLOB_APP_SHORT_NAME}__${util_getEnv()}`.toUpperCase();
}

// Generate cache key according to version
export function util_getStorageShortName() {
  const { VITE_GLOB_APP_VERSION } = util_getAppEnvConfig();
  return `${util_getCommonStoragePrefix()}${`__${VITE_GLOB_APP_VERSION}`}__`.toUpperCase();
}

export function util_getAppEnvConfig() {
  const ENV_NAME = getConfigFileName(import.meta.env);

  // const ENV = (import.meta.env.DEV
  //   ? // Get the global configuration (the configuration will be extracted independently when packaging)
  //     (import.meta.env as unknown as GlobEnvConfig)
  //   : window[ENV_NAME as any]
  //   ? window[ENV_NAME as any]
  //   : (import.meta
  //       .env as unknown as GlobEnvConfig)) as unknown as GlobEnvConfig;

  const ENV = (import.meta.env.DEV
    ? // Get the global configuration (the configuration will be extracted independently when packaging)
      (import.meta.env as unknown as GlobEnvConfig)
    : window[ENV_NAME as any]) as unknown as GlobEnvConfig;

  const {
    VITE_GLOB_APP_TITLE,
    VITE_GLOB_API_URL,
    VITE_GLOB_APP_SHORT_NAME,
    VITE_GLOB_API_URL_PREFIX,
    VITE_GLOB_UPLOAD_URL,
    VITE_GLOB_APP_VERSION,
    VITE_GLOB_API_ENCRYPT,
  } = ENV;

  // If (!/^[a-zA-Z\_]*$/.test(VITE_GLOB_APP_SHORT_NAME)) {
  if (!/^[a-zA-Z_]*$/.test(VITE_GLOB_APP_SHORT_NAME)) {
    util_warn(
      "VITE_GLOB_APP_SHORT_NAME Variables can only be characters/underscores, please modify in the environment variables and re-running.",
    );
  }

  return {
    VITE_GLOB_APP_TITLE,
    VITE_GLOB_API_URL,
    VITE_GLOB_APP_SHORT_NAME,
    VITE_GLOB_API_URL_PREFIX,
    VITE_GLOB_UPLOAD_URL,
    VITE_GLOB_APP_VERSION,
    VITE_GLOB_API_ENCRYPT,
  };
}

/**
 * @description: Development mode
 */
export const util_devMode = "development";

/**
 * @description: Production mode
 */
export const util_prodMode = "production";

/**
 * 获取环境变量
 */
export function util_getEnv(): string {
  return import.meta.env.MODE;
}

/**
 * 判断是否为开发模式
 */
export function util_isDevMode(): boolean {
  return import.meta.env.DEV;
}

/**
 * 判断是否为生产模式
 */
export function util_isProdMode(): boolean {
  return import.meta.env.PROD;
}
