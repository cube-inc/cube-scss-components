<template>
  <div id="app">
    <Documentation/>
    <footer>
      <div>cube-scss-components v{{ $root.$options.version }}</div>
      <div>Cube Living, Inc. © {{ currentYear }}</div>
    </footer>
  </div>
</template>

<script>
import Documentation from './components/Documentation.vue'
import './scss/index.scss'

export default {
  name: 'app',
  components: {
    Documentation
  },
  data () {
    const now = new Date()
    return {
      currentYear: now.getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 0 1em;
}
footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3em 0;
  padding: 3em 1em;
}
</style>
