<template>
  <footer id="footer">

    <span class="copyright">{{ new Date().getFullYear() }} © Dryve Tecnologia Ltda.</span>

    <span class="version">Versão 1.0.1</span>

  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>

<style lang="scss">
#footer {
  grid-area: Footer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f3f4f6;
  height: 60px;
  margin-top: 30px;
  user-select: none;
  border-top: 1px solid #dfe3e8;

  .copyright {
    font-family: 'Roboto';
    font-size: 14px;
    color: #616161;
  }

  .version {
    font-family: 'Roboto';
    font-size: 12px;
    color: #6b6c6f;
    opacity: 0.5;
  }
}
</style>
