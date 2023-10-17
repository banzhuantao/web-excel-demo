/**
 * @author        : banzhuantao
 * @date          : 2023-07-18 13:28:26
 * @description   : axios 请求
 */

import { defineStore } from "pinia";
import { ref } from "vue";

export const useRequest = defineStore("request", () => {
  const activeApi = ref(new Map());

  return {
    activeApi,
  };
});
