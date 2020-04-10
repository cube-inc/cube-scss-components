<template>
  <header class="header fixed-bottom">
    <div class="container">
      <button @click="toggleDarkMode" class="button button-sm button-outline theme-switch">
        <span v-if="darkMode === null">System theme</span>
        <span v-else-if="darkMode === true">Dark</span>
        <span v-else-if="darkMode === false">Light</span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      darkMode: null
    }
  },
  methods: {
    toggleDarkMode () {
      if (this.darkMode === null) {
        this.darkMode = true
      } else if (this.darkMode === true) {
        this.darkMode = false
      } else if (this.darkMode === false) {
        this.darkMode = null
      }
      this.updateBodyClass()
    },
    updateBodyClass () {
      const { classList } = document.body
      if (this.darkMode === null) {
        classList.remove('light-color-scheme')
        classList.remove('dark-color-scheme')
      } else if (this.darkMode) {
        classList.add('dark-color-scheme')
        classList.remove('light-color-scheme')
      } else {
        classList.remove('dark-color-scheme')
        classList.add('light-color-scheme')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  border-top: 1px solid $component-border-color;
  background-color: rgba($white, 0.9);
  @supports (backdrop-filter: blur()) {
    background-color: rgba($white, 0.6);
    backdrop-filter: blur(20px) saturate(120%);
  }
}
.container {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 1em;
  display: flex;
}
.theme-switch {
  margin-left: auto;
}
</style>
