<template>
  <header id="header">

    <div class="logo-wrapper">
      <img src="@/assets/images/dryve-logo.svg" alt="Dryve">
      <span>Backoffice</span>
    </div>

    <img class="search-btn" src="@/assets/images/ic-search.svg">

    <img class="notifications-btn" src="@/assets/images/ic-notifications.svg">

  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>

<style lang="scss" scoped>
#header {
  grid-area: Header;
  display: grid;
  grid-template-columns: 1fr 24px 24px;
  grid-gap: 27px;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
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

  .search-btn {
    cursor: pointer;
  }

  .notifications-btn {
    cursor: pointer;
  }
}
</style>
