<template>
  <div id="sidebar" :style="`width: ${expanded ? '240px' : '50px'}`" @mouseover="expanded = true" @mouseleave="expanded = false">

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

    <Item :to="{ name: 'home' }" icon="ic-home" text="Início" :expanded="expanded" />

    <Item :to="{ name: 'clients' }" icon="ic-person" text="Clientes" :expanded="expanded" />

    <Item :to="{ name: 'cars' }" icon="ic-directions-car" text="Veículos" :expanded="expanded" />

    <Item :to="{ name: 'triangle' }" icon="ic-vector-triangle" text="Triangulação" :expanded="expanded" />

    <Item :to="{ name: 'wallet' }" icon="ic-account-balance-wallet" text="Financeiro" :expanded="expanded" disabled />

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Item from '@/components/Backoffice/Sidebar/Item.vue'

export default Vue.extend({
  components: {
    Item
  },
  data () {
    return {
      expanded: false
    }
  }
})
</script>

<style lang="scss">
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
      min-width: 175px;

      .username {
        font-size: 14px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.87);
        margin-bottom: 5px;
      }

      .sign-out-btn {
        display: flex;
        align-items: center;
        cursor: pointer;
        border: none;
        outline: none;
        background-color: #fff;
        padding: 0;

        .icon {
          margin-right: 5px;
        }

        .text {
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
          color: rgba(0, 0, 0, 0.87);
          opacity: 0.5;
          line-height: 0;
          letter-spacing: 1.5px;
        }
      }
    }
  }
}
</style>
