module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'ignorePatterns': ['node_modules'],
  'parserOptions': {
    'ecmaVersion': 13,
  },
  'plugins': [
    'sort-keys-fix',
  ],
  'rules': {
    'max-len': 0,
    'require-jsdoc': 0,
    'sort-keys-fix/sort-keys-fix': 'error',
    'valid-jsdoc': 0,
  },
};
