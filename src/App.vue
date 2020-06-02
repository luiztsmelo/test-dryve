<template>
  <div id="app">

    <Backoffice />

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Backoffice from '@/layouts/Backoffice.vue'

export default Vue.extend({
  components: {
    Backoffice
  }
})
</script>

<style lang="scss">
@import '../node_modules/normalize.css/normalize.css';
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

#app {
  font-family: 'Inter';
}
</style>
