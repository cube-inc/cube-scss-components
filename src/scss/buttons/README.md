# Buttons

A huge variety of buttons.

```scss
@import '~cube-scss-components/src/scss/buttons';
```

## Types of buttons

```scss
@import '~cube-scss-components/src/scss/buttons/base';
@import '~cube-scss-components/src/scss/buttons/filled';
@import '~cube-scss-components/src/scss/buttons/outline';
@import '~cube-scss-components/src/scss/buttons/text';
@import '~cube-scss-components/src/scss/buttons/shadow';
```

- Base: `.button`
- Filled: `.button-filled`
- Outline: `.button-outline`
- Text: `.button-text`
- Shadow: `.button-shadow`

## Lists

```scss
@import '~cube-scss-components/src/scss/buttons/list';
```

- Column orientation: `.button-list-column`
- Alignment:
  - `.button-list-left`
  - `.button-list-center`
  - `.button-list-right`
- Distribution:
  - `.button-list-space-between`
  - `.button-list-grow`

## Groups

```scss
@import '~cube-scss-components/src/scss/buttons/group';
```

- Distribution: `.button-group-grow`

## Colors

```scss
@import '~cube-scss-components/src/scss/buttons/white';
@import '~cube-scss-components/src/scss/buttons/success';
@import '~cube-scss-components/src/scss/buttons/info';
@import '~cube-scss-components/src/scss/buttons/waring';
@import '~cube-scss-components/src/scss/buttons/danger';
```

- White: `.button-white`
- Success: `.button-success`
- Info: `.button-info`
- Warning: `.button-warning`
- Danger: `.button-danger`

## Sizes

```scss
@import '~cube-scss-components/src/scss/buttons/sizes';
```

- `.button-xs`
- `.button-sm`
- `.button-md`
- `.button-lg`

## Variables

```scss
@import '~cube-scss-components/src/scss/buttons/variables';
```

```scss
$button-font-family: inherit !default;
$button-font-size: $font-size-sm !default;
$button-font-weight: 500 !default;
$button-line-height: 1.5rem !default;
$button-text-transform: uppercase !default;
$button-border-radius: $component-border-radius-sm !default;
$button-padding-y: $component-padding-sm !default;
$button-padding-x: $component-padding !default;
$button-padding: $button-padding-y $button-padding-x !default;
$button-min-width: 120px !default;
$button-min-width-xs: 80px !default;
$button-min-width-sm: 100px !default;
$button-min-width-md: 140px !default;
$button-min-width-lg: 140px !default;
$button-transition: all 100ms ease !default;

// button colors
$button-primary-color: $primary !default;
$button-primary-color-default: rgba($primary, 0.05) !default;
$button-primary-color-hover: rgba($primary, 0.15) !default;
$button-primary-color-active: rgba($primary, 0.2) !default;
$button-success-color: $success !default;
$button-info-color: $info !default;
$button-warning-color: $warning !default;
$button-danger-color: $danger !default;

// button-list
$button-list-gap: 4px !default;

// button-outline
$button-outline-border-color: var(--component-border-color, #{$component-border-color}) !default;
$button-outline-background-color: transparent !default;
$button-outline-padding: $button-padding !default;

// button-filled
$button-filled-color: $white !default;
$button-filled-background-color: $button-primary-color !default;
$button-filled-disabled-color: lighten(grayscale($button-filled-color), 25%) !default;
$button-filled-disabled-background-color: lighten(grayscale($button-filled-background-color), 25%) !default;
$button-filled-padding: $button-padding !default;

// button-xs
$button-font-size-xs: 9px !default;
$button-padding-xs: 0 $component-padding-xs !default;

// button-sm
$button-font-size-sm: 11px !default;
$button-padding-sm: $component-padding-xs $component-padding-sm !default;

// button-md
$button-font-size-md: 14px !default;
$button-padding-md: $component-padding $component-padding-md !default;

// button-lg
$button-font-size-lg: 16px !default;
$button-padding-lg: $component-padding-md $component-padding-lg !default;

// button-shadow
$button-shadow: $component-box-shadow !default;
$button-shadow-hover: $component-box-shadow-hover !default;
$button-shadow-active: $component-box-shadow-active !default;
```
