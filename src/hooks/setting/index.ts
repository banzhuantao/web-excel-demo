/**
 * @author        : banzhuantao
 * @date          : 2023-03-20 14:50:37
 * @description   : 获取全局可编辑的环境变量
 */

import type { GlobConfig } from "types/config";

import { util_warn } from "@/utils/log";
import { util_getAppEnvConfig } from "@/utils/env";

export const useGlobSetting = (): Readonly<GlobConfig> => {
  const {
    VITE_GLOB_APP_TITLE,
    VITE_GLOB_API_URL,
    VITE_GLOB_APP_SHORT_NAME,
    VITE_GLOB_API_URL_PREFIX,
    VITE_GLOB_UPLOAD_URL,
    VITE_GLOB_APP_VERSION,
    VITE_GLOB_API_ENCRYPT,
  } = util_getAppEnvConfig();

  if (!/[a-zA-Z_]*/.test(VITE_GLOB_APP_SHORT_NAME)) {
    util_warn(
      "VITE_GLOB_APP_SHORT_NAME Variables can only be characters/underscores, please modify in the environment variables and re-running.",
    );
  }

  return {
    title: VITE_GLOB_APP_TITLE,
    apiUrl: VITE_GLOB_API_URL,
    shortName: VITE_GLOB_APP_SHORT_NAME,
    urlPrefix: VITE_GLOB_API_URL_PREFIX,
    uploadUrl: VITE_GLOB_UPLOAD_URL,
    version: VITE_GLOB_APP_VERSION,
    apiEncrypt:
      VITE_GLOB_API_ENCRYPT === "true"
        ? true
        : VITE_GLOB_API_ENCRYPT === "false"
        ? false
        : false,
  };
};
