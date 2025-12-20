import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import next from '@next/eslint-plugin-next';

export default [
  {
    ignores: [
      '**/.next/**',
      '**/.open-next/**',
      '**/.vercel/**',
      'node_modules/**',
      'out/**',
      'dist/**',
      '.tsout/**',
      '.tscache/**',
      'app/generated/**',
    ],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      '@next/next': next,
    },
    rules: {
      ...(react.configs.recommended?.rules ?? {}),
      ...(reactHooks.configs.recommended?.rules ?? {}),
      ...(jsxA11y.configs.recommended?.rules ?? {}),
      ...(next.configs['core-web-vitals']?.rules ?? next.configs.recommended.rules),

      // TS for prop checking
      "react/prop-types": "off",

      // React 17+ JSX transform – don't require `import React`
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // Closing mobile menu on route change is fine; disable this noisy rule
      'react-hooks/set-state-in-effect': 'off',

      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-imports': 'warn',
    },
    settings: { react: { version: 'detect' } },
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  ...tseslint.configs.recommendedTypeChecked.map((cfg) => ({
    ...cfg,
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      ...(cfg.languageOptions ?? {}),
      parserOptions: {
        ...(cfg.languageOptions?.parserOptions ?? {}),
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  })),
  {
    files: ['next-env.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
  {
    files: ['public/**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/require-await': 'off',
    },
  },
];
