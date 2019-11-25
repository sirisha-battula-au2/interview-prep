const mySet = new WeakSet(); // Initializes an empty weak set
// Difference between the Set & Weak Set
// Initializes a set with 3 values { 1, 2, 3 }
const mySet2 = new Set([1, 2, 3, 3]);
// The same syntax doesn't work for WeakSet
// Throws an error because we're using primitive values
const mySet2 = new WeakSet([1, 2, 3, 3]);
// The correct way to initialize a WeakSet
const helloWorld = { hello : 'world' };
const mySet3 = new WeakSet([helloWorld]);
console.log(mySet3.has(helloWorld)); // true
