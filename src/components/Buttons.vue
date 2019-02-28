<template>
  <section id="Buttons">
    <nav><a href="#Toc">Top</a></nav>
    <h2>Buttons</h2>

    <h3>Button styles</h3>
    <Example>
      <div class="button-list">
        <button class="button">Button</button>
        <button class="button button-outline">Outline</button>
        <button class="button button-filled">Filled</button>
        <button class="button button-filled button-shadow">Shadow</button>
      </div>
      <div class="button-list">
        <button class="button" disabled>Button</button>
        <button class="button button-outline" disabled>Outline</button>
        <button class="button button-filled" disabled>Filled</button>
        <button class="button button-filled button-shadow" disabled>Shadow</button>
      </div>
    </Example>

    <h3>Button white</h3>
    <Example :dark="true">
      <div class="button-list">
        <button class="button button-white">White</button>
        <button class="button button-white button-outline">Outline</button>
        <button class="button button-white button-filled">Filled</button>
      </div>
      <div class="button-list">
        <button class="button button-white" disabled>White</button>
        <button class="button button-white button-outline" disabled>Outline</button>
        <button class="button button-white button-filled" disabled>Filled</button>
      </div>
    </Example>

    <h3>Button list</h3>
    <Example>
      <div class="button-list">
        <button class="button">Button 1</button>
        <button class="button">Button 2</button>
        <button class="button">Button 3</button>
        <button class="button">Button 4</button>
      </div>
      <div class="button-list">
        <button class="button button-outline">Button 1</button>
        <button class="button button-outline">Button 2</button>
        <button class="button button-outline">Button 3</button>
        <button class="button button-outline">Button 4</button>
      </div>
      <div class="button-list">
        <button class="button button-filled">Button 1</button>
        <button class="button button-filled">Button 2</button>
        <button class="button button-filled">Button 3</button>
        <button class="button button-filled">Button 4</button>
      </div>
      <div class="button-list">
        <button class="button button-filled button-shadow">Button 1</button>
        <button class="button button-filled button-shadow">Button 2</button>
        <button class="button button-filled button-shadow">Button 3</button>
        <button class="button button-filled button-shadow">Button 4</button>
      </div>
    </Example>

    <h3>Button group</h3>
    <Example :previewScroll="true">
      <div class="button-group">
        <button class="button">Button 1</button>
        <button class="button">Button 2</button>
        <button class="button">Button 3</button>
        <button class="button">Button 4</button>
      </div>
      <div class="button-group">
        <button class="button button-outline">Button 1</button>
        <button class="button button-outline">Button 2</button>
        <button class="button button-outline">Button 3</button>
        <button class="button button-outline">Button 4</button>
      </div>
      <div class="button-group">
        <button class="button button-filled">Button 1</button>
        <button class="button button-filled">Button 2</button>
        <button class="button button-filled">Button 3</button>
        <button class="button button-filled">Button 4</button>
      </div>
    </Example>

    <h3>Button colors</h3>
    <Example>
      <div class="button-list">
        <button class="button button-success">Success</button>
        <button class="button button-info">Info</button>
        <button class="button button-warning">Warning</button>
        <button class="button button-danger">Danger</button>
      </div>
      <div class="button-list">
        <button class="button button-success" disabled>Success</button>
        <button class="button button-info" disabled>Info</button>
        <button class="button button-warning" disabled>Warning</button>
        <button class="button button-danger" disabled>Danger</button>
      </div>
      <div class="button-list">
        <button class="button button-outline button-success">Success</button>
        <button class="button button-outline button-info">Info</button>
        <button class="button button-outline button-warning">Warning</button>
        <button class="button button-outline button-danger">Danger</button>
      </div>
      <div class="button-list">
        <button class="button button-outline button-success" disabled>Success</button>
        <button class="button button-outline button-info" disabled>Info</button>
        <button class="button button-outline button-warning" disabled>Warning</button>
        <button class="button button-outline button-danger" disabled>Danger</button>
      </div>
      <div class="button-list">
        <button class="button button-filled button-success">Success</button>
        <button class="button button-filled button-info">Info</button>
        <button class="button button-filled button-warning">Warning</button>
        <button class="button button-filled button-danger">Danger</button>
      </div>
      <div class="button-list">
        <button class="button button-filled button-success" disabled>Success</button>
        <button class="button button-filled button-info" disabled>Info</button>
        <button class="button button-filled button-warning" disabled>Warning</button>
        <button class="button button-filled button-danger" disabled>Danger</button>
      </div>
    </Example>

    <h3>Button group colors</h3>
    <Example>
      <div class="button-group">
        <button class="button button-success">Success</button>
        <button class="button button-info">Info</button>
        <button class="button button-warning">Warning</button>
        <button class="button button-danger">Danger</button>
      </div>
      <div class="button-group">
        <button class="button button-success" disabled>Success</button>
        <button class="button button-info" disabled>Info</button>
        <button class="button button-warning" disabled>Warning</button>
        <button class="button button-danger" disabled>Danger</button>
      </div>
      <div class="button-group">
        <button class="button button-outline button-success">Success</button>
        <button class="button button-outline button-info">Info</button>
        <button class="button button-outline button-warning">Warning</button>
        <button class="button button-outline button-danger">Danger</button>
      </div>
      <div class="button-group">
        <button class="button button-outline button-success" disabled>Success</button>
        <button class="button button-outline button-info" disabled>Info</button>
        <button class="button button-outline button-warning" disabled>Warning</button>
        <button class="button button-outline button-danger" disabled>Danger</button>
      </div>
      <div class="button-group">
        <button class="button button-filled button-success">Success</button>
        <button class="button button-filled button-info">Info</button>
        <button class="button button-filled button-warning">Warning</button>
        <button class="button button-filled button-danger">Danger</button>
      </div>
      <div class="button-group">
        <button class="button button-filled button-success" disabled>Success</button>
        <button class="button button-filled button-info" disabled>Info</button>
        <button class="button button-filled button-warning" disabled>Warning</button>
        <button class="button button-filled button-danger" disabled>Danger</button>
      </div>
    </Example>

    <h3>Button sizes</h3>
    <Example>
      <div class="button-list">
        <button class="button button-xs">Extra small</button>
        <button class="button button-sm">Small</button>
        <button class="button">Normal</button>
        <button class="button button-md">Medium</button>
        <button class="button button-lg">Large</button>
      </div>
      <div class="button-list">
        <button class="button button-outline button-xs">Extra small</button>
        <button class="button button-outline button-sm">Small</button>
        <button class="button button-outline">Normal</button>
        <button class="button button-outline button-md">Medium</button>
        <button class="button button-outline button-lg">Large</button>
      </div>
      <div class="button-list">
        <button class="button button-filled button-xs">Extra small</button>
        <button class="button button-filled button-sm">Small</button>
        <button class="button button-filled">Normal</button>
        <button class="button button-filled button-md">Medium</button>
        <button class="button button-filled button-lg">Large</button>
      </div>
    </Example>

    <h3>Variables</h3>
    <Style lang="scss">
      $button-font-family: inherit !default;
      $button-font-size: $font-size-sm !default;
      $button-font-weight: 500 !default;
      $button-text-transform: uppercase !default;
      $button-border-radius: $component-border-radius-sm !default;
      $button-padding: 10px 10px !default;
      $button-transition: all 100ms ease !default;

      // button colors
      $button-primary-color: $brand-primary !default;
      $button-success-color: $brand-success !default;
      $button-info-color: $brand-info !default;
      $button-warning-color: $brand-warning !default;
      $button-danger-color: $brand-danger !default;

      // button-list
      $button-list-gap: 2px !default;

      // button-outline
      $button-outline-border-color: $component-border-color !default;
      $button-outline-bg-color: transparent !default;
      $button-outline-padding: $button-padding !default;

      // button-filled
      $button-filled-color: white !default;
      $button-filled-bg-color: $button-primary-color !default;
      $button-filled-padding: $button-padding !default;

      // button-xs
      $button-font-size-xs: 9px;
      $button-padding-xs: 5px 10px !default;

      // button-sm
      $button-font-size-sm: 11px;
      $button-padding-sm: 8px 16px !default;

      // button-md
      $button-font-size-md: 14px;
      $button-padding-md: 11px 22px !default;

      // button-lg
      $button-font-size-lg: 16px;
      $button-padding-lg: 12px 24px !default;

      // button-shadow
      $button-shadow: $component-box-shadow !default;
      $button-shadow-hover: $button-shadow !default;
      $button-shadow-active: 0px 2px 2px -1px $gray-700 !default;
    </Style>

  </section>
</template>

<style lang="scss" scoped>
.button-list {
  margin-top: 1em;
  margin-bottom: 1em;
}
.button-group {
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>
