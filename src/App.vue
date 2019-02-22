<template>
  <div id="app">
    <Examples/>
  </div>
</template>

<script>
import Examples from './components/Examples.vue'
import './scss/index.scss'

export default {
  name: 'app',
  components: {
    Examples
  }
}
</script>

<style lang="scss">
#app {
  padding: 3em 2em;
  margin: 0 auto;
  width: 100%;
  max-width: 768px;
}
</style>
