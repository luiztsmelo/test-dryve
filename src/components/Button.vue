<template>
  <button type="button" :style="buttonStyle">
    <img class="icon" :src="imgSrc" :style="iconStyle" v-if="icon">
    <span class="label">{{ label }}</span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    label: { type: String, default: 'button', required: true },
    type: { type: String, default: 'primary', required: true },
    icon: { type: String }
  },
  computed: {
    buttonStyle (): string {
      if (this.type === 'primary') {
        return 'background-color: #6200ee; color: #fff'
      } else if (this.type === 'secondary') {
        return 'background-color: #fff; color: #6200ee'
      } else {
        return ''
      }
    },
    iconStyle (): string {
      if (this.type === 'primary') {
        return 'filter: grayscale(100%) brightness(1000%)'
      } else {
        return ''
      }
    },
    imgSrc (): string {
      return require(`@/assets/images/${this.icon}.svg`)
    }
  }
})
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  height: 36px;
  border-radius: 4px;
  border: none;
  padding: 0 13px;

  .label {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.14;
    text-align: center;
  }

  .icon {
    width: 14px;
    height: 14px;
    margin-right: 8px;
  }
}
</style>
