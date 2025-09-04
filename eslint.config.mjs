// eslint.config.js
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Next.js + TypeScript defaults
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Custom overrides
  {
    rules: {
      // Disable noisy rules
      "react/no-unescaped-entities": "off", // let you write Bob's without &apos;
      "@next/next/no-img-element": "off",   // allow <img> if you want

      // Optional: keep prefer-const as warning instead of error
      "prefer-const": "warn",
    },
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
