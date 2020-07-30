<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    for (const key of this.$el.children) {
      if (key.nodeName.toLowerCase() !== "button") {
        console.warn(`组件内只能包含button标签,不能包含${key.nodeName}`);
        return false;
      }
    }
  },
};
</script>

<style lang='scss' scoped>
.g-button-group {
  display: flex;
  > .g-button {
    border-radius: 0;
    margin-left: -1px;
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>