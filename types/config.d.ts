/**
 * @author        : banzhuantao
 * @date          : 2023-03-20 14:52:06
 * @description   : 环境变量
 */

export interface GlobConfig {
  // 网站标题
  title: string;
  // 系统接口服务地址
  apiUrl: string;
  // 系统上传服务地址
  uploadUrl?: string;
  // 系统接口前缀
  urlPrefix?: string;
  // 系统简称
  shortName: string;
  // 系统版本号
  version: string;
  // 是否接口加密
  apiEncrypt: boolean;
}

export interface GlobEnvConfig {
  // 网站标题
  VITE_GLOB_APP_TITLE: string;
  // 系统接口服务地址
  VITE_GLOB_API_URL: string;
  // 系统接口前缀
  VITE_GLOB_API_URL_PREFIX?: string;
  // 系统上传服务地址
  VITE_GLOB_UPLOAD_URL?: string;
  // 系统简称
  VITE_GLOB_APP_SHORT_NAME: string;
  // 系统版本号
  VITE_GLOB_APP_VERSION: string;
  // 是否接口加密
  VITE_GLOB_API_ENCRYPT: string;
}
