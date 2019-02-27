# cube-scss-components

## Why

Because at Cube we manage several web apps and we worry about UI consistency, this project aims to provide basic SCSS components, tailored for SPA and mobile environment.

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

// Other imports here…

// Imports the components you need
@import "node_modules/cube-scss-components/src/scss/scaffoldings";
@import "node_modules/cube-scss-components/src/scss/badge";
@import "node_modules/cube-scss-components/src/scss/bullets";
@import "node_modules/cube-scss-components/src/scss/buttons";
@import "node_modules/cube-scss-components/src/scss/buttons_outline";
@import "node_modules/cube-scss-components/src/scss/buttons_filled";
@import "node_modules/cube-scss-components/src/scss/buttons_variants";
@import "node_modules/cube-scss-components/src/scss/buttons_list";
@import "node_modules/cube-scss-components/src/scss/buttons_group";
@import "node_modules/cube-scss-components/src/scss/cards";
@import "node_modules/cube-scss-components/src/scss/forms";
@import "node_modules/cube-scss-components/src/scss/gradients";
@import "node_modules/cube-scss-components/src/scss/labels";
@import "node_modules/cube-scss-components/src/scss/list_group";
@import "node_modules/cube-scss-components/src/scss/pagination";
@import "node_modules/cube-scss-components/src/scss/slider";
@import "node_modules/cube-scss-components/src/scss/tables";
@import "node_modules/cube-scss-components/src/scss/types";
```

Your `_variables.scss` file may looks like:

```scss
// Colors
$brand-primary: #8d1760;
$brand-secondary: #FFA7E7;
$gray-darker: #4f5458;

// Text
$text-color: #54424A;
$link-color: #00C9B1;
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
$component-box-shadow: 0px 3px 16px -2px $gray-darker;

// Imports cube-scss-components variables to let them be available to your JS components by just importing your custom "_variables.scss"
@import "node_modules/cube-scss-components/src/scss/_variables.scss";

```
