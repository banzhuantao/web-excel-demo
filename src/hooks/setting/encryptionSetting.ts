/**
 * @author        : banzhuantao
 * @date          : 2023-03-21 15:45:54
 * @description   : 加密配置
 */

import { util_isDevMode } from "@/utils/env";

// System default cache time, in seconds
export const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7;

// Aes encryption key
export const cacheCipher = {
  key: "_11111000001111@",
  iv: "@11111000001111_",
};

// Whether the system cache is encrypted using aes
export const enableStorageEncryption = !util_isDevMode();
