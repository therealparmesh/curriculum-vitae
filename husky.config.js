module.exports = {
  hooks: {
    'pre-commit': 'tsc && pretty-quick --staged',
  },
};
