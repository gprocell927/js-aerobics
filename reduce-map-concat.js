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


// POSSIBLE JS PROBLEMS
// 1. Combine two objects
  const obj1 = { kale: null, apple: 5, orange: null, garlic: 130,
                  banana: 8, avocado: 44 }
  const obj2 = { kale: null, apple: null, orange: 3, garlic: 4,
                  banana: 2, pineapple: 1 }
// => { kale: 0, apple: 5, orange: 3, garlic: 134, banana: 10, avocado: 44, pineapple: 1 }
//First I find the keys of both objects and concatenate them into one array
const combinedObjs = Object.keys(obj1).concat(Object.keys(obj2))
// => ["kale", "apple", "orange", "garlic", "banana", "avocado", "kale", "apple", "orange", "garlic", "banana", "pineapple"]

//Second, I reduce the array of keys and eliminate duplicate keys (need to follow up on how this works)
const filteredProduce = combinedObjs.reduce((acc,key) => acc.indexOf(key) >= 0 ? acc : acc.concat(key), [])

// => ["kale", "apple", "orange", "garlic", "banana", "avocado", "pineapple"]


//Third, I map through filteredProduce to sum the values of the keys and default to zero if there are no values
const produceVals =
 filteredProduce
  .map(v => (obj1[v] || 0) + (obj2[v] || 0) )// => [0, 5, 3, 134, 10, 44, 1]

//Fourth, I create an empty object, and I loop through the keys and values to assign them to their respective...things
const result = {}
for (let i=0; i<filteredProduce.length; i++){
  result[filteredProduce[i]] = produceVals[i]
}
 // =>{"apple": 5, "avocado": 44, "banana": 10, "garlic": 134, "kale": 0, "orange": 3, "pineapple": 1}

//EASIER WAY!!
const obj1 = { kale: null, apple: 5, orange: null, garlic: 130, banana: 8, avocado: 44 }
const obj2 = { kale: null, apple: null, orange: 3, garlic: 4, banana: 2, pineapple: 1 }

let combined = new Object()

for(let key1 in obj1){
  combined[key1] = (combined[key1] || 0) + obj1[key1]
}

for(let key2 in obj2){
  combined[key2] = (combined[key2] || 0) + obj2[key2]
}
// =>{"apple": 5, "avocado": 44, "banana": 10, "garlic": 134, "kale": 0, "orange": 3, "pineapple": 1}



// 2. Reduce two arrays into one object
  const amount = [12, 5, 8, 130, 8, 44]
  const foodNames = ['kale', 'apple', 'orange', 'garlic', 'banana', 'avocado' ]
// => { kale: 12, apple: 5, orange: 8, garlic: 130, banana: 8, avocado: 44 }

// Create an empty object
const singleObj = new Object()

//loop through the keys (foodnames) and assign a value(amount) to each key
for (let i=0;i<foodNames.length;i++){
  singleObj[foodNames[i]] = amount[i]
}

// 3. Add value to a particular object key
const obj = { kale: 12, apple: 5, orange: 8, garlic: 130, banana: 8, avocado: 44 };
//arguments:  obj, 'apple', 4
// => { kale: 12, apple: 9, orange: 8, garlic: 130, banana: 8, avocado: 44 }

const addToCart = (ob, k, v) => {
  ob[k] = ob[k] + v
}

// 4. Count the number of occurances of values in an array, returns an object, using Reduce (can't use obj.values())
//	const vehs = [car, car, truck, bike, boat, truck, car]
	// => { car: 3, truck: 2, bike: 1, boat: 1 }

  const vehs = ["car","car","truck", "bike", "boat", "truck", "car"]
	// => { car: 3, truck: 2, bike: 1, boat: 1 }
vehs.reduce((count, current) => { // count = accumulator, current = current item
  if(count[current] !== 0){ // if the value of the current item is not 0
    count[current]++
    return count
  } else {
    count[current] = 1
    return count
  }
},{})  // => {"bike": 1, "boat": 1, "car": 3, "truck": 2}

//REFACTORED!
vehs.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1
  return acc
},{})

// 5. Use filter to return elements of an array that fit a provided argument.
	const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
// findFruits('ap') => ['apple', 'grapes']
// findFruits('o') => ['mango', 'orange']

const findFruits = (letters) => {
  const result = []
  fruits.filter((fruit) => {
    if (fruit.includes(letters)){
      result.push(fruit)
    }
  }
  )
   return result
  }

findFruits('an') // =>['apple','mango', 'orange']

//REFACTORED!!!
const findFruits = (letters) => {
  return fruits.filter((fruit) => fruit.includes(leters))
}

//6. Use splice to return given elements in an array and/or add an additional element into the array (still using splice only). USE THE DOCS.

	const countries = ['spain', 'china', 'mexico', 'ghana'];

  let deleted

  let final

    deleted = countries.splice(1,1) // =>['china']
    final = countries // => const final = ['spain', 'mexico', 'ghana']

// Return both the final array, and the element (s) that were removed.

// => const final = ['spain', 'mexico', 'ghana']
// => const removed = ['china']

deleted = countries.splice(3,0,'sweden')// => const final = ['spain', 'china', 'mexico', 'sweden', 'ghana']
// => const removed = []
