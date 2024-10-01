export function randomNumber(n: number): number {
  return Math.random() * n
}

export function randomDecimal(n: number): string {
  return (Math.random() * n).toFixed(2)
}

export function randomNumString(n: number): string {
  return (Math.random() * n).toString()
}
