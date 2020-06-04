<template>
  <div class="latest-evaluations">

    <header>
      <span class="label">Dados do veículo</span>
      <span class="label">Valor</span>
      <span class="label">Status</span>
    </header>

    <div class="vehicles" v-if="vehicles.length > 0">
      <div class="vehicle" v-for="vehicle in vehicles" :key="vehicle.vehicle_uuid">

        <div class="vehicle-info-column">
          <img :src="vehicle.image" :alt="vehicle.name">

          <div class="description">
            <span class="bold-info">{{ vehicleName(vehicle) }}</span>
            <span class="small-info">{{ vehicle.version_name }}</span>
            <span class="small-info">{{ vehicleYearAndFuelType(vehicle) }}</span>
            <span class="small-info">{{ vehicleTransmissionTypeAndMileage(vehicle) }}</span>
          </div>
        </div>

        <div class="price-column">
          <span class="small-info">Anúncio</span>
          <span class="bold-info">{{ vehicle.ad_selling_price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, maximumFractionDigits: 0 }) }}</span>
          <span class="small-info">Mínimo aceito</span>
          <span class="small-info" style="color: #a5abb7">{{ (vehicle.ad_selling_price - 2000).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, maximumFractionDigits: 0 }) }}</span>
        </div>

        <div class="status-column">
          <span class="tag">Aguardando precificação</span>
          <span class="datetime">18/04/2020 às 14:35</span>
        </div>
      </div>
    </div>

    <footer v-if="vehicles.length > 0">
      <button class="see-all-btn">
        Ver tudo
        <img src="@/assets/images/ic-arrow-right.svg">
      </button>
    </footer>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Vehicle } from '@/types/types'

export default Vue.extend({
  props: {
    vehicles: { type: Array, default: () => Array }
  },
  methods: {
    vehicleName (vehicle: Vehicle): string {
      return vehicle.brand_name + ' ' + vehicle.model_name
    },
    vehicleYearAndFuelType (vehicle: Vehicle): string {
      return vehicle.manufacturing_year + ' - ' + vehicle.fuel_type
    },
    vehicleTransmissionTypeAndMileage (vehicle: Vehicle): string {
      return vehicle.transmission_type + ' - ' + Math.floor(vehicle.mileage / 1000) + ' km'
    }
  }
})
</script>

<style lang="scss" scoped>
.latest-evaluations {
  display: flex;
  flex-direction: column;

  header {
    display: grid;
    grid-template-columns: 7fr 3fr 3fr 15px;
    border-bottom: 1px solid #e0e0e0;
    padding: 20px;

    .label {
      text-transform: uppercase;
      font-size: 10px;
      font-weight: 500;
      line-height: 1.6;
      letter-spacing: 1.5px;
      color: rgba(0, 0, 0, 0.87);
      opacity: 0.5;
    }
  }

  .vehicles {
    max-height: 415px;
    overflow-Y: scroll;

    .vehicle {
      cursor: pointer;
      display: grid;
      grid-template-columns: 7fr 3fr 3fr;
      padding: 20px;
      border-bottom: 1px solid #e0e0e0;

      &:hover {
        background-color: rgb(252,252,252);
      }

      &:last-child {
        border: none;
      }

      .vehicle-info-column {
        display: flex;

        img {
          width: 80px;
          height: 60px;
          border-radius: 4px;
          border: solid 1px #e0e0e0;
        }

        .description {
          display: flex;
          flex-direction: column;
          padding-left: 10px;
        }
      }

      .price-column {
        display: flex;
        flex-direction: column;
      }

      .status-column {
        display: flex;
        flex-direction: column;
        max-width: 180px;

        .tag {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 26px;
          border-radius: 13px;
          background-color: #f3f7ff;
          font-size: 12px;
          line-height: 1;
          color: #768095;
          margin-bottom: 10px;
        }

        .datetime {
          font-size: 11px;
          text-align: center;
          color: #a5abb7;
        }
      }
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    justify-self: flex-end;
    padding: 6px 20px;
    border-top: 1px solid #e0e0e0;

    .see-all-btn {
      display: flex;
      align-items: center;
      cursor: pointer;
      border: none;
      outline: none;
      background-color: transparent;
      padding: 0;
      height: 24px;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.1px;
      color: #0065ff;
    }
  }
}

.bold-info {
  font-size: 12px;
  font-weight: 700;
  line-height: 1.33;
  color: #1e2c4c;
}

.small-info {
  text-transform: uppercase;
  font-size: 10px;
  line-height: 1;
  letter-spacing: 0.33px;
  color: #768095;
  padding: 3px 0;
}
</style>
