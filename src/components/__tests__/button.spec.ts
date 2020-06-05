import { shallowMount } from '@vue/test-utils'
import Button from '../Button.vue'

describe('@/components/Button.vue', () => {
  describe('primary', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        theme: 'primary',
        text: 'Adicionar'
      }
    })
  
    const button = wrapper.find('button')

    it('should set theme', () => {
      expect(wrapper.props().theme).toBe('primary')
    })
  
    it('should set text', () => {
      expect(wrapper.props().text).toBe('Adicionar')
      expect(wrapper.text()).toBe('Adicionar')
    })

    it('should style correctly', () => {
      expect(button.attributes().style).toBe('background-color: rgb(98, 0, 238); color: rgb(255, 255, 255);')
    })
  })

  describe('secondary', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        theme: 'secondary',
        text: 'Cancelar'
      }
    })
  
    const button = wrapper.find('button')

    it('should set theme', () => {
      expect(wrapper.props().theme).toBe('secondary')
    })
  
    it('should set text', () => {
      expect(wrapper.props().text).toBe('Cancelar')
      expect(wrapper.text()).toBe('Cancelar')
    })

    it('should style correctly', () => {
      expect(button.attributes().style).toBe('background-color: rgb(255, 255, 255); color: rgb(98, 0, 238);')
    })
  })
})
