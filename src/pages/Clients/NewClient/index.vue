<template>
  <div id="new-client">

    <h1>Adicionar cliente</h1>

    <form>
      <header>
        <router-link
          class="tab"
          :draggable="false"
          :to="{ name: 'new-client', params: { tab: 'dados-do-cliente' } }"
          :class="{ 'active': $route.params.tab === 'dados-do-cliente' }">
        Dados do cliente
        </router-link>

        <router-link
          class="tab"
          :draggable="false"
          :to="{ name: 'new-client', params: { tab: 'dados-do-veiculo' } }"
          :class="{ 'active': $route.params.tab === 'dados-do-veiculo' }">
        Dados do veículo
        </router-link>

        <router-link
          class="tab"
          :draggable="false"
          :to="{ name: 'new-client', params: { tab: 'intencao-de-compra' } }"
          :class="{ 'active': $route.params.tab === 'intencao-de-compra' }">
        Intenção de compra
        </router-link>
      </header>

      <main>
        <div class="client-data-form" v-if="$route.params.tab === 'dados-do-cliente'">
          <input type="text" placeholder="Nome" v-model="client.firstName">

          <input type="text" placeholder="Sobrenome" v-model="client.lastName">

          <input type="email" placeholder="E-mail" v-model="client.email" style="grid-column: 1 / 3">

          <input type="tel" placeholder="Telefone" v-mask="'(##) #####-####'" v-model="client.phoneNumber"/>

          <button type="button" class="add-phonenumber-btn" v-if="!hasAnotherPhoneNumber" @click="hasAnotherPhoneNumber = true">+ adicionar outro</button>

          <input type="tel" placeholder="Telefone 2" v-mask="'(##) #####-####'" v-model="client.phoneNumber2" v-else/>

          <input type="tel" placeholder="CEP" v-mask="'#####-###'" v-model="client.cep"/>

          <input type="text" placeholder="Endereço" v-model="client.street" style="grid-column: 1 / 3" :disabled="invalidCep">

          <input type="text" placeholder="Número" v-mask="'####'" v-model="client.streetNumber" :disabled="invalidCep">

          <input type="text" placeholder="Complemento" v-model="client.complement" :disabled="invalidCep">

          <input type="text" placeholder="Bairro" v-model="client.neighborhood" style="grid-column: 1 / 3" :disabled="invalidCep">

          <input type="text" placeholder="Cidade" v-model="client.city" :disabled="invalidCep">

          <select v-model="client.state" :disabled="invalidCep">
            <option value="" disabled selected hidden>Estado</option>
            <option v-for="state in brazilianStates" :key="state" :value="state">{{ state }}</option>
          </select>
        </div>

        <div class="vehicle-data-form" v-if="$route.params.tab === 'dados-do-veiculo'">
          <h1>Dados do veículo Form.</h1>
        </div>

        <div class="buy-intention-form" v-if="$route.params.tab === 'intencao-de-compra'">
          <h1>Intenção de compra Form.</h1>
        </div>
      </main>

      <footer>
        <Button theme="primary" text="Salvar" @click.native="saveClient" :disabled="!validForm" />
        <Button theme="secondary" text="Cancelar" @click.native="$router.push({ name: 'clients' })" />
      </footer>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'
import { mask } from 'vue-the-mask'
import cep from 'cep-promise'
import { v4 as uuidv4 } from 'uuid'

export default Vue.extend({
  name: 'new-client',
  components: {
    Button
  },
  directives: {
    mask
  },
  metaInfo: {
    title: 'Novo cliente - Dryve'
  },
  data () {
    return {
      hasAnotherPhoneNumber: false,
      cepLoading: false,
      cepError: false,
      brazilianStates: ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'],
      client: {
        uuid: '',
        status: 'Cliente',
        firstName: '',
        lastName: '',
        fullName: '',
        email: '',
        phoneNumber: '',
        phoneNumber2: '',
        cep: '',
        street: '',
        streetNumber: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: ''
      }
    }
  },
  methods: {
    saveClient () {
      try {
        this.client.uuid = uuidv4()
        this.client.fullName = this.client.firstName + ' ' + this.client.lastName

        this.$store.commit('ADD_CLIENT', this.client)

        this.$router.push({ name: 'clients' })
      } catch (error) {
        console.error(error)
      }
    }
  },
  computed: {
    invalidCep (): boolean {
      return this.cepLoading || this.client.cep.length < 9 || this.cepError
    },
    validForm (): boolean {
      return (
        !!this.client.status &&
        !!this.client.firstName &&
        !!this.client.lastName &&
        !!this.client.email &&
        this.client.phoneNumber.length === 15 &&
        this.client.cep.length === 9 &&
        !!this.client.street &&
        !!this.client.streetNumber &&
        !!this.client.neighborhood &&
        !!this.client.city &&
        !!this.client.state
      )
    }
  },
  watch: {
    async 'client.cep' (value: string) {
      if (value.length === 9) {
        try {
          this.cepLoading = true

          const cepData = await cep(value)

          this.client.street = cepData.street
          this.client.neighborhood = cepData.neighborhood
          this.client.city = cepData.city
          this.client.state = cepData.state
        } catch (error) {
          console.error(error)
          this.cepError = true
        } finally {
          this.cepLoading = false
        }
      }
    }
  }
})
</script>

<style lang="scss" scoped>
#new-client {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 30px;

  h1 {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: 0.15px;
    color: $black-87;
    margin: 0;
    padding: 0;
  }

  form {
    header {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      background-color: #fff;
      border-radius: 4px;

      .tab {
        cursor: pointer;
        text-transform: uppercase;
        text-decoration: none;
        padding: 20px;
        font-size: 14px;
        line-height: 1.14;
        text-align: center;
        color: rgba(0, 0, 0, 0.38);
        border-bottom: solid 1px rgba(0, 0, 0, 0.12);
      }

      .active {
        color: $blue-violet;
        font-weight: 500;
        border-bottom: 2px solid $blue-violet;
      }
    }

    main {
      padding: 40px;
      background-color: #fff;
      padding-right: 50%;

      .client-data-form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 16px;

        .add-phonenumber-btn {
          cursor: pointer;
          outline: none;
          border: none;
          background-color: #fff;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.71;
          letter-spacing: 0.1px;
          justify-self: start;
          color: #0065ff;
        }
      }
    }

    footer {
      display: grid;
      grid-template-columns: 150px 150px 1fr;
      grid-gap: 15px;
      background-color: $ice-blue;
      padding: 20px;
      border-radius: 4px;
    }
  }
}

input {
  height: 54px;
  border-radius: 4px;
  outline: none;
  padding: 0 16px;
  border: solid 1px rgba(0, 0, 0, 0.12);
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: $black-87;

  &:focus {
    border: solid 1px $blue-violet;
  }
}

input:disabled {
  background-color: #fff;
  opacity: 0.5;
}

select {
  height: 54px;
  border-radius: 4px;
  outline: none;
  padding: 0 16px;
  border: solid 1px rgba(0, 0, 0, 0.12);
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: $black-87;

  &:focus {
    border: solid 1px $blue-violet;
  }
}

select:disabled {
  background-color: #fff;
  opacity: 0.5;
  color: rgba(0, 0, 0, 0.5);
}
</style>
