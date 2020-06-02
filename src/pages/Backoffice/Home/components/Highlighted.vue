<template>
  <div class="highlighted">

    <span class="label">{{ label }}</span>

    <span class="value">{{ value }}</span>

    <div class="icon-wrapper">
      <img class="icon" :src="iconSrc">
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    label: { type: String, default: 'label' },
    icon: String,
    value: { type: String, default: '0' }
  },
  computed: {
    iconSrc (): string {
      return require(`@/assets/images/${this.icon}.svg`)
    }
  }
})
</script>

<style lang="scss">
.highlighted {
  grid-area: Highlighted;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 15px 20px;
  border-radius: 4px;
  border: solid 1px rgba(0, 0, 0, 0.12);
  position: relative;

  .label {
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 1.5px;
    color: rgba(0, 0, 0, 0.87);
    opacity: 0.5;
    padding-bottom: 6px;
  }

  .value {
    font-size: 34px;
    line-height: 1.06;
    color: rgba(0, 0, 0, 0.87);
  }

  .icon-wrapper {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: #f3f4f6;
    margin-right: 20px;

    .icon {
      width: 50%;
      height: auto;
    }
  }
}
</style>
