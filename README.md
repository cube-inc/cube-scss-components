# cube-scss-components

## Key features

- Dart Sass
- Mobile first
- Modern
- Fluid
- Responsive
- Composable
- Best practices
- Clean
- Functional
- Import what you need

## Why

Because at Cube we manage many web apps and we worry about consistency, this project aims to provide basic SCSS scaffoldings and components, tailored for SPA and mobile web projects.

## Demo

See the [demo](https://cube-scss-components.netlify.com).

## Installation

```bash
yarn add cube-scss-components
```

## Getting Started

Here is one way to get started with Cube SCSS Components.

From your main `index.scss` file:

```scss
// Imports your custom "_variables.scss" and overrides !defaults
@import 'variables';

// Imports Cube SCSS Components
@import 'node_modules/cube-scss-components/src/scss';

// Your other imports here…
```

Your `_variables.scss` file may looks like:

```scss
// Loads the "disabled" preset (all components disabled by default), otherwise all components will be written down on your SCSS
@import 'node_modules/cube-scss-components/src/scss/disabled';

// Then, enable the components you need
$badge-enabled: true;
$bullet-enabled: true;
$button-enabled: true;
$button-size-enabled: true;
$button-text-enabled: true;
$button-outline-enabled: true;
$button-filled-enabled: true;
$button-shadow-enabled: true;
$button-secondary-enabled: true;
$button-success-enabled: true;
$button-info-enabled: true;
$button-warning-enabled: true;
$button-danger-enabled: true;
$button-white-enabled: true;
$card-enabled: true;
$color-enabled: true;
$dark-color-scheme-enabled: true;
$prefers-color-scheme-enabled: true;
$form-enabled: true;
$label-enabled: true;
$layout-enabled: true;
$list-group-enabled: true;
$pagination-enabled: true;
$table-enabled: true;
$type-enabled: true;
$type-responsive-fonts-enabled: true;

///
/// Override defaults
///

// Colors
$gray-700: hsl(210, 10%, 30%);
$primary: #8d1760;
$secondary: #ffa7e7;

// Text
$text-color: #54424a;
$link-color: #00c9b1;
$muted: lighten($text-color, 30%);

// Fonts
$font-weight-base: 400;
$font-weight-bold: 700;
$font-size-small: 85%;
$line-height-base: 1.5;

// Buttons
$button-primary-color: $primary;

// Component commons
$component-border-radius: 4px;
$component-box-shadow: 0px 3px 16px -2px $gray-700;

// Imports other cube-scss-components variables.
// Should be imported at the end of your own custom variables because of variables dependencies
@import 'node_modules/cube-scss-components/src/scss/_variables.scss';
```
