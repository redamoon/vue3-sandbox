import { describe, expect, test } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import MyButton from './MyButton.vue'

describe('MyButton', () => {
  test('My Button', () => {
    const wrapper = shallowMount(MyButton, {
      props: {
        label: 'ボタン',
        variant: 'secondary',
        size: 'medium'
      }
    })
    expect(wrapper.text()).toContain('ボタン')
    expect(wrapper.classes()).toContain('secondary')
    expect(wrapper.classes()).toContain('medium')
  })
})
