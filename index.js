const BROWSERS = [
  'last 2 Chrome versions',
  'last 2 ChromeAndroid versions',
  'last 2 Firefox versions',
  'last 2 Safari versions',
  'last 2 ios versions',
  'last 2 edge versions',
  'last 2 ie versions',
  'last 2 Opera versions'
]

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
        'browsers': BROWSERS,
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
        'local'
      ]
    }]
  }
}
