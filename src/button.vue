<template>
  <button @click="$emit('click')" class="g-button" :class="{[`icon-${iconPosition}`]:true}">
    <g-icon class="icon" :name="icon" v-if="icon && !loading"></g-icon>
    <g-icon class="loading icon" name="loading" v-if="loading"></g-icon>
    <div class="content">
      <slot />
    </div>
  </button>
</template>

<script>
  import Icon from './icon'
export default {
  components:{
    'g-icon': Icon
  },
  props: {
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return !(value !== "left" && value !== "right"); // simplify
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
    icon: {},
  },
};
</script>
<style lang='scss' scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--border--color-hover);
  }
  &:active {
    border-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: 0.3em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0px;
      margin-left: 0.3em;
    }
    > .content {
      order: 1;
    }
  }
  .loading {
    animation: spin 1.5s infinite linear;
  }
}
</style>