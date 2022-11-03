# Cards

```scss
@import '~cube-scss-components/src/scss/cards';
```

## Type of cards

```scss
@import '~cube-scss-components/src/scss/cards/base';
@import '~cube-scss-components/src/scss/cards/borderless';
@import '~cube-scss-components/src/scss/cards/shadow';
@import '~cube-scss-components/src/scss/cards/hover';
```

- Base: `.card`
- Borderless: `.card-borderless`
- Shadow: `.card-shadow`
- Hover effect: `.card-hover`

## Content type

```scss
@import '~cube-scss-components/src/scss/cards/media';
@import '~cube-scss-components/src/scss/cards/header';
@import '~cube-scss-components/src/scss/cards/body';
@import '~cube-scss-components/src/scss/cards/footer';
```

- `.card-media`
  - `.card-media-image`
  - `.card-media-overlay`
- `.card-header`
- `.card-body`
- `.card-footer`
  - `.card-footer-space-between`
  - `.card-footer-center`
  - `.card-footer-right`

## List

```scss
@import '~cube-scss-components/src/scss/cards/list';
```

## Grid

```scss
@import '~cube-scss-components/src/scss/cards/grid';
```

## Variables

```scss
@import '~cube-scss-components/src/scss/cards/variables';
```

```scss
$card-border-radius: $component-border-radius !default;
$card-border-size: $component-border-width !default;
$card-border-color: var(--component-border-color, #{$component-border-color}) !default;
$card-text-color: var(--component-color, #{$component-color}) !default;
$card-background-color: var(--component-background-color, #{$component-background-color}) !default;
$card-padding: $component-padding !default;
$card-list-gap: 10px !default;
```
