<template>
  <section class="example">
    <div class="example-preview" :class="examplePreviewClasses" ref="preview">
      <slot />
    </div>
    <div class="example-toolbar">
      <div class="button-group">
        <button class="button button-xs" @click="toggleDark" title="Toggle dark mode">
          <transition name="fade" mode="out-in">
            <SunMax v-if="previewDarkColorScheme" class="icon icon-sm" />
            <MoonFill v-else class="icon icon-sm" />
          </transition>
        </button>
      </div>
      <div class="button-group">
        <button class="button button-xs" @click="toggleCode" title="Toggle code">
          <ChevronLeftSlashChevronRight class="icon" />
        </button>
        <button class="button button-xs" @click="copyCode" :disabled="copied" title="Copy code">
          <transition name="fade" mode="out-in">
            <span v-if="copied">Copied!</span>
            <DocOnClipboard v-else class="icon icon-sm" />
          </transition>
        </button>
      </div>
    </div>
    <pre class="code example-code" :class="exampleCodeClasses" ref="code" v-html="code"></pre>
  </section>
</template>

<script>
import uiState, { DARK } from '@/services/uiState'
import vnodesToHtml from '@/services/vnodeService'

export default {
  name: 'Example',
  props: {
    dark: { type: Boolean, default: null },
    transparencyGrid: { type: Boolean, default: false }
  },
  data() {
    return {
      reverseColorScheme: false,
      showCode: false,
      code: null,
      copied: false
    }
  },
  computed: {
    previewDarkColorScheme() {
      return this.reverseColorScheme ? uiState.colorScheme !== DARK : uiState.colorScheme === DARK
    },
    examplePreviewClasses() {
      return {
        'example-preview-background-dark': this.dark,
        'example-preview-transparency-grid': this.transparencyGrid,
        'light-color-scheme': this.previewDarkColorScheme === false,
        'dark-color-scheme': this.previewDarkColorScheme === true
      }
    },
    exampleCodeClasses() {
      return {
        show: this.showCode
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
    toggleCode() {
      this.showCode = !this.showCode
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
$example-preview-background-color: var(--body-background-color, #{$body-background-color}) !default;
$example-preview-background-color-dark: $body-background-color-dark !default;
$example-preview-background-square-size: 10px !default;

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
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    padding: $example-padding;
    color: $example-preview-color;
    background-color: $example-preview-background-color;
    transition: all 250ms ease;
    &-transparency-grid {
      background-image: linear-gradient(45deg, rgba($gray-300, 0.05) 25%, transparent 25%, transparent 75%, rgba($gray-300, 0.05) 75%),
        linear-gradient(45deg, rgba($gray-300, 0.05) 25%, transparent 25%, transparent 75%, rgba($gray-300, 0.05) 75%);
      background-size: $example-preview-background-square-size $example-preview-background-square-size;
      background-position: 0 0, ($example-preview-background-square-size / 2) ($example-preview-background-square-size / 2);
    }
    &-background-dark {
      background-color: $example-preview-background-color-dark;
    }
  }
  &-toolbar {
    border-top: 1px solid $example-border-color;
    // border-bottom: 1px solid $example-border-color;
    display: flex;
    justify-content: flex-end;
    min-height: 2em;
    .button-group {
      &:last-child {
        margin-left: auto;
      }
      > .button {
        border-radius: 0;
      }
    }
  }
  &-code {
    display: none;
    margin: 0;
    padding: $example-padding;
    border-top: 1px solid $example-border-color;
    border-radius: 0;
    &.show {
      display: block;
    }
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
@media (max-width: $breakpoint-xs) {
  .example {
    border-radius: 0;
    border-left: 0 none;
    border-right: 0 none;
    margin-left: -$spacer;
    margin-right: -$spacer;
  }
}
@media (min-width: $breakpoint-sm + 1) {
  .example-preview {
    padding: $spacer-xl;
  }
}
</style>
