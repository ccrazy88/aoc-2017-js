// eslint-disable-next-line pluginImport/no-unresolved
import { defineConfig } from "eslint/config";
import ccrazy88 from "eslint-config-ccrazy88";
import globals from "globals";

export default defineConfig([
  {
    extends: [ccrazy88],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "pluginImport/no-unused-modules": "off",
    },
  },
  {
    basePath: "test",
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
]);
