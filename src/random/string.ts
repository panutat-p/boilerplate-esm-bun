import { randomBytes, randomUUID } from 'crypto'

export function randomId(n: number): string {
  return randomBytes(n).toString('hex')
}

export function uuid(): string {
  return randomUUID().toString()
}

export function randomString(n: number): string {
  return Array.from({ length: n }, () => Math.random().toString(36)[2]).join('')
}

export function randomInt(n: number): number {
  return Math.floor(Math.random() * n)
}
