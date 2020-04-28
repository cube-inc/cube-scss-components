<template>
  <section id="Documentation">
    <header>
      <h1>
        Cube SCSS Components
        <small class="small-block text-muted">Documentation v{{ $root.$options.version }}</small>
      </h1>
    </header>
    <AppNav />
    <main>
      <Badges />
      <Bullets />
      <Buttons />
      <Cards />
      <Forms />
      <Labels />
      <ListGroup />
      <Pagination />
      <Sliders />
      <Tables />
      <Types />
    </main>
  </section>
</template>

<script>
import AppNav from './AppNav.vue'
import Badges from './Badges.vue'
import Bullets from './Bullets.vue'
import Buttons from './Buttons.vue'
import Cards from './Cards.vue'
import Forms from './Forms.vue'
import Labels from './Labels.vue'
import ListGroup from './ListGroup.vue'
import Pagination from './Pagination.vue'
import Sliders from './Sliders.vue'
import Tables from './Tables.vue'
import Types from './Types.vue'

export default {
  components: {
    AppNav,
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
</style>
