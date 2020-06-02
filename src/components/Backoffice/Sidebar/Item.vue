<template>
 <router-link :to="to" class="item" :style="itemStyle">
    <img class="icon" :src="iconSrc" :alt="text">
    <span class="text" v-if="expanded" :style="itemTextStyle">{{ text }}</span>
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    to: Object,
    icon: String,
    text: String,
    expanded: Boolean,
    disabled: { type: Boolean, default: false }
  },
  computed: {
    active (): boolean {
      return this.$route.name === this.to.name
    },
    iconSrc (): string {
      return require(`@/assets/images/${this.icon}.svg`)
    },
    itemStyle (): string {
      return this.active && this.expanded ? 'background-color: #f3f7ff' : ''
    },
    itemTextStyle (): string {
      if (this.disabled) {
        return 'color: #e0e0e0'
      } else if (this.active) {
        return 'font-weight: 700; color: #0065ff'
      } else return ''
    }
  }
})
</script>

<style lang="scss">
.item {
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 40px;
  padding: 0 13px;
  margin: 6px 0;
  border-radius: 4px;

  .text {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.14;
    letter-spacing: 0.1px;
    color: rgba(0, 0, 0, 0.87);
    padding-left: 25px;
  }
}
</style>
