import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    getClients: state => (itemsPerPage: number, page: number) => {
      return state.clients.slice(itemsPerPage * page - (itemsPerPage - 1) - 1, itemsPerPage * page)
    }
  },
  mutations: {
    ADD_CLIENT (state, client) {
      state.clients.push(client)
    }
  },
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
      },
      {
        uuid: '48e009cc-a5b0-11ea-bb37-0242ac134267',
        status: 'Cliente',
        firstName: 'Juliana',
        lastName: 'Martins Silva',
        fullName: 'Juliana Martins Silva',
        email: 'jumartins.silva@hotmail.com',
        phoneNumber: '(16) 99819-3112',
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
        uuid: '48e009cc-a5b0-11ea-bb37-0242ac138643',
        status: 'Cliente',
        firstName: 'Luís',
        lastName: 'Rocha',
        fullName: 'Luís Rocha',
        email: 'luisrocha@yahoo.com.br',
        phoneNumber: '(16) 99776-9290',
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
        uuid: '48e009cc-a5b0-11ea-bb37-0242ac131234',
        status: 'Lead',
        firstName: 'Bruno',
        lastName: 'Cardoso',
        fullName: 'Bruno Cardoso',
        email: 'bruno.c@gmail.com',
        phoneNumber: '(12) 99232-3212',
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
        uuid: '48e009cc-a5b0-11ea-bb37-0242ac134321',
        status: 'Lead',
        firstName: 'Rafaela',
        lastName: 'Pereira',
        fullName: 'Rafaela Pereira',
        email: 'rafa@gmail.com',
        phoneNumber: '(17) 99232-3212',
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
        uuid: '48e009cc-a5b0-11ea-bb37-0242ac134323',
        status: 'Lead',
        firstName: 'Maria',
        lastName: 'Júlia',
        fullName: 'Maria Júlia',
        email: 'maju@gmail.com',
        phoneNumber: '(11) 99232-3242',
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
        uuid: '48e009cc-a5b0-11ea-bb37-0242ac134432',
        status: 'Lead',
        firstName: 'João Paulo',
        lastName: 'Rodrigues',
        fullName: 'João Paulo Rodrigues',
        email: 'johnjohn@gmail.com',
        phoneNumber: '(11) 99232-3299',
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
        uuid: '48e009cc-a5b0-11ea-bb37-0242ac134441',
        status: 'Cliente',
        firstName: 'Murilo',
        lastName: 'Faria',
        fullName: 'Murilo Faria',
        email: 'm.faria@gmail.com',
        phoneNumber: '(11) 99232-3212',
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
        uuid: '48e009cc-a5b0-11ea-bb37-0242ac134421',
        status: 'Lead',
        firstName: 'Marcelo',
        lastName: 'Santos',
        fullName: 'Marcelo Santos',
        email: 'marcelo@gmail.com',
        phoneNumber: '(11) 99232-3212',
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
        uuid: '48e009cc-a5b0-11ea-bb37-0242ac135432',
        status: 'Lead',
        firstName: 'Bruna',
        lastName: 'Santos',
        fullName: 'Bruna Santos',
        email: 'bru@gmail.com',
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
  }
})
