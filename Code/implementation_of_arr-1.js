// Implemente `` ：
// let arr = [1, 2, 3, 4]
// arr[-1] === 4 // true
// arr[-2] === 3 // true
// arr[-3] === 2 // true
// arr[-4] === 1 // true

let arr = [1, 2, 3, 4]

function createProxy(original) {
	const handler = {
		get(target, key) {
			key = Number(key)
			if (key < 0) { 
				key += target.length
			}
			return Reflect.get(target, key)
		}
	}
	return new Proxy(original, handler)
}

arr = createProxy(arr)
console.log(arr[-1])

console.log(arr[-1] === 4) // true
console.log(arr[-2] === 3) // true
console.log(arr[-3] === 2) // true
console.log(arr[-4] === 1) // true

// node implementation_of_arr-1.js
