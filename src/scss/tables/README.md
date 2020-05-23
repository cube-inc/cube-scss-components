# Tables

```scss
@import '~cube-scss-components/src/scss/tables';
```

## Types of tables

```scss
@import '~cube-scss-components/src/scss/tables/base';
@import '~cube-scss-components/src/scss/tables/hover';
@import '~cube-scss-components/src/scss/tables/striped';
@import '~cube-scss-components/src/scss/tables/bordered';
@import '~cube-scss-components/src/scss/tables/borderless';
```

- Base: `.table`
- Hover: `.table-hover`
- Striped: `.table-striped`
- Bordered: `.table-bordered`
- Borderless: `.table-borderless`

## Variables

```scss
@import '~cube-scss-components/src/scss/buttons/variables';
```

```scss
$table-color: var(--text-color, #{$text-color}) !default;
$table-cell-padding-y: 0.3rem !default;
$table-cell-padding-x: 0.6rem !default;
$table-cell-padding: $table-cell-padding-y $table-cell-padding-x !default;
$table-cell-hover-background-color: var(--component-background-color-hover, #{$component-background-color-hover}) !default;
$table-cell-striped-background-color: var(--component-background-color-alt, #{$component-background-color-alt}) !default;
$table-border-size: $component-border-width !default;
$table-border-color: var(--component-border-color, #{$component-border-color}) !default;
$table-border-radius: $component-border-radius !default;
```
