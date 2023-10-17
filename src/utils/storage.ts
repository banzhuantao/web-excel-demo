/**
 * @author        : banzhuantao
 * @date          : 2023-03-21 10:57:39
 * @description   : 缓存工具集
 */

import { util_getStorageShortName } from "@/utils/env";
import { util_decryptByAES, util_encryptByAES } from "@/utils/cipher";

type Key = string;

/**
 * @description localStorage / sessionStorage 增/删/改/查工具
 */
class MemoryStorage {
  private readonly storage: Storage;
  private readonly prefix: string;

  constructor(storage: Storage) {
    this.storage = storage;
    this.prefix = util_getStorageShortName();
  }

  private getKey(key: Key) {
    return `${this.prefix}${key}`.toUpperCase();
  }

  /**
   * @description 存储
   * @param key
   * @param value
   */
  set(key: Key, value: any) {
    this.storage.setItem(
      this.getKey(key),
      util_encryptByAES(JSON.stringify(value)),
    );
  }

  /**
   * @description 读取
   * @param key
   */
  get(key: Key) {
    try {
      const value: any = this.storage.getItem(this.getKey(key));
      return JSON.parse(util_decryptByAES(value));
    } catch (e) {
      return null;
    }
  }

  /**
   * @description 删除指定名称的数据
   * @param key
   */
  remove(key: Key) {
    this.storage.removeItem(`${this.prefix}${key}`);
  }

  /**
   * @description 删除所有存储的数据
   */
  clear() {
    this.storage.clear();
  }
}

// SessionStorage
export const util_sessionMemoryStorage = new MemoryStorage(sessionStorage);

// LocalStorage
export const util_localMemoryStorage = new MemoryStorage(localStorage);
