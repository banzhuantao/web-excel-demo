/**
 * @author        : banzhuantao
 * @date          : 2023-07-06 16:18:37
 * @description   : 日期
 */

import dayjs, { type Dayjs } from "dayjs";

/**
 * 格式化日期
 * @param date 需要被转换的日期
 * @param type 需要转为哪种格式
 */
export function util_formatDate(
  date: string | null,
  type: number = 1,
): Dayjs | null | string {
  if (date) {
    switch (type) {
      case 1:
        return dayjs(date);
      case 2:
        // YYYY-MM-DD HH:mm
        return dayjs(date).format("YYYY-MM-DD HH:mm");
      default:
        return null;
    }
  }

  return null;
}
