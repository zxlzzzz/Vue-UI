<template>
  <div class="wrapper" :class="{ error }">
    <input
      :readonly="readonly"
      :value="value"
      :disabled="disabled"
      type="text"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    />
    <template v-if="error">
      <Icon name="error" class="icon-error"></Icon>
      <span class="errorMessage">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import Icon from "./icon";
export default {
  name: "Input",
  components: {
    Icon,
  },
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;

.wrapper {
  display: inline-flex;
  align-items: center;
  font-size: $font-size;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0px 8px;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled],
    &[readonly] {
      border-color: #aaa;
      color: #aaa;
      cursor: not-allowed;
    }
  }
  .icon-error {
    fill: $red;
  }
  .errorMessage {
    color: $red;
  }
}
.error {
  border-color: $red;
}
</style>