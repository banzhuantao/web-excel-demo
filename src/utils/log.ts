/**
 * @author        : banzhuantao
 * @date          : 2023-03-20 14:55:06
 * @description   : 日志工具集
 */

const projectName = import.meta.env.VITE_GLOB_APP_TITLE;

export function util_warn(message: string) {
  console.warn(`[${projectName} warn]:${message}`);
}

export function util_error(message: string) {
  throw new Error(`[${projectName} error]:${message}`);
}
