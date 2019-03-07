<template>
  <section id="Documentation">
    <header>
      <h1>
        Cube SCSS Components
        <small class="small-block text-muted">Documentation v{{ $root.$options.version }}</small>
      </h1>
    </header>

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

    <main>
      <Badges/>
      <Bullets/>
      <Buttons/>
      <Cards/>
      <Forms/>
      <Labels/>
      <ListGroup/>
      <Pagination/>
      <Sliders/>
      <Tables/>
      <Types/>
    </main>
  </section>
</template>

<script>
import Badges from '@/components/Badges.vue'
import Bullets from '@/components/Bullets.vue'
import Buttons from '@/components/Buttons.vue'
import Cards from '@/components/Cards.vue'
import Forms from '@/components/Forms.vue'
import Labels from '@/components/Labels.vue'
import ListGroup from '@/components/ListGroup.vue'
import Pagination from '@/components/Pagination.vue'
import Sliders from '@/components/Sliders.vue'
import Tables from '@/components/Tables.vue'
import Types from '@/components/Types.vue'

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
    padding: 4px 8px;
    margin: 0 -8px;
    border-radius: $component-border-radius;
    transition: all 250ms ease;
    &:hover {
      text-decoration: none;
      background-color: $gray-070;
    }
  }
}
/deep/
section {
  > nav {
    float: right;
    > a {
      display: inline-block;
      line-height: $font-size-h2 * $line-height-base;
    }
  }
}
</style>
