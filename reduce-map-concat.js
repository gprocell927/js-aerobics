//1. Sum all the numbers in the array and multiply by 2.
//input: [1,3,5]
//output: 18
const nums = [1, 3, 5]
nums.map( n => n * 2).reduce((acc, r) => {
  return acc + r
}, 0)

//2. Capitalize every other word of a sentence string
//input: "A fat happy dog was super fat"
//output: "A FAT happy DOG was SUPER fat"
const sentence = 'A fat happy dog was super fat.'
sentence
    .split(" ")
    .map((word, i) => i % 2 === 0 ? word : word.toUpperCase())
    .join(" ")

//3. Given an object, output an array of strings with it's keys.
//Input: {bananas: 6, avocados: 7, berries: 9}
//output: ["bananas has 6", "avocados has 7", "berries has 9"]
const fruits = { bananas: 6, avocados: 7, berries: 9 }
Object
      .keys(fruits)
      .map(fruit => `${fruit} has ${fruits[fruit]}`)

//Sum Two Objects:
const obj1 = { cat: 5, dog: 5, zebra: 2}
const obj2 = { cat: 7, dog: 1, zebra: 3, lion: 4}
//Result = {cat: 12, dog: 6, zebra: 5, lion: 4}

const defaultToZero = (obj, key) => obj[key] || 0
const msum = key => defaultToZero(obj1, key) + defaultToZero(obj2, key)
const buildObj = (k, v) => {
  const o = {}
  o[k] = v
  return o
}

Object
  .keys(obj1)
  .concat(Object.keys(obj2))
  .reduce((acc, key) => acc.indexOf(key) >= 0 ? acc : acc.concat(key), [])
  .reduce((acc, key) => Object.assign(acc, buildObj(key, msum(key))), {})
