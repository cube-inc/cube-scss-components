<template>
  <div class="example" :class="exampleClasses">
    <div class="example-preview" ref="preview">
      <slot/>
    </div>
    <div class="example-toolbar">
      <button class="button button-xs" @click="toggleDark">{{ darkMode ? 'Light' : 'Dark'}}</button>
      <button class="button button-xs" @click="copyCode" ref="copyButton">Copy</button>
    </div>
    <code class="example-code code-block" ref="code" v-html="code"></code>
  </div>
</template>

<script>
import vnodesToHtml from '@/services/vnodeService'

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
      this.code = vnodesToHtml(this.$slots.default, { highlight: true })
    },
    toggleDark () {
      this.darkMode = !this.darkMode
    },
    copyCode () {
      this.$clipboard(this.code)
      const button = this.$refs.copyButton
      button.disabled = true
      const initialHtml = button.innerHTML
      button.innerHTML = 'Copied!'
      setTimeout(() => {
        button.innerHTML = initialHtml
        button.disabled = false
      }, 1250)
    }
  },
  mounted () {
    this.format()
  }
}
</script>

<style lang="scss" scoped>
$example-padding: 16px !default;
$example-border-color: $component-border-color !default;
$example-border-radius: $component-border-radius !default;
$example-preview-bg-color: rgba($gray-dark, 0.1) !default;
$example-preview-dark-bg-color: $gray-darker !default;
$example-preview-bg-square-size: 10px !default;
$example-code-bg-color: $gray-light !default;
$example-font-family-code: $font-family-code !default;
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
    padding: $example-padding;
    background-color: white;
    background-image: linear-gradient(
        45deg,
        $example-preview-bg-color 25%,
        transparent 25%,
        transparent 75%,
        $example-preview-bg-color 75%
      ),
      linear-gradient(
        45deg,
        $example-preview-bg-color 25%,
        transparent 25%,
        transparent 75%,
        $example-preview-bg-color 75%
      );
    background-size: $example-preview-bg-square-size
      $example-preview-bg-square-size;
    background-position: 0 0,
      ($example-preview-bg-square-size / 2)
        ($example-preview-bg-square-size / 2);
    transition: all 250ms ease;
  }
  &-toolbar {
    border-top: 1px solid $example-border-color;
    border-bottom: 1px solid $example-border-color;
    display: flex;
    justify-content: flex-end;
    .button {
      border-radius: 0;
    }
  }
  &-code {
    display: block;
    padding: $example-padding;
    background-color: $example-code-bg-color;
    white-space: pre-wrap;
    font-size: 12px;
    font-family: $example-font-family-code;
    color: #212529;
    /deep/
    .code {
      &-tag {
        // color: #000080;
        color: #2f6f9f;
      }
      &-attr {
        // color: #008080;
        color: #4f9fcf;
        &-val {
          // color: #dd1144;
          color: #d44950;
        }
      }
    }
  }
  &-dark {
    .example-preview {
      color: white;
      background-color: $example-preview-dark-bg-color;
    }
  }
}
</style>
