import { shallowMount } from '@vue/test-utils'
import Clients from '@/pages/Clients/index.vue'
import store from '@/store'

describe('@/pages/Clients/index.vue', () => {
  const wrapper = shallowMount(Clients, {
    store,
    data() {
      return {
        page: 1,
        itemsPerPage: 10
      }
    }
  })

  const clientRows = wrapper.findAll('.client-row')

  it('should render table correctly based on pagination configs', () => {
    if (store.state.clients.length < wrapper.vm.$data.itemsPerPage) {
      expect(clientRows.length).toBeLessThanOrEqual(wrapper.vm.$data.itemsPerPage)
    } else {
      expect(clientRows.length).toBe(wrapper.vm.$data.itemsPerPage)
    }
  })
})
