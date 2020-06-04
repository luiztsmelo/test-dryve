<template>
  <div id="app">

    <Sidebar />

    <Header />

    <Content>
      <router-view />
      <Footer />
    </Content>

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

<style lang="scss" scoped>
@import '../node_modules/normalize.css/normalize.css';
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

#app {
  font-family: 'Inter';
  display: grid;
  grid-template-areas:
    "Sidebar Header"
    "Sidebar Content";
  grid-template-columns: 80px auto;
  grid-template-rows: 70px auto;
  height: 100vh;
  width: 100vw;
}
</style>
