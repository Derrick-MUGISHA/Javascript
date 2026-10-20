//  the first way to create an array and these is also 
// recommended way to create an array
const fruits = ['apple', 'banana', 'orange', 'kiwi', 'mango'];
const scores = [88, 90, 78, 95, 85, 92, 80, 95, 89, 91, 87, 93, 82, 84, 86, 94, 96, 97, 98, 99];

// new keyword to create an array 

const colors = new Array('red', 'green', 'blue', 'yellow');
const numbers = new Array(7);
const mixedArray = new Array('apple', 5, true, null, undefined, { name: 'John' }, [1, 2, 3]);

// console.log(mixedArray);

// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);
// console.log(fruits.length);
// console.log(fruits[10]);


// 1 array mutation (add, remove, update)


// removing and adding elements at the end of an array  
fruits.push('grape');
fruits.pop();


// *removing and adding elements at the beginning of an array 

fruits.unshift('strawberry');
fruits.shift();

//  update or remove content within an array 

fruits.splice(3, 0, "pear", "peach");


// console.log(fruits);



// 2 array searching & indexing and filter content

const includes = scores.includes(90);
const includes2 = fruits.includes("banana");

const index = scores.indexOf(95);
const index2 = fruits.indexOf("iwi");

const find = scores.find((z) => {
    return z > 100;
});

const findIndex = scores.findIndex((z) => {
    return z > 90;
})

const some = scores.some((z) => {
    return z > 100;
})

const every = scores.every((z) => {
    return z > 0;
})

// console.log(every);







// Transforming an array 

// 1. forEach()

const names = ["Derrick", "Eric", "John", "Jane", "Mary"];

names.forEach((n, index) => {
    // console.log(`${index + 1}: ${n}`);
})

// 2. map()

const newName = names.map((n) => {
    return n.toUpperCase();
})

// console.log(newName);
// console.log(names);


// 3 filter()

const marks = scores.filter((m) => {
    return m >= 90;
})

// console.log(marks);


// 4 reduce()

const total = scores.reduce((acc, curr) => {
    return acc + curr;
}, 0)

// console.log(total);

// slice()

const sliced = scores.slice(0, 1)

// console.log(sliced);


// sort()

const sorted = scores.sort((a, b) => a-b) 
 
console.log(sorted);