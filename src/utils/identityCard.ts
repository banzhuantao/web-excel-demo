/**
 * @author        : banzhuantao
 * @date          : 2023-06-30 14:24:54
 * @description   : 身份证号
 */

import dayjs from "dayjs";

/**
 * 根据身份证号获取出生年月
 * @param value
 */
export function util_getBirthday(value: string) {
  let birthday = "";
  if (value.length === 18) {
    birthday = value.substring(6, 14);
    return birthday.replace(/(.{4})(.{2})/, "$1-$2-");
  } else if (value.length === 15) {
    birthday = "19" + value.substring(6, 12);
    return birthday.replace(/(.{4})(.{2})/, "$1-$2-");
  }
  return undefined;
}

/**
 * 根据身份证号识别性别
 * (2 女,1 男)
 * @param value
 */
export function util_getGender(value: string) {
  if (value.length === 18) {
    return Number(value.charAt(16)) % 2 === 0 ? 2 : 1;
  } else if (value.length === 15) {
    return Number(value.charAt(14)) % 2 === 0 ? 2 : 1;
  }

  return undefined;
}

/**
 * 根据身份证号获取年龄
 * @param value
 */
export function util_getAge(value: string) {
  if (value) {
    return dayjs().year() - dayjs(util_getBirthday(value)).year();
  }

  return undefined;
}
