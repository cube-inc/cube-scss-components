<template>
  <header class="header fixed-bottom">
    <div class="container">
      <button @click="toggleDarkMode" class="button button-sm theme-switch">
        <span v-if="darkMode === null">System theme</span>
        <span v-else-if="darkMode === true">Dark</span>
        <span v-else-if="darkMode === false">Light</span>
      </button>
      <button @click="scrollTop" class="button button-sm button-text scroll-top">
        <svg xmlns="http://www.w3.org/2000/svg" width="17.277" height="20" viewBox="0 0 17.277 20"><g transform="translate(-1412.661 -1047.729)"><path d="M21.1-58.271a.971.971,0,0,0,1.01-1.01V-70.739l-.079-2.428,3.415,3.732,2.541,2.507a1.04,1.04,0,0,0,.726.284.969.969,0,0,0,.987-1,1.085,1.085,0,0,0-.34-.76l-7.5-7.51a1.163,1.163,0,0,0-.533-.329H28.73a.962.962,0,0,0,1-1.01.971.971,0,0,0-1-1.021h-15.3a.96.96,0,0,0-.976,1.021.95.95,0,0,0,.976,1.01h7.431a1.077,1.077,0,0,0-.522.329l-7.51,7.51a1.119,1.119,0,0,0-.329.76.963.963,0,0,0,.987,1,1.06,1.06,0,0,0,.726-.284l2.541-2.507,3.415-3.744-.091,2.439v11.458A.974.974,0,0,0,21.1-58.271Z" transform="translate(1400.21 1126)" fill="var(--text-color, #171a1c)"/></g></svg>
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
    scrollTop () {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    },
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
  border-top: 1px solid
    var(--component-border-color, #{$component-border-color});
  background-color: var(--component-background-color, #{$component-bg-color});
  @supports (backdrop-filter: blur()) {
    background-color: var(
      --component-backdrop-background-color,
      #{$component-backdrop-bg-color}
    );
    backdrop-filter: blur(20px) saturate(120%);
  }
}
.container {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0.5em 1em;
  display: flex;
}
.scroll-top {
  margin-left: auto;
}
</style>
