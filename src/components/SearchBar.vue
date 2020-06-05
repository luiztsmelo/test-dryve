<template>
  <div id="search-bar">

    <input type="text" :placeholder="placeholder" @input="updateValue($event.target.value)" @change="$emit('value')">

    <img src="@/assets/images/ic-search.svg">

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: { type: String, required: true },
    placeholder: { type: String, required: true }
  },
  methods: {
    updateValue (value: string) {
      this.$emit('input', value)
    }
  }
})
</script>

<style lang="scss" scoped>
#search-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 350px;
  min-height: 36px;
  max-height: 36px;
  padding: 0 16px;
  border-radius: 4px;
  border: solid 1px rgba(0, 0, 0, 0.12);
  background-color: #fff;

  &:focus {
    border: solid 1px $blue-violet;
  }

  input {
    outline: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.71;
    letter-spacing: 0.1px;
    color: $black-87;
    border: none;
    height: 34px;
    width: 100%;
  }
}
</style>
