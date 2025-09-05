import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended, // základní doporučená pravidla od ESLintu
  {
    files: ['**/*.{js,mjs}'],
    ignores: ['node_modules/**', 'dist/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-var': 'error', // zakáže var
      eqeqeq: 'error', // vyžaduje === místo ==
    },
  },
];
