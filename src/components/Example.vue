<template>
  <section class="example">
    <div class="example-preview" :class="examplePreviewClasses" ref="preview">
      <slot />
    </div>
    <div class="example-toolbar">
      <div class="button-group">
        <button class="button button-xs" @click="toggleDark">
          <transition name="fade" mode="out-in">
            <SunMax v-if="previewDarkColorScheme" class="icon"/>
            <MoonFill v-else class="icon"/>
          </transition>
        </button>
        <button class="button button-xs" @click="copyCode">
          <transition name="fade" mode="out-in">
            <span v-if="copied">Copied!</span>
            <DocOnClipboard v-else class="icon" />
          </transition>
        </button>
      </div>
    </div>
    <code class="example-code code-block" ref="code" v-html="code"></code>
  </section>
</template>

<script>
import uiState, { DARK } from '@/services/uiState'

import MoonFill from './icons/MoonFill.vue'
import SunMax from './icons/SunMax.vue'
import DocOnClipboard from './icons/DocOnClipboard.vue'
import vnodesToHtml from '@/services/vnodeService'

export default {
  name: 'Example',
  components: {
    MoonFill,
    SunMax,
    DocOnClipboard
  },
  props: {
    dark: { type: Boolean, default: null }
  },
  data() {
    return {
      reverseColorScheme: false,
      code: null,
      copied: false
    }
  },
  computed: {
    previewDarkColorScheme () {
      return this.reverseColorScheme
        ? uiState.colorScheme !== DARK
        : uiState.colorScheme === DARK
    },
    examplePreviewClasses() {
      return {
        'example-preview-background-dark': this.dark,
        'light-color-scheme': this.previewDarkColorScheme === false,
        'dark-color-scheme': this.previewDarkColorScheme === true
      }
    }
  },
  methods: {
    format() {
      this.code = vnodesToHtml(this.$slots.default, { highlight: true })
    },
    toggleDark() {
      this.reverseColorScheme = !this.reverseColorScheme
    },
    copyCode() {
      const html = this.$refs.code.innerText
      this.$clipboard(html)
      this.copied = true
      setTimeout(() => {
        this.copied = false
      }, 1250)
    }
  },
  updated() {
    this.format()
  },
  mounted() {
    this.format()
  }
}
</script>

<style lang="scss" scoped>
@import '~@/scss/variables';
$example-padding: 16px !default;
$example-color: var(--component-color, #{$component-color}) !default;
$example-border-color: var(--component-border-color, #{$component-border-color}) !default;
$example-border-radius: $component-border-radius !default;
$example-preview-color: var(--component-color, #{$component-color}) !default;
$example-preview-background-color: var(--component-background-color, #{$component-background-color}) !default;
$example-preview-background-color-dark: $component-background-color-dark !default;
$example-preview-background-square-size: 10px !default;
$example-code-background-color: var(--component-background-color-alt, #{$component-background-color-alt}) !default;

$code-tag-color: $blue;
$code-attr-color: $cyan;
$code-attr-val-color: $red;

.example {
  margin: 1em 0 2em 0;
  border: 1px solid $example-border-color;
  border-radius: $example-border-radius;
  overflow: hidden;
  position: relative;
  color: $example-color;
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
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    padding: $example-padding;
    color: $example-preview-color;
    background-color: $example-preview-background-color;
    background-image: linear-gradient(45deg, rgba($gray-300, 0.05) 25%, transparent 25%, transparent 75%, rgba($gray-300, 0.05) 75%), linear-gradient(45deg, rgba($gray-300, 0.05) 25%, transparent 25%, transparent 75%, rgba($gray-300, 0.05) 75%);
    background-size: $example-preview-background-square-size $example-preview-background-square-size;
    background-position: 0 0, ($example-preview-background-square-size / 2) ($example-preview-background-square-size / 2);
    transition: all 250ms ease;
    &-background-dark {
      background-color: $example-preview-background-color-dark;
    }
  }
  &-toolbar {
    border-top: 1px solid $example-border-color;
    border-bottom: 1px solid $example-border-color;
    display: flex;
    justify-content: flex-end;
    .button-group > .button {
      border-radius: 0;
    }
  }
  &-code {
    padding: $example-padding;
    background-color: $example-code-background-color;
    ::v-deep .code {
      &-tag {
        color: $code-tag-color;
      }
      &-attr {
        color: $code-attr-color;
        &-val {
          color: $code-attr-val-color;
        }
      }
    }
  }
}
</style>
