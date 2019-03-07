<template>
  <section>
    <header>
      <h1>Welcome to {{ appInfo.name }}</h1>
    </header>
    <AppNav/>
    <main>
      <h2>Why</h2>
      <p>Because at Cube we manage several web apps and we worry about UI consistency, this project aims to provide basic SCSS components, tailored for SPA and mobile environment.</p>
      <p>And because we know you'll customize any CSS framework you use, we strive to keep it as simple and basic as possible.</p>
    </main>
  </section>
</template>

<script>
import appInfo from '@/services/appInfo'
import AppNav from '@/components/AppNav'
export default {
  components: {
    AppNav
  },
  data () {
    return {
      appInfo,
      routes: {
        about: { name: 'about' },
        documentation: { name: 'documentation' }
      }
    }
  }
}
</script>
