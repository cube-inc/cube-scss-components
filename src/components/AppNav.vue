<template>
  <nav id="Toc" class="toc">
    <h2>Table of content</h2>
    <a href="#Badges">Badges</a>
    <a href="#Bullets">Bullets</a>
    <a href="#Buttons">Buttons</a>
    <a href="#Cards">Cards</a>
    <a href="#Forms">Forms</a>
    <a href="#Labels">Labels</a>
    <a href="#ListGroup">List group</a>
    <a href="#Pagination">Pagination</a>
    <a href="#Sliders">Sliders</a>
    <a href="#Tables">Tables</a>
    <a href="#Types">Typography</a>
  </nav>
</template>

<style lang="scss" scoped>
@import '~@/scss/variables';
.toc {
  margin: 3em 0;
  > a {
    display: block;
    padding: 4px 8px;
    margin: 0 -8px;
    border-radius: $component-border-radius;
    transition: all 250ms ease;
    &:hover {
      text-decoration: none;
      background-color: var(--component-background-color-hover);
    }
  }
}
</style>
