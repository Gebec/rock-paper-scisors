module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'chore',
        'ci',
        'docs',
        'feature',
        'fix',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
  },
};
