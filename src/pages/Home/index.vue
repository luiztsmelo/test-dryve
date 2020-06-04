<template>
  <div id="home">

    <HighlightedBox
      label="Avaliações Hoje"
      icon="ic-directions-car"
      :value="vehicles.length > 0 ? vehicles.length : '-'"
      :percentageChange="36"
      period="daily"
    />

    <HighlightedBox
      label="Carros Publicados"
      icon="ic-important-devices"
      :value="vehicles.length > 0 ? vehicles.length : '-'"
      :percentageChange="4"
      period="monthly"
    />

    <HighlightedBox
      label="Ticket Médio do Estoque"
      icon="ic-attach-money"
      :value="averageStockTicket"
      :percentageChange="-6"
      period="monthly"
    />

    <Box
      label="Últimas avaliações"
      style="grid-area: 2 / 1 / 4 / 3"
    >
      <LatestEvaluations :vehicles="vehicles" />
    </Box>

    <Box
      label="Top intenções de compra"
      style="grid-area: 2 / 3 / 2 / 3"
    >
      <TopBuyIntentions />
    </Box>

    <Box
      label="Preços - Dryve x KBB"
      tooltip="Explicação aqui..."
      style="grid-area: 3 / 3 / 3 / 3"
    >
      <Prices />
    </Box>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import HighlightedBox from './components/HighlightedBox.vue'
import Box from './components/Box.vue'
import LatestEvaluations from './components/LatestEvaluations.vue'
import TopBuyIntentions from './components/TopBuyIntentions.vue'
import Prices from './components/Prices.vue'

export default Vue.extend({
  name: 'home',
  components: {
    HighlightedBox,
    Box,
    LatestEvaluations,
    TopBuyIntentions,
    Prices
  },
  metaInfo: {
    title: 'Início - Dryve'
  },
  data () {
    return {
      loading: false,
      error: null,
      vehicles: []
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      try {
        this.loading = true

        const res = await axios.get('http://www.mocky.io/v2/5eb553df31000060006994a8')

        this.vehicles = res.data
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  },
  computed: {
    averageStockTicket (): string {
      if (this.vehicles.length > 0) {
        const averageStockTicket = this.vehicles.reduce((prev, curr) => prev + curr.ad_selling_price, 0) / this.vehicles.length

        return averageStockTicket.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, maximumFractionDigits: 0 })
      } else {
        return 'R$ -'
      }
    }
  }
})
</script>

<style lang="scss">
#home {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 110px 1fr 200px;
  grid-gap: 30px;
}
</style>
