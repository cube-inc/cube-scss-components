<template>
  <code class="style code-block" ref="code" v-html="codeHtml"></code>
</template>

<script>
import scssVariablesToHtml from '@/services/ScssVariablesService'
export default {
  name: 'Style',
  props: {
    code: String
  },
  computed: {
    codeHtml () {
      return scssVariablesToHtml(this.$slots.default)
    }
  }
}
</script>

<style lang="scss" scoped>
$style-padding: 16px !default;
$style-border-color: $component-border-color !default;
$style-border-radius: $component-border-radius !default;
$style-code-bg-color: $gray-070 !default;

$code-scss-var-color: $blue;
$code-scss-val-color: $red;

.style {
  display: block;
  padding: $style-padding;
  border: 1px solid $style-border-color;
  border-radius: $style-border-radius;
  background-color: $style-code-bg-color;
  white-space: pre-wrap;
}
/deep/
.code {
  &-scss-var {
    color: $code-scss-var-color;
  }
  &-scss-val {
    color: $gray-900;
  }
  &-scss-color {
    color: #005cc5;
  }
  &-scss-num {
    color: #22863a;
  }
  &-scss-string {
    color: $teal;
  }
  &-scss-flag {
    color: $red;
  }
}
</style>
