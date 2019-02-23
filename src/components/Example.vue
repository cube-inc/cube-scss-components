<template>
  <div class="example">
    <div class="example-preview" ref="preview">
      <slot/>
    </div>
    <code class="example-code" ref="code">{{ code }}</code>
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
$bg-square-size: 10px;
.example {
  margin: 1em 0;
  border: 1px solid #eeeeee;
  border-radius: $component-border-radius;
  overflow: hidden;
  &-preview-scroll {
    .example-preview {
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
    }
  }
  &-preview {
    padding: 32px;
    background-color: white;
    background-image:
      linear-gradient(45deg, $bg-color 25%, transparent 25%, transparent 75%, $bg-color 75%),
      linear-gradient(45deg, $bg-color 25%, transparent 25%, transparent 75%, $bg-color 75%);
    background-size: $bg-square-size $bg-square-size;
    background-position: 0 0, ($bg-square-size / 2) ($bg-square-size / 2);
  }
  &-code {
    display: block;
    padding: 32px;
    background-color: $component-bg-color-light;
    white-space: pre-wrap;
    font-size: 12px;
    font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  }
  &-dark {
    .example-preview {
      background-color: $gray-base;
    }
  }
}
</style>
