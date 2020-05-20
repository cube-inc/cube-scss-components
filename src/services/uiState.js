import Vue from 'vue'

export const LIGHT = 'light'
export const DARK = 'dark'

export default new Vue({
  data() {
    return {
      systemColorScheme: null,
      userColorScheme: null
    }
  },
  computed: {
    colorScheme() {
      return this.userColorScheme === null ? this.systemColorScheme : this.userColorScheme
    }
  },
  methods: {
    /**
     * Update state.systemColorScheme on matchMedia matches
     * @param {MediaQueryListEvent} event
     */
    onMatchMedia(event) {
      this.systemColorScheme = this.convertMatchMediaMatches(event.matches)
    },
    /**
     * Converts the matchMedia matches value
     * @param {boolean} matches
     */
    convertMatchMediaMatches(matches) {
      return matches ? DARK : LIGHT
    },
    cycleUserColorScheme() {
      if (this.userColorScheme === null) {
        this.userColorScheme = DARK
      } else if (this.userColorScheme === DARK) {
        this.userColorScheme = LIGHT
      } else if (this.userColorScheme === LIGHT) {
        this.userColorScheme = null
      }
    }
  },
  created() {
    this.matchMedia = window.matchMedia(`(prefers-color-scheme: ${DARK})`)
    this.matchMedia.addEventListener ? this.matchMedia.addEventListener('change', this.onMatchMedia) : this.matchMedia.addListener(this.onMatchMedia)
    this.systemColorScheme = this.convertMatchMediaMatches(this.matchMedia.matches)
  },
  beforeDestroy() {
    this.matchMedia.addEventListener ? this.matchMedia.removeEventListener('change', this.onMatchMedia) : this.matchMedia.removeListener(this.onMatchMedia)
  }
})
