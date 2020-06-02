<template>
  <div id="home">

    <Highlighted label="Avaliações Hoje" icon="ic-directions-car" value="29" />

    <Highlighted label="Carros Publicados" icon="ic-important-devices" value="397" />

    <Highlighted label="Ticket Médio do Estoque" icon="ic-attach-money" value="R$ 42.567" />

    <LatestEvaluations />

    <TopPurchaseIntentions />

    <Prices />

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import Highlighted from './components/Highlighted.vue'
import LatestEvaluations from './components/LatestEvaluations.vue'
import TopPurchaseIntentions from './components/TopPurchaseIntentions.vue'
import Prices from './components/Prices.vue'

export default Vue.extend({
  name: 'home',
  components: {
    Highlighted,
    LatestEvaluations,
    TopPurchaseIntentions,
    Prices
  },
  data () {
    return {
      loading: false,
      error: null,
      data: []
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
        console.log(res.data)
        this.data = res.data
      } catch (error) {
        console.error(error)
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})
</script>

<style lang="scss">
#home {
  display: grid;
  grid-template-areas:
    "Highlighted Highlighted Highlighted"
    "LatestEvaluations LatestEvaluations TopPurchaseIntentions"
    "LatestEvaluations LatestEvaluations Prices";
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 110px 1fr 226px;
  grid-gap: 30px;
  height: 100%;
}
</style>
