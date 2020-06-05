<template>
  <div class="highlighted-box">

    <span class="label">{{ label }}</span>

    <span class="value">{{ value }}</span>

    <div class="percentage-change-wrapper">
      <img src="@/assets/images/ic-arrow-up.svg" v-if="positiveChange">
      <img src="@/assets/images/ic-arrow-down.svg" v-else>
      <span class="percentage-change" :style="percentageChangeStyle">{{ Math.abs(percentageChange) }}%</span>
      <span class="period">{{ formattedPeriod }}</span>
    </div>

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
    icon: { type: String },
    value: { type: String, default: '-' },
    percentageChange: { type: Number, default: 0 },
    period: { type: String, default: 'daily' }
  },
  computed: {
    iconSrc (): string {
      return require(`@/assets/images/${this.icon}.svg`)
    },
    positiveChange () {
      return this.percentageChange >= 0
    },
    percentageChangeStyle () {
      if (this.positiveChange) {
        return 'color: #6200ee'
      } else {
        return 'color: #fc4a40'
      }
    },
    formattedPeriod () {
      if (this.period === 'daily') {
        return 'desde ontem'
      } else if (this.period === 'monthly') {
        return 'este mês'
      } else {
        return ''
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.highlighted-box {
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
    color: $black-43;
    padding-bottom: 6px;
  }

  .value {
    font-size: 34px;
    line-height: 1.06;
    color: $black-87;
  }

  .percentage-change-wrapper {
    display: flex;
    align-items: center;

    .percentage-change {
      font-size: 12px;
      line-height: 1.33;
      letter-spacing: 0.4px;
    }

    .period {
      font-size: 11px;
      line-height: 1.45;
      color: $black-87;
      opacity: 0.5;
      padding-left: 5px;
    }
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
