/**
 * @author        : banzhuantao
 * @date          : 2023-06-27 14:21:03
 * @description   : 正则 / 用户
 */

/**
 * 判断是否是密码
 * @param password
 */
export function isPassword(password: string) {
  const reg =
    /^(?![0-9a-z]+$)(?![0-9A-Z]+$)(?![0-9\W]+$)(?![a-z\W]+$)(?![a-zA-Z]+$)(?![A-Z\W]+$)[a-zA-Z0-9\W_]{8,20}$/;
  return reg.test(password);
}
