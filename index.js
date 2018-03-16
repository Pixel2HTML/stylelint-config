module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-css-modules'
  ],
  rules: {
    // Don't trigger error on empty or yet to be filled files
    'no-empty-source': null,
  }
}
