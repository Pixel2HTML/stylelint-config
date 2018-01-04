# stylelint-config-pixel2html

[Stylelint](https://stylelint.io/) SCSS config recommendations from Pixel2HTML

Your standard every day bro scss stylelint configuration:


## Installation

If you're using our [Frontend Boilerplate](https://github.com/Pixel2HTML/pixel2html-generator) or our [Shopify Boilerplate](https://github.com/Pixel2HTML/shopify-skeleton) then you don't have to do anything you're already linting like a boss.


## Manual Installation

```bash
npm install stylelint stylelint-config-pixel2html --save-dev
```

## Usage

Just set your stylelint config to:

```json
{
  "extends": "stylelint-config-pixel2html"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to turn off the `block-no-empty` rule, and add the `unit-whitelist` rule:

```json
{
  "extends": "stylelint-config-recommended-scss",
  "rules": {
    "block-no-empty": null,
    "unit-whitelist": ["em", "rem", "s"]
  }
}
```
