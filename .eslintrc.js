const defaultConfig = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'json'],
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    es2020: true,
    node: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'sort-imports': 'error',
  },
  ignorePatterns: [
    '.git/',
    '.vscode',
    'build/',
    'dist/',
    'coverage/',
    'LICENSE.md',
    'modules/',
    'node_modules/',
    '!.*',
  ],
};

const config = defaultConfig;
config.overrides = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    /**
     * The Prettier recommended configuration must remain the configuration that
     * is extended last. Therefore, this overrides `extends` completely.
     */
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: defaultConfig.plugins.concat(['@typescript-eslint']),
  },
];

module.exports = config;
