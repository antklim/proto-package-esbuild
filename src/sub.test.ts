import { sub } from "./sub"

describe('sub', () => {
  test('subtracts numbers', () => {
    expect(sub(2, 1)).toEqual(1)
  })
})
