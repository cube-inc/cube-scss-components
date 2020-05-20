<template>
  <section id="Buttons">
    <h2>Buttons</h2>

    <h3>Button styles</h3>
    <Example>
      <p><button class="button">Button</button></p>
      <p><button class="button button-outline">Outline</button></p>
      <p><button class="button button-filled">Filled</button></p>
      <p><button class="button button-filled button-shadow">Shadow</button></p>
      <p><button class="button button-text">Text</button></p>
      <p><button class="button" disabled>Button</button></p>
      <p><button class="button button-outline" disabled>Outline</button></p>
      <p><button class="button button-filled" disabled>Filled</button></p>
      <p><button class="button button-filled button-shadow" disabled>Shadow</button></p>
      <p><button class="button button-text" disabled>Text</button></p>
    </Example>

    <h3>Button white</h3>
    <Example :dark="true">
      <p><button class="button button-white">White</button></p>
      <p><button class="button button-white button-outline">Outline</button></p>
      <p><button class="button button-white button-filled">Filled</button></p>
      <p><button class="button button-white button-text">Text</button></p>
      <p><button class="button button-white" disabled>White</button></p>
      <p><button class="button button-white button-outline" disabled>Outline</button></p>
      <p><button class="button button-white button-filled" disabled>Filled</button></p>
      <p><button class="button button-white button-text" disabled>Text</button></p>
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
      <div class="button-list">
        <button class="button button-text">Button 1</button>
        <button class="button button-text">Button 2</button>
        <button class="button button-text">Button 3</button>
        <button class="button button-text">Button 4</button>
      </div>
    </Example>

    <h3>Button group</h3>
    <Example>
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
      <div class="button-group">
        <button class="button button-text">Button 1</button>
        <button class="button button-text">Button 2</button>
        <button class="button button-text">Button 3</button>
        <button class="button button-text">Button 4</button>
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
      <div class="button-list">
        <button class="button button-text button-success">Success</button>
        <button class="button button-text button-info">Info</button>
        <button class="button button-text button-warning">Warning</button>
        <button class="button button-text button-danger">Danger</button>
      </div>
      <div class="button-list">
        <button class="button button-text button-success" disabled>Success</button>
        <button class="button button-text button-info" disabled>Info</button>
        <button class="button button-text button-warning" disabled>Warning</button>
        <button class="button button-text button-danger" disabled>Danger</button>
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
      <div class="button-group">
        <button class="button button-text button-success">Success</button>
        <button class="button button-text button-info">Info</button>
        <button class="button button-text button-warning">Warning</button>
        <button class="button button-text button-danger">Danger</button>
      </div>
      <div class="button-group">
        <button class="button button-text button-success" disabled>Success</button>
        <button class="button button-text button-info" disabled>Info</button>
        <button class="button button-text button-warning" disabled>Warning</button>
        <button class="button button-text button-danger" disabled>Danger</button>
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
      <div class="button-list">
        <button class="button button-text button-xs">Extra small</button>
        <button class="button button-text button-sm">Small</button>
        <button class="button button-text">Normal</button>
        <button class="button button-text button-md">Medium</button>
        <button class="button button-text button-lg">Large</button>
      </div>
    </Example>
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
