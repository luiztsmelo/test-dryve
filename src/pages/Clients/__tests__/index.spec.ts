import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Clients from '../index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Clients page', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(Clients)

    expect(wrapper.isVueInstance).toBeTruthy()
  })
})
