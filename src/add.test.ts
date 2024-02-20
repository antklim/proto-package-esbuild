import { add } from "./add"

describe('add', () => {
  test('adds numbers', () => {
    expect(add(1, 2)).toEqual(3)
  })
})
