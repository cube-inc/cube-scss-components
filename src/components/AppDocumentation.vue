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
import Badges from './docs/Badges.vue'
import Bullets from './docs/Bullets.vue'
import Buttons from './docs/Buttons.vue'
import Cards from './docs/Cards.vue'
import Forms from './docs/Forms.vue'
import Labels from './docs/Labels.vue'
import ListGroup from './docs/ListGroup.vue'
import Pagination from './docs/Pagination.vue'
import Sliders from './docs/Sliders.vue'
import Tables from './docs/Tables.vue'
import Types from './docs/Types.vue'

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
