/**
 * @author        : banzhuantao
 * @date          : 2023-04-11 17:19:54
 * @description   : prettier 配置项
 * 官网：https://prettier.io/
 */

module.exports = {
  // 指定打印机将包住的行长
  printWidth: 80,
  // 指定每个缩进级别的空格数
  tabWidth: 2,
  // 用制表符缩进行
  useTabs: false,
  // 在语句的结尾处打印分号
  semi: true,
  // 使用双引号
  singleQuote: false,
  // 只在需要时在对象属性周围添加引号
  quoteProps: "as-needed",
  // 在JSX中使用双引号
  jsxSingleQuote: false,
  // 在多行逗号分隔的语法结构中尽可能打印尾部逗号
  trailingComma: "all",
  // 在对象字面的括号之间打印空格
  bracketSpacing: true,
  // 将多行HTML（HTML、JSX、Vue、Angular）元素的 > 单独放在下一行（不适用于自闭元素）
  bracketSameLine: false,
  // 始终在一个唯一的箭头函数参数周围包括括号
  arrowParens: "always",
  proseWrap: "never",
  htmlWhitespaceSensitivity: "strict",
  // 在Vue文件中缩进脚本和样式标签
  vueIndentScriptAndStyle: true,
  // 仅限换行（ \n ）
  endOfLine: "lf",
  // 如果 Prettier 能自动识别嵌入式代码，则格式化嵌入文件中的引号代码
  embeddedLanguageFormatting: "auto",
  // 在HTML、Vue和JSX中强制执行每行单一属性
  singleAttributePerLine: true,
};
