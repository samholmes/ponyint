import { add, div, mul, sub } from 'biggystring'

const registries = []

const f = expr => {
  registries.push([])
  return float => {
    const registry = registries.pop()
    if (registry.length === 0) return flaot
    // Evaluate the BigInt
    expr(...registry)
  }
}

export function PonyInt(val) {
  let n
  if (typeof val === 'string') {
    n = val.toString()
  } else {
    throw new Error('Invalid number type for PonyIn')
  }
  return {
    toValue() {
      const registry = registries[registries.length - 1]
      if (registry) registry.push()
      return parseInt(n)
    },
    // Implement operator methods
    add(x) {
      return add(n, x)
    },
    div(x) {
      return div(n, x)
    },
    mul(x) {
      return mul(n, x)
    },
    sub(x) {
      return sub(n, x)
    }
  }
}

const a = PonyInt('11')
const b = PonyInt('2')

// Code
console.log(a * b)
// Transpile
console.log(f((x1, x2) => x1.mul(x2))(a * b))
