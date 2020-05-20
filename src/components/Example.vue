<template>
  <section class="example" :class="exampleClasses">
    <div class="example-preview" :class="examplePreviewClasses" ref="preview">
      <slot />
    </div>
    <div class="example-toolbar">
      <div class="button-group">
        <button class="button button-xs" @click="toggleDark">
          <transition name="fade" mode="out-in">
            <svg key="dark" v-if="darkMode" class="icon" xmlns="http://www.w3.org/2000/svg" width="76.758" height="76.709" viewBox="0 0 76.758 76.709">
              <g transform="translate(578.534 281.584)">
                <path d="M45.264,3.125a38.692,38.692,0,0,0,38.33-38.379,38.692,38.692,0,0,0-38.379-38.33A38.66,38.66,0,0,0,6.836-35.254,38.744,38.744,0,0,0,45.264,3.125Zm0-7.422-.049-61.914A30.9,30.9,0,0,1,76.172-35.254,30.8,30.8,0,0,1,45.264-4.3Z" transform="translate(-585.37 -208)" />
              </g>
            </svg>
            <svg key="light" v-else class="icon" xmlns="http://www.w3.org/2000/svg" width="76.758" height="76.709" viewBox="0 0 76.758 76.709">
              <g transform="translate(-1411.466 -622.416)">
                <path d="M45.264,3.125a38.692,38.692,0,0,0,38.33-38.379,38.692,38.692,0,0,0-38.379-38.33A38.66,38.66,0,0,0,6.836-35.254,38.744,38.744,0,0,0,45.264,3.125Zm0-7.422A30.842,30.842,0,0,1,14.307-35.254,30.8,30.8,0,0,1,45.215-66.211Z" transform="translate(1404.63 696)" />
              </g>
            </svg>
          </transition>
        </button>
        <button class="button button-xs" @click="copyCode">
          <transition name="fade" mode="out-in">
            <span v-if="copied">Copied!</span>
            <svg v-else class="icon" xmlns="http://www.w3.org/2000/svg" width="80.664" height="97.852" viewBox="0 0 80.664 97.852">
              <path d="M22.021,13.721h36.67c8.2,0,12.256-4.15,12.256-12.451V-5.713h7.178q12.3,0,12.3-12.451V-49.316c0-5.322-1.074-8.691-4.2-11.914L67.92-79.932c-2.979-3.076-6.543-4.2-11.182-4.2H41.5c-8.2,0-12.256,4.15-12.256,12.451V-64.7H22.021c-8.2,0-12.256,4.15-12.256,12.451V1.27C9.766,9.619,13.818,13.721,22.021,13.721ZM70.947-28.857c0-5.42-.586-7.715-3.955-11.182l-20.264-20.7C43.555-64.014,40.918-64.7,36.279-64.7v-6.885c0-3.516,1.9-5.518,5.615-5.518H57.568v19.336c0,4.639,2.295,6.885,6.885,6.885h18.9v32.617c0,3.516-1.9,5.518-5.566,5.518H70.947Zm-5.371-28.32c-1.221,0-1.709-.488-1.709-1.709V-75.83L82.129-57.178ZM22.363,6.689c-3.662,0-5.566-2-5.566-5.518v-53.32c0-3.516,1.9-5.518,5.615-5.518h12.6v21.68c0,5.127,2.588,7.666,7.666,7.666H63.867V1.172c0,3.516-1.9,5.518-5.566,5.518ZM43.506-34.863c-1.367,0-1.953-.586-1.953-1.953V-56.348l21,21.484Z" transform="translate(-9.766 84.131)" />
            </svg>
          </transition>
        </button>
      </div>
    </div>
    <code class="example-code code-block" ref="code" v-html="code"></code>
  </section>
</template>

<script>
import vnodesToHtml from '@/services/vnodeService'

/**
 * TODO: Rely on global app state and ui-color-scheme
 */
export default {
  name: 'Example',
  props: {
    previewScroll: { type: Boolean, default: false },
    dark: { type: Boolean, default: null }
  },
  data() {
    return {
      darkMode: false,
      code: null,
      copied: false
    }
  },
  computed: {
    exampleClasses() {
      return {
        'example-preview-scroll': this.previewScroll
      }
    },
    examplePreviewClasses() {
      return {
        'light-color-scheme': !this.darkMode,
        'dark-color-scheme': this.darkMode
      }
    }
  },
  methods: {
    format() {
      this.code = vnodesToHtml(this.$slots.default, { highlight: true })
    },
    onMatchMedia(event) {
      const { matches } = event
      this.darkMode = matches
    },
    toggleDark() {
      this.darkMode = !this.darkMode
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
  beforeMount() {
    if (this.dark === null) {
      this.$matchDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
      this.$matchDarkMode.addListener(this.onMatchMedia)
      this.darkMode = this.$matchDarkMode.matches
    } else {
      this.darkMode = this.dark
    }
  },
  mounted() {
    this.format()
  },
  beforeDestroy() {
    this.$matchDarkMode.removeListener(this.onMatchMedia)
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
$example-preview-dark-background-color: #373838 !default;
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
    color: $example-preview-color;
    background-color: $example-preview-background-color;
    background-image: linear-gradient(45deg, rgba($gray-300, 0.05) 25%, transparent 25%, transparent 75%, rgba($gray-300, 0.05) 75%), linear-gradient(45deg, rgba($gray-300, 0.05) 25%, transparent 25%, transparent 75%, rgba($gray-300, 0.05) 75%);
    background-size: $example-preview-background-square-size $example-preview-background-square-size;
    background-position: 0 0, ($example-preview-background-square-size / 2) ($example-preview-background-square-size / 2);
    transition: all 250ms ease;
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
.fade {
  &-enter-active {
    transition: all 250ms ease;
  }
  &-leave-active {
    transition: all 100ms ease;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>
