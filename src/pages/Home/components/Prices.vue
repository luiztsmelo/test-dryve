<template>
  <div class="prices">

    <Apexchart type="donut" :options="chartOptions" :series="series" width="115%" />

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'

export default Vue.extend({
  components: {
    Apexchart: VueApexCharts
  },
  data () {
    return {
      series: [60, 25, 15],
      chartOptions: {
        labels: ['Na média', 'Acima da média', 'Abaixo da média'],
        colors: ['#1070ca', '#ec4c47', '#f7d154'],
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          pie: {
            donut: {
              size: '80%'
            }
          }
        },
        tooltip: {
          enabled: false
        },
        legend: {
          fontFamily: 'Inter',
          fontSize: '13px',
          fontWeight: 500,
          formatter: function (seriesName, opts) {
            return [seriesName, ' - ', opts.w.globals.series[opts.seriesIndex] + '%']
          }
        }
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.prices {
  display: flex;
  align-items: center;
}
</style>
