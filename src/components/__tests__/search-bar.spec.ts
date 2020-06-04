import { shallowMount } from '@vue/test-utils'
import SearchBar from '../SearchBar.vue'

describe('@/components/SearchBar.vue', () => {
  const wrapper = shallowMount(SearchBar, {
    propsData: {
      value: '',
      placeholder: 'Buscar por nome...'
    }
  })

  const input = wrapper.find('input')

  it('should set placeholder', () => {
    expect(wrapper.props().placeholder).toBe('Buscar por nome...')
    expect(input.attributes().placeholder).toBe('Buscar por nome...')
  })
})
