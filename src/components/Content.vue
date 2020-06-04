<template>
  <main id="content">

    <slot />

  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>

<style lang="scss" scoped>
#content {
  background-color: #f3f4f6;
  padding: 30px 55px 0 30px;
  overflow: auto;
}
</style>
