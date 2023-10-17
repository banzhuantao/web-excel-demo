/**
 * @author        : banzhuantao
 * @date          : 2023-03-30 19:46:20
 */

// #!/usr/bin/env node

import { runBuildConfig } from "./buildConf";
import colors from "picocolors";

// @ts-ignore
import pkg from "../../package.json";

export const runBuild = async () => {
  try {
    const argvList = process.argv.splice(2);

    // Generate configuration file
    if (!argvList.includes("disabled-config")) {
      runBuildConfig();
    }

    console.log(
      `✨ ${colors.cyan(`[${pkg.name}]`)}` + " - build successfully!",
    );
  } catch (error) {
    console.log(colors.red("vite build error:\n" + error));
    process.exit(1);
  }
};

(async () => {
  await runBuild();
})();
