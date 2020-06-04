import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clients: [
      {
        uuid: 'eccbf4ac-a5af-11ea-bb37-0242ac130002',
        status: 'Cliente',
        firstName: 'Renato',
        lastName: 'Soares',
        fullName: 'Renato Soares',
        email: 'renato.s@gmail.com',
        phoneNumber: '(11) 99312-3219',
        phoneNumber2: '',
        cep: '01310-100',
        street: 'Avenida Paulista',
        streetNumber: '2412',
        complement: '',
        neighborhood: 'Bela Vista',
        city: 'São Paulo',
        state: 'SP'
      },
      {
        uuid: '48e009cc-a5b0-11ea-bb37-0242ac130002',
        status: 'Lead',
        firstName: 'Juliana',
        lastName: 'Cardoso',
        fullName: 'Juliana Cardoso',
        email: 'juli@gmail.com',
        phoneNumber: '(11) 99312-3219',
        phoneNumber2: '',
        cep: '01310-100',
        street: 'Avenida Paulista',
        streetNumber: '4252',
        complement: '',
        neighborhood: 'Bela Vista',
        city: 'São Paulo',
        state: 'SP'
      },
      {
        uuid: '48e009cc-a5b0-11ea-bb37-0242ac130412',
        status: 'Lead',
        firstName: 'Renata',
        lastName: 'Santos',
        fullName: 'Renata Santos',
        email: 'renata@gmail.com',
        phoneNumber: '(11) 99232-3212',
        phoneNumber2: '',
        cep: '01310-100',
        street: 'Avenida Paulista',
        streetNumber: '4252',
        complement: '',
        neighborhood: 'Bela Vista',
        city: 'São Paulo',
        state: 'SP'
      }
    ]
  },
  mutations: {
    ADD_CLIENT (state, client) {
      state.clients.push(client)
    }
  }
})
