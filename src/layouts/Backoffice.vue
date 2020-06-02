<template>
  <div id="backoffice-layout">

    <Sidebar />

    <Header />

    <Content />

    <Footer />

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Sidebar from '@/components/Backoffice/Sidebar/Sidebar.vue'
import Header from '@/components/Backoffice/Header.vue'
import Content from '@/components/Backoffice/Content.vue'
import Footer from '@/components/Backoffice/Footer.vue'

export default Vue.extend({
  components: {
    Sidebar,
    Header,
    Content,
    Footer
  }
})
</script>

<style lang="scss">
#backoffice-layout {
  display: grid;
  grid-template-areas:
    "Sidebar Header"
    "Sidebar Content"
    "Sidebar Footer";
  grid-template-columns: 80px auto;
  grid-template-rows: 70px auto 60px;
  height: 100vh;
}
</style>
