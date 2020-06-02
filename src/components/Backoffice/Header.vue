<template>
  <header id="header">

    <div class="logo-wrapper">
      <img src="@/assets/images/dryve-logo.svg" alt="Dryve">
      <span>Backoffice</span>
    </div>

  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>

<style lang="scss">
#header {
  grid-area: Header;
  display: flex;
  align-items: center;
  padding: 0 30px;

  .logo-wrapper {
    display: flex;
    align-items: center;
    transform: translateY(3px);

    span {
      align-self: flex-end;
      font-family: 'Roboto';
      text-transform: uppercase;
      font-size: 10px;
      font-weight: 500;
      line-height: 1;
      color: #a5abb7;
      margin: 0 0 6px 9px;
      user-select: none;
    }
  }
}
</style>
