<template>
  <div class="example" :class="exampleClasses">
    <div class="example-preview" ref="preview">
      <a class="example-preview-dark-toggle" @click.prevent="toggleDark">{{ darkMode ? 'light' : 'dark'}}</a>
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
    html: String,
    previewScroll: Boolean,
    dark: Boolean
  },
  data () {
    return {
      darkMode: this.dark,
      code: null
    }
  },
  computed: {
    exampleClasses () {
      return {
        'example-preview-scroll': this.previewScroll,
        'example-dark': this.darkMode
      }
    }
  },
  methods: {
    format () {
      this.code = vnodesToString(this.$slots.default)
      this.$nextTick(() => {
        hljs.highlightBlock(this.$refs.code)
      })
    },
    toggleDark () {
      this.darkMode = !this.darkMode
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
    position: relative;
    padding: 32px;
    background-color: white;
    background-image:
      linear-gradient(45deg, $bg-color 25%, transparent 25%, transparent 75%, $bg-color 75%),
      linear-gradient(45deg, $bg-color 25%, transparent 25%, transparent 75%, $bg-color 75%);
    background-size: $bg-square-size $bg-square-size;
    background-position: 0 0, ($bg-square-size / 2) ($bg-square-size / 2);
    transition: all 250ms ease;
    &-dark-toggle {
      position: absolute;
      top: 0;
      right: 0;
      padding: 4px 8px;
      font-size: 9px;
      text-transform: uppercase;
      transition: all 250ms ease;
    }
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
