const browsers = require('@pixel2html/browserlist')

module.exports = {
  extends: 'stylelint-config-recommended-scss',
  plugins: [
    'stylelint-no-unsupported-browser-features'
  ],
  rules: {
    // Responsible development
    // Always use autoprefixer :)
    'plugin/no-unsupported-browser-features': [
      true,
      {
        'browsers': browsers,
        'ignore': ['rem'],
        'severity': 'warning'
      }
    ],
    // Don't trigger error on empty or yet to be filled files
    'no-empty-source': null,
    'selector-pseudo-class-no-unknown': [ true, {
      // CSS Modules FTW
      'ignorePseudoClasses': [
        'export',
        'import',
        'global',
        'local',
        'composes'
      ]
    }]
  }
}
