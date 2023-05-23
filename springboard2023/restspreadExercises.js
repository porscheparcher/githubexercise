//refactor function
const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

//findMin
const findMin = (...args) => Math.min(...args);

//mergeObjects
mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

//doubleAndReturnArgs

const doubleAndReturnArgs = (array, ...args) => [...array, ...args.map(arg => arg * 2)];

//Slice and Dice!

const removeRandom = (items) => Math.floor(Math.random() * items.length) => [...items.slice(0, index), ...items.slice(index + 1)];

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key, val) => ({...obj, [key]: val});

const removeKey = (obj, key) => {
    const newObj = {...obj}
    delete newObj[key]
    return newObj;
};

const combine = (obj1, obj2) => let newObj1 = combine ({...obj1, ...obj2}) => newObj1;

const update = (obj, key, val) => let newObj2 = ({obj, ...[key]: ...val}) => newObj2