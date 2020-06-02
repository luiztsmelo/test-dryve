<template>
  <main id="content">

    <RouterView />

  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>

<style lang="scss">
#content {
  grid-area: Content;
  background-color: #f3f4f6;
  padding: 30px 55px 30px 30px;
  border-bottom: 1px solid #dfe3e8;
}
</style>
