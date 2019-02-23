<template>
  <section id="Documentation">
    <header>
      <h1>
        Cube SCSS Components
        <small class="small-block text-muted">Documentation v{{ $root.$options.version }}</small>
      </h1>
    </header>

    <nav class="toc">
      <h2>Table of content</h2>
      <a href="#Badges">Badges</a>
      <a href="#Bullets">Bullets</a>
      <a href="#Buttons">Buttons</a>
      <a href="#Cards">Cards</a>
      <a href="#Forms">Forms</a>
      <a href="#Labels">Labels</a>
      <a href="#ListGroup">List group</a>
      <a href="#Pagination">Pagination</a>
      <a href="#Panels">Panels</a>
      <a href="#Sliders">Sliders</a>
      <a href="#Tables">Tables</a>
      <a href="#Types">Typography</a>
    </nav>

    <main>
      <Buttons/>
      <Badges/>
      <Bullets/>
      <Cards/>
      <Forms/>
      <Labels/>
      <ListGroup/>
      <Pagination/>
      <Panels/>
      <Sliders/>
      <Tables/>
      <Types/>
    </main>
  </section>
</template>

<script>
import Badges from './Badges.vue'
import Bullets from './Bullets.vue'
import Buttons from './Buttons.vue'
import Cards from './Cards.vue'
import Forms from './Forms.vue'
import Labels from './Labels.vue'
import ListGroup from './ListGroup.vue'
import Pagination from './Pagination.vue'
import Panels from './Panels.vue'
import Sliders from './Sliders.vue'
import Tables from './Tables.vue'
import Types from './Types.vue'

export default {
  components: {
    Badges,
    Bullets,
    Buttons,
    Cards,
    Forms,
    Labels,
    ListGroup,
    Pagination,
    Panels,
    Sliders,
    Tables,
    Types
  }
}
</script>

<style lang="scss" scoped>
section {
  margin: 3em 0;
}
.toc {
  margin: 3em 0;
  > a {
    display: block;
    padding: .2em .8em;
    &:hover {
      text-decoration: none;
      background-color: darken($component-bg-color, 5%);
    }
  }
}
</style>
