import { describe, expect, it } from 'vitest'
import { add } from './add'

describe('add', () => {
  it('1 + 2 = 3', () => {
    const result = add(1, 2)

    expect(result).toBe(3)
  })
  it('should', function () {
    expect(1).toBe(1)
    const number = 1

    expect(number).toBe(1)
  })
})
