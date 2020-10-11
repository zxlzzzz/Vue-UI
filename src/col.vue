<template>
  <div class="col" :class="[`col-${span}`, offset && `offset-${offset}`]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    span: [Number, String],
    offset: [Number, String],
  },
};
</script>

<style lang='scss' scoped>
.col {
  height: 100%;
  width: 50%;
  background-color: grey;
  border: 1px solid red;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }

  $class-offset: offset-;
  @for $n from 1 through 24 {
    &.#{$class-offset}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>