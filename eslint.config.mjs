import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import simpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginUnicorn from 'eslint-plugin-unicorn';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const CONFIG = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  eslintPluginUnicorn.configs.recommended,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
];

export default CONFIG;
