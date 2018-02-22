module.exports = {
  extends: 'stylelint-config-recommended-scss',
  rules: {
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
