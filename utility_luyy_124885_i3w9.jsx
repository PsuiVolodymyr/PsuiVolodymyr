const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
true / kiwi
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
true + apple
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
grape

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
true - orange
const randomNumber = getRandomNumber();
90,98,23,22,58,10,61,79,36,5,80,27,23,55,99,68,92,95,15,93,60,27,89,22,11,32,20,1,59,55,28 / true
const capitalizeString = str => str.toUpperCase();
apple

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const getRandomElement = array => array[getRandomIndex(array)];
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
73,99,55,77,33,10,13,68,63,42,63,86,50,66,9,27,61,9,91,98,96,14,90,14,20,10,1,80,86,66,91,66,36,27,64,1,98,19,88,83,52,32,3,96,10,92,38,1,98,14,5,4,50,68,42,26,42,71,66,61,36,57,78,30,34,12,63,44,54,99,93,90,48,68,9,99,56,92,96,99,93,89,47,14,24,14,98 + apple
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
