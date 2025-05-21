import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseButton from '../BaseButton.vue'

describe('BaseButton', () => {
  it('renders properly with default props', () => {
    const wrapper = mount(BaseButton, {
      props: {
        label: 'Add to Cart',
      },
    })

    expect(wrapper.text()).toContain('Add to Cart')
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('renders the default label when no prop is passed', () => {
    const wrapper = mount(BaseButton)
    expect(wrapper.text()).toBe('Add to Cart')
  })

  it('renders with custom label', () => {
    const customLabel = 'Add dessert'
    const wrapper = mount(BaseButton, {
      props: {
        label: customLabel,
      },
    })

    expect(wrapper.text()).toContain(customLabel)
  })

  it('has the correct CSS class', () => {
    const wrapper = mount(BaseButton, {
      props: {
        label: 'Add to Cart',
      },
    })

    const button = wrapper.find('button')
    expect(button.classes()).toContain('button')
  })

  it('changes the name of the button', async () => {
    const wrapper = mount(BaseButton, {
      props: {
        label: 'Add to Cart',
      },
    })

    const button = wrapper.find('button')
    expect(button.classes()).toContain('button')
    await wrapper.setProps({ label: 'Add dessert' })
    expect(button.text()).toBe('Add dessert')
  })
})
