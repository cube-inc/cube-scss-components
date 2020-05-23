<template>
  <section id="Buttons">
    <h2>Buttons</h2>

    <h3>Styles</h3>
    <Example>
      <div class="button-list">
        <button class="button button-text">Text</button>
        <button class="button">Button</button>
        <button class="button button-outline">Outline</button>
        <button class="button button-filled">Filled</button>
        <button class="button button-filled button-shadow">Shadow</button>
      </div>
      <div class="button-list">
        <button class="button button-text" disabled>Text</button>
        <button class="button" disabled>Button</button>
        <button class="button button-outline" disabled>Outline</button>
        <button class="button button-filled" disabled>Filled</button>
        <button class="button button-filled button-shadow" disabled>Shadow</button>
      </div>
    </Example>

    <h3>Icons</h3>
    <Example>
      <h6>Left</h6>
      <div class="button-list">
        <button class="button"><PersonCropSquare class="icon" /><span>Button</span></button>
        <button class="button button-outline"><PersonCropSquare class="icon" /><span>Outline</span></button>
        <button class="button button-filled"><PersonCropSquare class="icon" /><span>Filled</span></button>
        <button class="button button-filled button-shadow"><PersonCropSquare class="icon" /><span>Shadow</span></button>
        <button class="button button-text"><PersonCropSquare class="icon" /><span>Text</span></button>
      </div>
      <div class="button-list">
        <button class="button" disabled><PersonCropSquare class="icon" /><span>Button</span></button>
        <button class="button button-outline" disabled><PersonCropSquare class="icon" /><span>Outline</span></button>
        <button class="button button-filled" disabled><PersonCropSquare class="icon" /><span>Filled</span></button>
        <button class="button button-filled button-shadow" disabled><PersonCropSquare class="icon" /><span>Shadow</span></button>
        <button class="button button-text" disabled><PersonCropSquare class="icon" /><span>Text</span></button>
      </div>
      <h6>Right</h6>
      <div class="button-list">
        <button class="button"><span>Button</span><ChevronRight class="icon" /></button>
        <button class="button button-outline"><span>Outline</span><ChevronRight class="icon" /></button>
        <button class="button button-filled"><span>Filled</span><ChevronRight class="icon" /></button>
        <button class="button button-filled button-shadow"><span>Shadow</span><ChevronRight class="icon" /></button>
        <button class="button button-text"><span>Text</span><ChevronRight class="icon" /></button>
      </div>
      <div class="button-list">
        <button class="button" disabled><span>Button</span><ChevronRight class="icon" /></button>
        <button class="button button-outline" disabled><span>Outline</span><ChevronRight class="icon" /></button>
        <button class="button button-filled" disabled><span>Filled</span><ChevronRight class="icon" /></button>
        <button class="button button-filled button-shadow" disabled><span>Shadow</span><ChevronRight class="icon" /></button>
        <button class="button button-text" disabled><span>Text</span><ChevronRight class="icon" /></button>
      </div>
      <h6>Group</h6>
      <div class="button-group">
        <button class="button"><PersonCropSquare class="icon" /><span>Text</span></button>
        <button class="button"><CircleRighthalfFill class="icon" /><span>Text</span></button>
        <button class="button"><DocOnClipboard class="icon" /><span>Text</span></button>
        <button class="button"><MoonFill class="icon" /><span>Text</span></button>
        <button class="button"><SunMax class="icon" /><span>Text</span></button>
      </div>
      <div class="button-group">
        <button class="button button-outline"><PersonCropSquare class="icon" /><span>Text</span></button>
        <button class="button button-outline"><CircleRighthalfFill class="icon" /><span>Text</span></button>
        <button class="button button-outline"><DocOnClipboard class="icon" /><span>Text</span></button>
        <button class="button button-outline"><MoonFill class="icon" /><span>Text</span></button>
        <button class="button button-outline"><SunMax class="icon" /><span>Text</span></button>
      </div>
      <div class="button-group">
        <button class="button button-filled"><PersonCropSquare class="icon" /><span>Text</span></button>
        <button class="button button-filled"><CircleRighthalfFill class="icon" /><span>Text</span></button>
        <button class="button button-filled"><DocOnClipboard class="icon" /><span>Text</span></button>
        <button class="button button-filled"><MoonFill class="icon" /><span>Text</span></button>
        <button class="button button-filled"><SunMax class="icon" /><span>Text</span></button>
      </div>
      <h6>No text</h6>
      <div class="button-list">
        <button class="button"><PersonCropSquare class="icon" /></button>
        <button class="button button-outline"><PersonCropSquare class="icon" /></button>
        <button class="button button-filled"><PersonCropSquare class="icon" /></button>
        <button class="button button-filled button-shadow"><PersonCropSquare class="icon" /></button>
        <button class="button button-text"><PersonCropSquare class="icon" /></button>
      </div>
      <div class="button-list">
        <button class="button" disabled><PersonCropSquare class="icon" /></button>
        <button class="button button-outline" disabled><PersonCropSquare class="icon" /></button>
        <button class="button button-filled" disabled><PersonCropSquare class="icon" /></button>
        <button class="button button-filled button-shadow" disabled><PersonCropSquare class="icon" /></button>
        <button class="button button-text" disabled><PersonCropSquare class="icon" /></button>
      </div>
      <h6>Sizes</h6>
      <div class="button-list">
        <button class="button"><PersonCropSquare class="icon icon-sm" /><span>icon-sm</span></button>
        <button class="button button-outline"><PersonCropSquare class="icon icon-sm" /><span>icon-sm</span></button>
        <button class="button button-filled"><PersonCropSquare class="icon icon-sm" /><span>icon-sm</span></button>
        <button class="button button-filled button-shadow"><PersonCropSquare class="icon icon-sm" /><span>icon-sm</span></button>
        <button class="button button-text"><PersonCropSquare class="icon icon-sm" /><span>icon-sm</span></button>
      </div>
      <div class="button-list">
        <button class="button"><PersonCropSquare class="icon icon-xs" /><span>icon-xs</span></button>
        <button class="button button-outline"><PersonCropSquare class="icon icon-xs" /><span>icon-xs</span></button>
        <button class="button button-filled"><PersonCropSquare class="icon icon-xs" /><span>icon-xs</span></button>
        <button class="button button-filled button-shadow"><PersonCropSquare class="icon icon-xs" /><span>icon-xs</span></button>
        <button class="button button-text"><PersonCropSquare class="icon icon-xs" /><span>icon-xs</span></button>
      </div>
    </Example>

    <h3>Colors</h3>
    <Example>
      <h6>Primary (default)</h6>
      <div class="button-list">
        <button class="button button-text">Text</button>
        <button class="button">Button</button>
        <button class="button button-outline">Outline</button>
        <button class="button button-filled">Filled</button>
      </div>
      <div class="button-list">
        <button class="button button-text" disabled>Text</button>
        <button class="button" disabled>Button</button>
        <button class="button button-outline" disabled>Outline</button>
        <button class="button button-filled" disabled>Filled</button>
      </div>
      <h6>Secondary</h6>
      <div class="button-list">
        <button class="button button-secondary button-text">Text</button>
        <button class="button button-secondary">Button</button>
        <button class="button button-secondary button-outline">Outline</button>
        <button class="button button-secondary button-filled">Filled</button>
      </div>
      <div class="button-list">
        <button class="button button-secondary button-text" disabled>Text</button>
        <button class="button button-secondary" disabled>Button</button>
        <button class="button button-secondary button-outline" disabled>Outline</button>
        <button class="button button-secondary button-filled" disabled>Filled</button>
      </div>
      <h6>Success</h6>
      <div class="button-list">
        <button class="button button-success button-text">Text</button>
        <button class="button button-success">Button</button>
        <button class="button button-success button-outline">Outline</button>
        <button class="button button-success button-filled">Filled</button>
      </div>
      <div class="button-list">
        <button class="button button-success button-text" disabled>Text</button>
        <button class="button button-success" disabled>Button</button>
        <button class="button button-success button-outline" disabled>Outline</button>
        <button class="button button-success button-filled" disabled>Filled</button>
      </div>
      <h6>Info</h6>
      <div class="button-list">
        <button class="button button-info button-text">Text</button>
        <button class="button button-info">Button</button>
        <button class="button button-info button-outline">Outline</button>
        <button class="button button-info button-filled">Filled</button>
      </div>
      <div class="button-list">
        <button class="button button-info button-text" disabled>Text</button>
        <button class="button button-info" disabled>Button</button>
        <button class="button button-info button-outline" disabled>Outline</button>
        <button class="button button-info button-filled" disabled>Filled</button>
      </div>
      <h6>Warning</h6>
      <div class="button-list">
        <button class="button button-warning button-text">Text</button>
        <button class="button button-warning">Button</button>
        <button class="button button-warning button-outline">Outline</button>
        <button class="button button-warning button-filled">Filled</button>
      </div>
      <div class="button-list">
        <button class="button button-warning button-text" disabled>Text</button>
        <button class="button button-warning" disabled>Button</button>
        <button class="button button-warning button-outline" disabled>Outline</button>
        <button class="button button-warning button-filled" disabled>Filled</button>
      </div>
      <h6>Danger</h6>
      <div class="button-list">
        <button class="button button-danger button-text">Text</button>
        <button class="button button-danger">Button</button>
        <button class="button button-danger button-outline">Outline</button>
        <button class="button button-danger button-filled">Filled</button>
      </div>
      <div class="button-list">
        <button class="button button-danger button-text" disabled>Text</button>
        <button class="button button-danger" disabled>Button</button>
        <button class="button button-danger button-outline" disabled>Outline</button>
        <button class="button button-danger button-filled" disabled>Filled</button>
      </div>
    </Example>

    <h3>White</h3>
    <Example :dark="true">
      <div class="button-list">
        <button class="button button-white button-text">Text</button>
        <button class="button button-white">White</button>
        <button class="button button-white button-outline">Outline</button>
        <button class="button button-white button-filled">Filled</button>
      </div>
      <div class="button-list">
        <button class="button button-white button-text" disabled>Text</button>
        <button class="button button-white" disabled>White</button>
        <button class="button button-white button-outline" disabled>Outline</button>
        <button class="button button-white button-filled" disabled>Filled</button>
      </div>
    </Example>

    <h3>List</h3>
    <Example>
      <div class="button-list">
        <button class="button button-text">Text 1</button>
        <button class="button button-text">Text 2</button>
        <button class="button button-text">Text 3</button>
        <button class="button button-text">Text 4</button>
      </div>
      <div class="button-list">
        <button class="button">Button 1</button>
        <button class="button">Button 2</button>
        <button class="button">Button 3</button>
        <button class="button">Button 4</button>
      </div>
      <div class="button-list">
        <button class="button button-outline">Outline 1</button>
        <button class="button button-outline">Outline 2</button>
        <button class="button button-outline">Outline 3</button>
        <button class="button button-outline">Outline 4</button>
      </div>
      <div class="button-list">
        <button class="button button-filled">Filled 1</button>
        <button class="button button-filled">Filled 2</button>
        <button class="button button-filled">Filled 3</button>
        <button class="button button-filled">Filled 4</button>
      </div>
      <div class="button-list">
        <button class="button button-filled button-shadow">Shadow 1</button>
        <button class="button button-filled button-shadow">Shadow 2</button>
        <button class="button button-filled button-shadow">Shadow 3</button>
        <button class="button button-filled button-shadow">Shadow 4</button>
      </div>
    </Example>

    <h3>Group</h3>
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
    </Example>

    <h3>Group colors</h3>
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
        <button class="button button-text button-xs"><PersonCropSquare class="icon"/><span>Extra small</span></button>
        <button class="button button-text button-sm"><PersonCropSquare class="icon" /><span>Small</span></button>
        <button class="button button-text"><PersonCropSquare class="icon" /><span>Normal</span></button>
        <button class="button button-text button-md"><PersonCropSquare class="icon" /><span>Medium</span></button>
        <button class="button button-text button-lg"><PersonCropSquare class="icon" /><span>Large</span></button>
      </div>
      <div class="button-list">
        <button class="button button-xs"><PersonCropSquare class="icon"/><span>Extra small</span></button>
        <button class="button button-sm"><PersonCropSquare class="icon" /><span>Small</span></button>
        <button class="button"><PersonCropSquare class="icon" /><span>Normal</span></button>
        <button class="button button-md"><PersonCropSquare class="icon" /><span>Medium</span></button>
        <button class="button button-lg"><PersonCropSquare class="icon" /><span>Large</span></button>
      </div>
      <div class="button-list">
        <button class="button button-outline button-xs"><PersonCropSquare class="icon"/><span>Extra small</span></button>
        <button class="button button-outline button-sm"><PersonCropSquare class="icon" /><span>Small</span></button>
        <button class="button button-outline"><PersonCropSquare class="icon" /><span>Normal</span></button>
        <button class="button button-outline button-md"><PersonCropSquare class="icon" /><span>Medium</span></button>
        <button class="button button-outline button-lg"><PersonCropSquare class="icon" /><span>Large</span></button>
      </div>
      <div class="button-list">
        <button class="button button-filled button-xs"><PersonCropSquare class="icon"/><span>Extra small</span></button>
        <button class="button button-filled button-sm"><PersonCropSquare class="icon" /><span>Small</span></button>
        <button class="button button-filled"><PersonCropSquare class="icon" /><span>Normal</span></button>
        <button class="button button-filled button-md"><PersonCropSquare class="icon" /><span>Medium</span></button>
        <button class="button button-filled button-lg"><PersonCropSquare class="icon" /><span>Large</span></button>
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
