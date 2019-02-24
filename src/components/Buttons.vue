<template>
  <section id="Buttons">
    <nav><a href="#Toc">Top</a></nav>
    <h2>Buttons</h2>

    <h3>Button style</h3>
    <Example>
      <div class="button-list">
        <button class="button">Button</button>
        <button class="button button-outline">Outline</button>
        <button class="button button-filled">Filled</button>
      </div>
      <div class="button-list">
        <button class="button" disabled>Button</button>
        <button class="button button-outline" disabled>Outline</button>
        <button class="button button-filled" disabled>Filled</button>
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
        <button class="button button-outline button-success">Success</button>
        <button class="button button-outline button-info">Info</button>
        <button class="button button-outline button-warning">Warning</button>
        <button class="button button-outline button-danger">Danger</button>
      </div>
      <div class="button-list">
        <button class="button button-filled button-success">Success</button>
        <button class="button button-filled button-info">Info</button>
        <button class="button button-filled button-warning">Warning</button>
        <button class="button button-filled button-danger">Danger</button>
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

  </section>
</template>

<style lang="scss" scoped>
.button-list {
  margin: 1em auto;
}
.button-group {
  margin: 1em auto;
}
</style>
