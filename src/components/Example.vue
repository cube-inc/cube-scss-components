<template>
  <div class="exemple">
    <div class="preview" ref="preview">
      <slot/>
    </div>
    <code class="code" ref="code">{{ code }}</code>
  </div>
</template>

<script>
import hljs from 'highlight.js/lib/highlight'

export default {
  name: 'Example',
  data () {
    return {
      code: null
    }
  },
  methods: {
    highlight () {
      this.code = this.$refs.preview.innerHTML
        .replace(/^\s+/, '')
        .replace(/ data-v-.+?=""/g, '')
      this.$nextTick(() => {
        hljs.highlightBlock(this.$refs.code)
      })
    }
  },
  mounted () {
    this.highlight()
  }
}
</script>

<style lang="scss" scoped>
.exemple {
  margin: 1em 0;
  border: 1px solid #eeeeee;
  border-radius: 2px;
}
.preview {
  padding: 32px;
  background-color: white;
}
.code {
  display: block;
  padding: 32px;
  background-color: #eeeeee;
  white-space: pre-line;
}
</style>
