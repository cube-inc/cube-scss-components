<template>
  <nav class="app-nav">
    <router-link :to="routes.home">Home</router-link>
    <router-link :to="routes.documentation">Documentation</router-link>
    <a href="https://github.com/cube-inc/cube-scss-components" target="_blank">GitHub</a>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      routes: {
        home: { name: 'home' },
        documentation: { name: 'documentation' }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app-nav {
  display: flex;
  > a {
    padding: .5em 1em;
  }
}
</style>
