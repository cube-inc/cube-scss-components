<template>
  <div id="app">
    <AppMenu />
    <Documentation />
    <footer>
      <div>cube-scss-components v{{ $root.$options.version }}</div>
      <div>Cube Living, Inc. © {{ currentYear }}</div>
    </footer>
  </div>
</template>

<script>
import AppMenu from './components/AppMenu.vue'
import Documentation from './components/Documentation.vue'
import './scss/index.scss'

export default {
  name: 'app',
  components: {
    AppMenu,
    Documentation
  },
  data() {
    const now = new Date()
    return {
      currentYear: now.getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/scss/variables';
#app {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: calc(env(safe-area-inset-top) + 1em) calc(env(safe-area-inset-right) + 1em) calc(env(safe-area-inset-bottom) + 1em) calc(env(safe-area-inset-left) + 1em);
}
footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3em 0;
  padding: 3em 1em;
  color: var(--text-muted);
}
</style>
