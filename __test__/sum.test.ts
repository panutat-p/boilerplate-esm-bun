import { expect, test } from 'bun:test'
import { sum } from '../src/sum.ts'

test('2 + 2', () => {
  expect(sum(1, 2)).toBe(3)
})
