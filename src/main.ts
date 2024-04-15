import { sleep } from './sleep.ts'

console.log('✅ start')
console.log('env:', Bun.env.ENV)
console.log('version:', Bun.env.VERSION)

sleep(1500).then(() => {
  console.log('💤 sleep')
})

Bun.sleep(1000).then(() => {
    console.log('💤 Bun.sleep')
})

const fruits: Record<string, number> = {
  apple: 12,
  '🍌': 11,
  carrot: 10,
  // dragon: undefined, Type 'undefined' is not assignable
}

console.log('total key:', Object.keys(fruits).length)

if (fruits.apple) {
  console.log('apple exists')
}

if (fruits['🍌']) {
  console.log('🍌 exists')
}

if (Object.hasOwn(fruits, 'carrot')) {
  console.log('carrot exists')
}

if (!fruits.dragon) {
  console.log('❌ dragon does not exist')
}

console.log('✅ end')
