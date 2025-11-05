// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import prettier from "eslint-config-prettier/flat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const config = [
  js.configs.recommended,

  // ✅ Extend Next.js core + TypeScript configs
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  prettier,

  {
    ignores: [".next/**", "node_modules/**", "out/**", "dist/**", "build/**"],
  },

  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "@next/next/no-img-element": "off",
      "no-console": "warn",
    },
  },
];

export default config;
