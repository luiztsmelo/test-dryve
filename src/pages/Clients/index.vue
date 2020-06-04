<template>
  <div id="clients">

    <header>
      <Button type="secondary" text="Filtrar" icon="ic-filter" />

      <SearchBar placeholder="Buscar por nome..." v-model="searchInput" />

      <Button type="primary" text="Adicionar" icon="ic-add" style="justify-self: end" @click.native="$router.push({ name: 'new-client', params: { tab: 'dados-do-cliente' } })" />
    </header>

    <div class="clients-table">
      <header>
        <input type="checkbox" v-model="checkAllClients" @change="checkAllClients ? checkedClients = filteredClients : checkedClients = []">
        <span>Nome</span>
        <span>Status</span>
        <span>Telefone</span>
        <span>E-mail</span>
        <span hidden></span>
      </header>

      <div class="client-row" v-for="client in filteredClients" :key="client.id">
        <input type="checkbox" :value="client" v-model="checkedClients" @click="checkAllClients = false">
        <span>{{ client.fullName }}</span>
        <span class="status-tag" :style="clientStatusTagStyle(client)">{{ client.status }}</span>
        <span>{{ client.phoneNumber }}</span>
        <span>{{ client.email }}</span>
        <img src="@/assets/images/ic-more-vert.svg">
      </div>

      <footer>
        <div class="pagination">
          <span>Itens por página:</span>

          <select v-model="itemsPerPage">
            <option value="10" selected>10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>

          <span>{{ paginationRange }} de {{ $store.state.clients.length }}</span>
        </div>

        <div class="page-controllers">
          <img class="btn prev" src="@/assets/images/ic-chevron-left.svg" @click="prevPage">
          <img class="btn next" src="@/assets/images/ic-chevron-left.svg" @click="nextPage">
        </div>
      </footer>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'
import SearchBar from '@/components/SearchBar.vue'
import { Client } from '@/types/types'

export default Vue.extend({
  name: 'clients',
  components: {
    Button,
    SearchBar
  },
  metaInfo: {
    title: 'Clientes - Dryve'
  },
  data () {
    return {
      checkAllClients: false,
      checkedClients: [],
      searchInput: '',
      page: 1,
      itemsPerPage: 10
    }
  },
  methods: {
    prevPage () {
      if (this.page > 1) {
        this.checkAllClients = false
        this.checkedClients = []
        this.page--
      }
    },
    nextPage () {
      if (this.$store.state.clients.length > this.itemsPerPage * this.page) {
        this.checkAllClients = false
        this.checkedClients = []
        this.page++
      }
    },
    clientStatusTagStyle (client: Client): string {
      if (client.status === 'Cliente') {
        return 'background-color: #f3f7ff; color: #0065ff'
      } else if (client.status === 'Lead') {
        return 'background-color: #f6f6f6; color: #666666'
      } else {
        return ''
      }
    }
  },
  computed: {
    filteredClients (): Client {
      if (this.searchInput) {
        return this.$store.getters.getClients(this.itemsPerPage, this.page).filter((client: Client) => client.fullName.toLowerCase().includes(this.searchInput))
      } else {
        return this.$store.getters.getClients(this.itemsPerPage, this.page)
      }
    },
    paginationRange (): string {
      const firstItem = this.itemsPerPage * this.page - (this.itemsPerPage - 1)
      const lastItem = this.itemsPerPage * this.page

      return firstItem + '-' + lastItem
    }
  }
})
</script>

<style lang="scss" scoped>
#clients {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 30px;

  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    justify-items: start;
  }

  .clients-table {
    display: grid;
    grid-template-columns: 1fr;
    background-color: #fff;
    border-radius: 4px;
    border: solid 1px rgba(0, 0, 0, 0.12);

    header {
      display: grid;
      grid-template-columns: auto 1fr 1fr 1fr 1fr 24px;
      grid-gap: 30px;
      justify-items: start;
      align-items: center;
      border-bottom: solid 1px rgba(0, 0, 0, 0.12);
      padding: 20px;

      span {
        text-transform: uppercase;
        text-align: start;
        font-size: 10px;
        font-weight: 500;
        line-height: 1.6;
        letter-spacing: 1.5px;
        color: rgba(0, 0, 0, 0.87);
        opacity: 0.5;
        user-select: none;
      }
    }

    .client-row {
      cursor: pointer;
      display: grid;
      grid-template-columns: auto 1fr 1fr 1fr 1fr 24px;
      grid-gap: 30px;
      justify-items: start;
      align-items: center;
      border-bottom: solid 1px rgba(0, 0, 0, 0.12);
      padding: 20px;

      &:hover {
        background-color: rgb(252,252,252);
      }

      span {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.71;
        letter-spacing: 0.1px;
        color: rgba(0, 0, 0, 0.87);
      }

      .status-tag {
        font-size: 12px;
        line-height: 1;
        text-align: center;
        padding: 7px 20px;
        border-radius: 13px;
      }
    }

    footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;

      .pagination {
        select {
          cursor: pointer;
          outline: none;
          border: none;
          margin: 0 8px 0 1px;
        }

        span {
          font-family: Inter;
          font-size: 11px;
          color: #a5abb7;
          user-select: none;
        }
      }

      .page-controllers {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 72px;

        .btn {
          cursor: pointer;
        }

        .next {
          transform: rotate(180deg);
        }
      }
    }
  }
}

input[type="checkbox"] {
  cursor: pointer;
  width: 18px;
  height: 18px;
}
</style>
