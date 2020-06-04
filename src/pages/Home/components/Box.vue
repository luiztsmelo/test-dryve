<template>
  <div class="box">

    <header>
      <span class="label">{{ label }}</span>

      <div class="tooltip" v-if="tooltip">
        <span class="tooltip-text">{{ tooltip }}</span>
      </div>
    </header>

    <slot />

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    label: { type: String, default: 'label' },
    tooltip: { type: String, required: false }
  }
})
</script>

<style lang="scss" scoped>
.box {
  background-color: #fff;
  border-radius: 4px;
  border: solid 1px rgba(0, 0, 0, 0.12);

  header {
    display: flex;
    align-items: center;
    padding: 15px 20px;

    .label {
      font-size: 14px;
      font-weight: 500;
      line-height: 1.71;
      letter-spacing: 0.1px;
      color: rgba(0, 0, 0, 0.87);
    }

    .tooltip {
      position: relative;
      margin-left: 6px;
      background: url('../../../assets/images/ic-help.svg');
      width: 14px;
      height: 14px;

      &:hover > .tooltip-text {
        visibility: visible;
      }

      .tooltip-text {
        cursor: default;
        font-size: 13px;
        visibility: hidden;
        width: auto;
        background-color: rgba(0, 0, 0, 0.45);
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 7px 12px;
        position: absolute;
        z-index: 1;
      }
    }
  }
}
</style>
