# cube-scss-components

## Why

Because at Cube we manage several web apps and we worry about UI consistency, this project aims to provide basic SCSS components, tailored for SPA and mobile environment.

And because we know you'll customize any CSS framework you use, we strive to keep it as simple and basic as possible.

## Documentation

See the [Documentation Reference](https://cube-scss-components.netlify.com).

## Installation

```bash
yarn add cube-scss-components
```

## Getting Started

Usually you import SCSS components you need and you customize variables to match with your visual identity. There is several ways to do so ; here is one way to make it described below.

From your global `index.scss`:

```scss
// Imports your custom "_variables.scss", overrides !defaults
@import "variables";

// Imports the components you need
@import "node_modules/cube-scss-components/src/scss/scaffoldings";
@import "node_modules/cube-scss-components/src/scss/badge";
@import "node_modules/cube-scss-components/src/scss/bullets";
@import "node_modules/cube-scss-components/src/scss/buttons";
@import "node_modules/cube-scss-components/src/scss/buttons_variants";
@import "node_modules/cube-scss-components/src/scss/cards";
@import "node_modules/cube-scss-components/src/scss/forms";
@import "node_modules/cube-scss-components/src/scss/labels";
@import "node_modules/cube-scss-components/src/scss/list_group";
@import "node_modules/cube-scss-components/src/scss/pagination";
@import "node_modules/cube-scss-components/src/scss/slider";
@import "node_modules/cube-scss-components/src/scss/tables";
@import "node_modules/cube-scss-components/src/scss/types";

// Your other imports here…
```

Your `_variables.scss` file may looks like:

```scss
// Colors
$gray-700: hsl(210, 10%,  30%);
$brand-primary: #8d1760;
$brand-secondary: #ffa7e7;

// Text
$text-color: #54424a;
$link-color: #00c9b1;
$text-muted: lighten($text-color, 30%);

// Fonts
$font-weight-base: 400;
$font-weight-bold: 700;
$font-size-small: 85%;
$line-height-base: 1.5;

// Buttons
$button-primary-color: $brand-primary;

// Component commons
$component-border-radius: 4px;
$component-box-shadow: 0px 3px 16px -2px $gray-700;

// Imports other cube-scss-components variables
@import "node_modules/cube-scss-components/src/scss/_variables.scss";
```
