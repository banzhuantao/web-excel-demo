/**
 * @author        : banzhuantao
 * @date          : 2023-10-16 23:08:44
 * @description   : 介绍文件的作用、文件的入参、出参
 */

export function getRangeValue(
  value: number,
  minAllowedValue: number,
  maxAllowedValue: number,
): number {
  if (value < minAllowedValue || !value) {
    return minAllowedValue;
  }

  if (value > maxAllowedValue) {
    return maxAllowedValue;
  }

  return value;
}
