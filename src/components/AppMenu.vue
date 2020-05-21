<template>
  <header class="header fixed-bottom">
    <div class="container">
      <transition name="fade" mode="out-in">
        <button v-if="userColorScheme === null" key="null" @click="toggleDarkMode" class="button theme-switch">
          <SunMax v-if="systemColorScheme === LIGHT" class="icon icon-sm" />
          <MoonFill v-else-if="systemColorScheme === DARK" class="icon icon-sm" />
          <CircleRighthalfFill v-else class="icon icon-sm" />
          <span>System theme</span>
        </button>
        <button v-else-if="userColorScheme === DARK" key="dark" @click="toggleDarkMode" class="button theme-switch">
          <MoonFill class="icon icon-sm" />
          <span>Dark theme</span>
        </button>
        <button v-else-if="userColorScheme === LIGHT" key="light" @click="toggleDarkMode" class="button theme-switch">
          <SunMax class="icon icon-sm" />
          <span>Light theme</span>
        </button>
      </transition>
      <button @click="scrollTop" class="button scroll-top">
        <ArrowUpToLine class="icon icon-sm" />
      </button>
    </div>
  </header>
</template>

<script>
import uiState, { LIGHT, DARK } from '@/services/uiState'

export default {
  data() {
    return {
      LIGHT,
      DARK
    }
  },
  computed: {
    systemColorScheme: () => uiState.systemColorScheme,
    userColorScheme: () => uiState.userColorScheme,
    userColorSchemeName() {
      switch (this.userColorScheme) {
        case LIGHT:
          return 'Light'
        case DARK:
          return 'Dark'
        default:
          return 'System theme'
      }
    }
  },
  methods: {
    scrollTop() {
      window.history.replaceState(null, null, ' ')
      window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    },
    toggleDarkMode() {
      uiState.cycleUserColorScheme()
      this.updateBodyClass()
    },
    updateBodyClass() {
      const { classList } = document.body
      classList.remove('light-color-scheme')
      classList.remove('dark-color-scheme')
      switch (this.userColorScheme) {
        case LIGHT:
          classList.add('light-color-scheme')
          break
        case DARK:
          classList.add('dark-color-scheme')
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/scss/variables';
.header {
  border-top: 1px solid var(--component-border-color, #{$component-border-color});
  background-color: var(--component-background-color, #{$component-background-color});
  @supports (backdrop-filter: blur()) {
    background-color: var(--component-backdrop-background-color, #{$component-backdrop-background-color});
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
