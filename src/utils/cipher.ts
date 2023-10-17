/**
 * @author        : banzhuantao
 * @date          : 2023-03-21 14:01:12
 * @description   : 加密工具集
 */

import { encrypt, decrypt } from "crypto-js/aes";
import pkcs7 from "crypto-js/pad-pkcs7";
import ECB from "crypto-js/mode-ecb";
import UTF8 from "crypto-js/enc-utf8";
import { cacheCipher } from "@/hooks/setting/encryptionSetting";
import { util_isDevMode } from "@/utils/env";

type CipherText = string;

function getOptions() {
  return {
    mode: ECB,
    padding: pkcs7,
    iv: cacheCipher.iv,
  };
}

/**
 * @description 加密
 * @param cipherText
 */
export function util_encryptByAES(cipherText: CipherText) {
  if (util_isDevMode()) {
    return cipherText;
  }

  return encrypt(cipherText, cacheCipher.key, getOptions).toString();
}

/**
 * @description 解密
 * @param cipherText
 */
export function util_decryptByAES(cipherText: CipherText) {
  if (util_isDevMode()) {
    return cipherText;
  }

  return decrypt(cipherText, cacheCipher.key, getOptions).toString(UTF8);
}
