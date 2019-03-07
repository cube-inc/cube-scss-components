<template>
  <div id="app">
    <router-view/>
    <footer>
      <div>{{ appInfo.fullName }}</div>
      <div>Cube Living, Inc. © {{ currentYear }}</div>
    </footer>
  </div>
</template>

<script>
import appInfo from '@/services/appInfo'
import './scss/index.scss'

export default {
  name: 'app',
  data () {
    const now = new Date()
    return {
      appInfo,
      currentYear: now.getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  max-width: 1024px;
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
