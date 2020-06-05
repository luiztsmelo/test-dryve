<template>
  <div class="top-buy-intentions">

    <div class="model" v-for="model in models" :key="model.name">
      <img :src="model.brandImgSrc">
      <span class="name">{{ model.name }}</span>
      <span class="buy-intentions">{{ model.buyIntentions }}</span>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      models: [
        {
          brandName: 'Hyundai',
          brandImgSrc: require('@/assets/images/hyundai.jpg'),
          name: 'HB20',
          buyIntentions: 197
        },
        {
          brandName: 'Chevrolet',
          brandImgSrc: require('@/assets/images/chevrolet.jpg'),
          name: 'Onyx',
          buyIntentions: 183
        },
        {
          brandName: 'Jeep',
          brandImgSrc: require('@/assets/images/jeep.jpg'),
          name: 'Renegade',
          buyIntentions: 125
        },
        {
          brandName: 'Volkswagen',
          brandImgSrc: require('@/assets/images/volkswagen.jpg'),
          name: 'T-Cross',
          buyIntentions: 109
        },
        {
          brandName: 'Nissan',
          brandImgSrc: require('@/assets/images/nissan.jpg'),
          name: 'Kicks',
          buyIntentions: 86
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.top-buy-intentions {
  padding: 15px 20px 20px 20px;

  .model {
    display: grid;
    align-items: center;
    grid-template-columns: auto 4fr 1fr;
    grid-gap: 14px;
    padding: 9px 0;
    border-bottom: solid 1px rgba(0, 0, 0, 0.12);

    &:last-child {
      border: none;
    }

    img {
      width: 30px;
      height: 30px;
    }

    .name {
      font-size: 14px;
      font-weight: 500;
      line-height: 1.71;
      letter-spacing: 0.1px;
      color: $black-87;
    }

    .buy-intentions {
      font-size: 14px;
      font-weight: 500;
      line-height: 1.71;
      letter-spacing: 0.1px;
      color: $black-87;
    }
  }
}
</style>
