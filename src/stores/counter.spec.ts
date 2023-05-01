// vitest counter test
import { describe, expect, it } from 'vitest'
import { useCounterStore } from './counter'

// count up test
describe('count up', () => {
  it('count up', () => {
    const counterStore = useCounterStore()
    counterStore.increment()
    expect(counterStore.count).toBe(1)
  })
})
