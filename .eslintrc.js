/**
 * @author        : banzhuantao
 * @date          : 2023-04-17 14:39:55
 * @description   : eslint 配置项
 * 官网：https://eslint.org/
 */

/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,

  // 环境
  env: {
    browser: true,
    node: true,
    es6: true,
  },

  parser: "vue-eslint-parser",

  // 解析器
  parserOptions: {
    parser: "@typescript-eslint/parser",
    // latest 表示支持最近的版本
    ecmaVersion: "latest",
    // 因为使用了es代码
    sourceType: "module",
    jsxPragma: "React",
    // 表示您希望使用的附加语言功能
    ecmaFeatures: {
      jsx: true,
    },
    // fixme 添加会报错
    // project: ["./tsconfig.json"],
    createDefaultProgram: false,
    extraFileExtensions: [".vue"],
  },

  /**
   * 扩展
   * 属性值可以是一个基本配置文件的绝对或相对路径
   */
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:vue/vue3-essential",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting",
  ],

  // 插件
  plugins: [],

  /**
   * 规则
   * 0 不启用
   * 1 警告
   * 2 错误
   */
  rules: {
    /* ====================================================== Possible Problems ====================================================== */

    // 强制要求在数组方法的回调中使用 return 语句
    "array-callback-return": [
      2,
      {
        // 允许需要返回值的方法回调隐式返回 undefined 和不含表达式的 return 语句
        allowImplicit: true,
        // 报告返回值的 forEach 回调
        checkForEach: true,
      },
    ],

    /**
     * 派生类的构造函数必须调用 super()
     * 非派生类的构造函数不得调用 super()
     * 只提醒是因为ts的检查器会检查
     */
    "constructor-super": 1,

    // 无限循环
    "for-direction": 2,

    // getter 中强制要求 return
    "getter-return": [
      2,
      {
        // 不允许用 return 语句隐式返回 undefined
        allowImplicit: false,
      },
    ],

    // 禁止将异步函数用作 Promise 执行器
    "no-async-promise-executor": 2,

    /**
     * 禁止在循环内使用 await
     * 如果你有这样的需求，建议使用 Promise.all
     *
     * 出现以下三种情况时，可以对单行进行禁止
     *	1. 一次迭代的输出可能被用作另一次迭代的输入
     *	2. 循环可用于重试不成功的异步操作
     *	3. 循环可用于防止代码并行发送过多请求
     */
    "no-await-in-loop": 2,

    // 禁止重新分配 class 成员
    "no-class-assign": 2,

    // 不允许与 -0 比较
    "no-compare-neg-zero": 2,

    // 禁止在条件表达式中使用赋值操作符
    "no-cond-assign": [
      2,
      // 只有在括号内才允许在测试条件中进行赋值(eg: 允许在 while 或 do...while 循环的测试中对变量进行重新赋值)
      "except-parens",
      // 不允许测试条件中的所有赋值
      // "always",
    ],

    // 禁止重新分配 const 变量
    "no-const-assign": 2,

    // 禁止操作不影响值的表达式
    "no-constant-binary-expression": 2,

    // 禁止在条件中使用常量表达式
    "no-constant-condition": [
      2,
      // 禁止在循环中使用常量表达式
      { checkLoops: true },
    ],

    // 禁止从构造函数返回值
    "no-constructor-return": 2,

    // 禁止在正则表达式中使用控制字符
    "no-control-regex": 2,

    // 禁止使用 debugger
    "no-debugger": 2,

    // 禁止在 function 定义中使用重复参数
    "no-dupe-args": 2,

    /**
     * 禁止重复的类成员
     * 只提醒是因为ts的检查器会检查
     */
    "no-dupe-class-members": 1,

    // 禁止在 if-else-if 链中使用重复条件
    "no-dupe-else-if": 2,

    // 禁止在对象字面中使用重复键
    "no-dupe-keys": 2,

    // 禁止在 switch 中出现重复的 case
    "no-duplicate-case": 2,

    // 禁止重复导入模块
    "no-duplicate-imports": [
      2,
      {
        // 如果从已导入模块重新导出，应将导入添加到 import -statement 中，然后直接导出，而不是使用 export ... from
        includeExports: true,
      },
    ],

    // 禁止在正则表达式中使用空字符类
    "no-empty-character-class": 2,

    // 禁止空地解构模式
    "no-empty-pattern": 2,

    // 禁止在 catch 子句中重新分配异常
    "no-ex-assign": 2,

    // 禁止 case 穿透
    "no-fallthrough": 2,

    // 禁止重新分配 function 声明
    "no-func-assign": 2,

    // 禁止对导入绑定的赋值、增量和减量操作
    "no-import-assign": 2,

    // 禁止在嵌套代码块中声明变量或 function
    "no-inner-declarations": [
      2,
      // 不允许在嵌套区块中使用 function 和 var 声明
      "both",
    ],

    // 禁止在 RegExp 构造函数中使用无效正则表达式字符串
    "no-invalid-regexp": [
      2,
      {
        // 指定可以被忽略的
        allowConstructorFlags: [],
      },
    ],

    // 禁止不规则空白
    "no-irregular-whitespace": [2],

    // 禁止丢失精度的字面数字
    "no-loss-of-precision": 2,

    // 禁止在字符类语法中使用多个码位的字符
    "no-misleading-character-class": 2,

    // 禁止 new 操作符使用全局非构造函数
    "no-new-native-nonconstructor": 2,

    // 禁止使用 Symbol 对象的 new 运算符
    "no-new-symbol": 2,

    // 禁止将全局对象属性作为函数调用
    "no-obj-calls": 2,

    // 禁止从 Promise 执行器函数返回值
    "no-promise-executor-return": 2,

    // 禁止在对象上直接调用某些 Object.prototype 方法
    "no-prototype-builtins": 2,

    // 禁止双方完全相同的分配
    "no-self-assign": 2,

    // 禁止双方完全相同的比较
    "no-self-compare": 2,

    // 禁止从 setter 返回值
    "no-setter-return": 2,

    // 禁止使用稀疏数组
    "no-sparse-arrays": 2,

    // 禁止在正则字符串中使用模板字面占位符语法
    "no-template-curly-in-string": 2,

    // 在构造函数中调用 super() 之前禁止 this / super
    "no-this-before-super": 2,

    // 除非在 /*global */ 注释中提及，否则禁止使用未声明的变量
    "no-undef": [
      2,
      {
        // 将对 typeof 检查中使用的变量发出警告
        typeof: true,
      },
    ],

    // 禁止否定关系运算符的左操作数
    "no-unsafe-negation": [
      2,
      {
        // 禁止否定排序关系运算符的左手边
        enforceForOrderingRelations: true,
      },
    ],

    // 在不允许使用 undefined 值的上下文中禁止使用可选链
    "no-unsafe-optional-chaining": [
      2,
      {
        // 不允许对可选的链式表达式进行算术运算
        disallowArithmeticOperators: false,
      },
    ],

    /* ====================================================== Suggestions ====================================================== */

    "accessor-pairs": 2,
    "arrow-body-style": [2, "always"],
    "block-scoped-var": 2,
    "class-methods-use-this": 2,
    complexity: 2,
    "consistent-return": 2,
    "consistent-this": [2, "that"],
    curly: 2,
    "default-case": 2,
    "default-case-last": 2,
    "default-param-last": 2,
    "dot-notation": 2,
    eqeqeq: 2,
    "func-name-matching": 2,
    "func-names": 2,
    "grouped-accessor-pairs": [2, "getBeforeSet"],
    "id-denylist": [2],

    /* ====================================================== Layout & Formatting ====================================================== */

    "max-lines": [
      2,
      {
        max: 2000,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
  },

  globals: {
    Recordable: "readonly",
    JSX: "readonly",
    BlobPart: "readonly",
    TargetContext: "readonly",
    ViteEnv: "readonly",
  },
};
