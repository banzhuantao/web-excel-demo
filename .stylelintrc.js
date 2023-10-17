/**
 * @author        : banzhuantao
 * @date          : 2023-04-17 14:39:55
 * @description   : stylelint 配置项
 * 官网：https://stylelint.io/
 */

module.exports = {
  root: true,
  extends: [
    "stylelint-config-standard",
    "stylelint-config-property-sort-order-smacss",
  ],
  plugins: ["stylelint-order", "stylelint-prettier"],
  overrides: [
    {
      files: ["**/*.(css|html|vue)"],
      customSyntax: "postcss-html",
    },
    {
      files: ["*.less", "**/*.less"],
      customSyntax: "postcss-less",
      extends: [
        "stylelint-config-standard",
        "stylelint-config-recommended-vue",
      ],
    },
    {
      files: ["*.scss", "**/*.scss"],
      customSyntax: "postcss-scss",
      extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-recommended-vue/scss",
      ],
      rule: {
        "scss/percent-placeholder-pattern": null,
      },
    },
  ],
  rules: {
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["deep"],
      },
    ],
    "no-descending-specificity": null,
  },
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts"],
};
