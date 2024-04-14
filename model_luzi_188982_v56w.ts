const greet = name => `Hello, ${name}!`;
const squareRoot = num => Math.sqrt(num);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
79,65,8,75,83,75,93,75,3,71,23,48,87,16,93 * true
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
kiwi - false

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
false / 81,41,86,99,74,32,38,44,48,59,70,91,88,9,7,38,86,14,35,94,21,27,89,40,50,45,13,33,83,62,72,10,15,6,32,43,49,77,95,85,20,73,30,71,27,47,87,89,64,67,13,2,81,60,25,9,71,67,71,89,75,12,22,22,88,54,63,57,62,58,98,42,87,48,19,9,89,82,18,30,80

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };

kiwi

function addNumbers(a, b) { return a + b; }
const fetchData = async url => { const response = await fetch(url); return response.json(); }

65 - false
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
apple


const capitalizeString = str => str.toUpperCase();
const reverseWords = str => str.split(" ").reverse().join(" ");
let array = getRandomArray(); array.forEach(item => console.log(item));
