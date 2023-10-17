/**
 * @author        : banzhuantao
 * @date          : 2023-06-28 20:16:16
 */

/**
 * 保留两位小数
 */
export const keepTwoDecimalsReg = /^\d*\.{0,1}\d{0,2}$/;

/**
 * 15位 18位 身份证号校验
 */
export const identityCard18 =
  /^([1-6][1-9]|50)\d{4}(18|19|20)\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
export const identityCard15 =
  /^([1-6][1-9]|50)\d{4}\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}$/;
export function isIdentityCard(value: string) {
  return identityCard18.test(value) || identityCard15.test(value);
}

/**
 * 手机号码
 */
export const phoneReg =
  /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/;
export function isPhone(value: string) {
  return phoneReg.test(value);
}
