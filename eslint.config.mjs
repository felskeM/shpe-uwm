import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tseslint from 'typescript-eslint';

export default [
  { ignores: ['.next/**', 'out/**', 'dist/**', 'node_modules/**', 'next-env.d.ts'] },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: [
      'next.config.*',
      'postcss.config.*',
      'tailwind.config.*',
      '**/*.config.{js,cjs,mjs}',
    ],
    settings: { react: { version: 'detect' } },
    plugins: { react, 'react-hooks': reactHooks, 'jsx-a11y': jsxA11y },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: { JSX: true, ...globals.node },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-imports': 'warn',

      'jsx-a11y/alt-text': 'error',
    },
  },
];
