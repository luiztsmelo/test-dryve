<template>
  <div id="sidebar" :style="`width: ${expanded ? '220px' : '50px'}`" @mouseover="expanded = true" @mouseleave="expanded = false">

    <div class="user">
      <img class="avatar" src="@/assets/images/tarcisio.jpg" alt="Tarcísio Melo">

      <div class="user-info" v-if="expanded">
        <span class="username">Tarcísio Melo</span>
        <button class="sign-out-btn">
          <img class="icon" src="@/assets/images/ic-power-settings-new.svg">
          <span class="text">Sair</span>
        </button>
      </div>
    </div>

    <Link :to="{ name: 'home' }" icon="ic-home" label="Início" :expanded="expanded" />

    <Link :to="{ name: 'clients' }" icon="ic-person" label="Clientes" :expanded="expanded" />

    <Link :to="{ name: 'vehicles' }" icon="ic-directions-car" label="Veículos" :expanded="expanded" />

    <Link :to="{ name: 'triangulation' }" icon="ic-vector-triangle" label="Triangulação" :expanded="expanded" />

    <Link :to="{ name: 'finance' }" icon="ic-account-balance-wallet" label="Financeiro" :expanded="expanded" disabled />

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Link from '@/components/Sidebar/Link.vue'

export default Vue.extend({
  components: {
    Link
  },
  data () {
    return {
      expanded: false
    }
  }
})
</script>

<style lang="scss" scoped>
#sidebar {
  grid-area: Sidebar;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e0e0e0;
  padding: 45px 15px;
  z-index: 2;
  background-color: #fff;
  transition: all .4s ease;

  .user {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: solid 2px #0065ff;
      background-color: #fff;
      padding: 3px;
    }

    .user-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-left: 15px;
      min-width: 155px;

      .username {
        font-size: 14px;
        font-weight: 500;
        color: $black-87;
        margin-bottom: 5px;
      }

      .sign-out-btn {
        display: flex;
        align-items: center;
        cursor: pointer;
        border: none;
        outline: none;
        background-color: transparent;
        padding: 0;

        .icon {
          margin-right: 5px;
        }

        .text {
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
          color: $black-43;
          line-height: 0;
          letter-spacing: 1.5px;
        }
      }
    }
  }
}
</style>
