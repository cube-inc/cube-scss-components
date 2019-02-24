<template>
  <div class="example" :class="exampleClasses">
    <a class="example-dark-toggle" @click.prevent="toggleDark">{{ darkMode ? 'light' : 'dark'}}</a>
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
$example-border-color: $component-border-color !default;
$example-border-radius: $component-border-radius !default;
$example-preview-bg-color: rgba($gray-dark, .05) !default;
$example-preview-dark-bg-color: $gray-darker !default;
$example-preview-bg-square-size: 10px !default;
$example-code-bg-color: $gray-light !default;
.example {
  margin: 1em 0;
  border: 1px solid $example-border-color;
  border-radius: $example-border-radius;
  overflow: hidden;
    position: relative;
  &-preview-scroll {
    .example-preview {
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
    }
  }
  &-dark-toggle {
    position: absolute;
    top: 0;
    right: 0;
    padding: 4px 8px;
    font-size: 9px;
    text-transform: uppercase;
    transition: all 250ms ease;
  }
  &-preview {
    padding: 32px;
    background-color: white;
    background-image:
      linear-gradient(45deg, $example-preview-bg-color 25%, transparent 25%, transparent 75%, $example-preview-bg-color 75%),
      linear-gradient(45deg, $example-preview-bg-color 25%, transparent 25%, transparent 75%, $example-preview-bg-color 75%);
    background-size: $example-preview-bg-square-size $example-preview-bg-square-size;
    background-position: 0 0, ($example-preview-bg-square-size / 2) ($example-preview-bg-square-size / 2);
    transition: all 250ms ease;
  }
  &-code {
    display: block;
    padding: 32px;
    background-color: $example-code-bg-color;
    white-space: pre-wrap;
    font-size: 12px;
    font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  }
  &-dark {
    .example-preview {
      background-color: $example-preview-dark-bg-color;
    }
  }
}
</style>
