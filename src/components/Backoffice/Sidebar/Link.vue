<template>
 <router-link :to="to" class="link" :style="linkStyle">
    <img class="icon" :src="iconSrc" :alt="label" :style="linkIconStyle">
    <span class="label" v-if="expanded" :style="linkLabelStyle">{{ label }}</span>
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    to: Object,
    icon: String,
    label: String,
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
    linkStyle (): string {
      if (this.disabled) {
        return 'cursor: not-allowed'
      } else if (this.active && this.expanded) {
        return 'background-color: #f3f7ff'
      } else return ''
    },
    linkIconStyle (): string {
      if (this.disabled) {
        return 'filter: grayscale(100%); opacity: 0.2'
      } else if (!this.active) {
        return 'filter: grayscale(100%); opacity: 0.4'
      } else return ''
    },
    linkLabelStyle (): string {
      if (this.disabled) {
        return 'color: #e0e0e0'
      } else if (this.active) {
        return 'font-weight: 700; color: #0065ff'
      } else return ''
    }
  }
})
</script>

<style lang="scss" scoped>
.link {
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 40px;
  padding: 0 13px;
  margin: 6px 0;
  border-radius: 4px;

  .label {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.14;
    letter-spacing: 0.1px;
    color: rgba(0, 0, 0, 0.87);
    padding-left: 25px;
  }
}
</style>
