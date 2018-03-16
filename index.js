module.exports = {
  extends: [
    'stylelint-config-css-modules',
    'stylelint-config-recommended-scss',
  ],
  rules: {
    // Don't trigger error on empty or yet to be filled files
    'no-empty-source': null,
  }
}
