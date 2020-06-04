import store from '@/store'

describe('@/store/index.ts', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  describe('Getters', () => {
    test('getClients', () => {
      const itemsPerPage = 10
      const page = 1

      const clientsGot = store.getters.getClients(itemsPerPage, page)

      if (store.state.clients.length < itemsPerPage) {
        expect(clientsGot.length).toBeLessThanOrEqual(itemsPerPage)
      } else {
        expect(clientsGot.length).toBe(itemsPerPage)
      }
    })
  })

  describe('Mutations', () => {
    test('ADD_CLIENT', () => {
      const totalClientsBeforeMutation = store.state.clients.length

      store.commit('ADD_CLIENT', {
        uuid: 'eccbf4ac-a5af-11ea-bb37-0242ac130054',
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
      })

      expect(store.state.clients.length).toBe(totalClientsBeforeMutation + 1)
    })
  })
})
