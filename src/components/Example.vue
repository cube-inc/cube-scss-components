<template>
  <div class="exemple">
    <div class="preview" ref="preview">
      <slot/>
    </div>
    <code class="code" ref="code">{{ code }}</code>
  </div>
</template>

<script>
import vnodesToString from '@/services/vnodeToString'
import hljs from 'highlight.js/lib/highlight'

export default {
  name: 'Example',
  props: {
    html: String
  },
  data () {
    return {
      code: null
    }
  },
  methods: {
    format () {
      this.code = vnodesToString(this.$slots.default)
      this.$nextTick(() => {
        hljs.highlightBlock(this.$refs.code)
      })
    }
  },
  mounted () {
    this.format()
  }
}
</script>

<style lang="scss" scoped>
$bg-color: rgba($brand-info, .05);
.exemple {
  margin: 1em 0;
  border: 1px solid #eeeeee;
  border-radius: 2px;
}
.preview {
  padding: 32px;
  background-color: white;
  background-image:
    linear-gradient(45deg, $bg-color 25%, transparent 25%, transparent 75%, $bg-color 75%),
    linear-gradient(45deg, $bg-color 25%, transparent 25%, transparent 75%, $bg-color 75%);
  background-size: 10px 10px;
  background-position: 0 0, 5px 5px;
}
.code {
  display: block;
  padding: 32px;
  background-color: #eeeeee;
  white-space: pre-wrap;
  font-size: 12px;
  font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
</style>
