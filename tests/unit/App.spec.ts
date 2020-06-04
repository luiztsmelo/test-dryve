import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(App)

    expect(wrapper.isVueInstance).toBeTruthy()
  })
})
