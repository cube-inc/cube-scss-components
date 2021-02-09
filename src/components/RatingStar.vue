<template>
  <div class="rating">
    <span class="stars">
      <StarFill v-for="n in fill" :key="`fill-${n}`" class="star" />
      <StarLefthalfFill v-if="half" class="star" />
      <Star v-for="n in empty" :key="`empty-${n}`" class="star" />
    </span>
    <small class="score">{{ rating }}/{{ over }}</small>
  </div>
</template>

<script>
export default {
  props: {
    rating: { type: Number, required: true },
    over: { type: Number, default: 5 }
  },
  computed: {
    fill() {
      return Math.floor(this.rating)
    },
    half() {
      return this.fill !== this.rating
    },
    empty() {
      return Math.floor(this.over - this.rating)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/scss/variables';
.rating {
  display: inline-flex;
}
.star {
  width: 1em;
  height: 1em;
  fill: $secondary;
}
.score {
  margin-left: $spacer-sm;
}
</style>
