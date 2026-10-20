//Closures

function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

const counter = createCounter();
console.log(counter());

function makeTaxCalculator(rate){
    return (amount) => amount * rate;
}

const vatRwanda = makeTaxCalculator(0.18);
console.log(vatRwanda(10000));


function repeat(times, action) {
  for (let i = 1; i <= times; i++) {
    action(i);
  }
}
 
repeat(3, (n) => console.log(`Reminder #${n}: drink water`));  // these is a callback function);



setTimeout(() => console.log("2 seconds later"), 2000);


// function that addes 3, 2

function add(a, b) {
    return a + b;
}

console.log(add(3, 2));



function transform(list, fn) {
  const result = [];
  console.log(result);

//   a loop its a for.. of

  for (const item of list) result.push(fn(item));

  //   Javascript build-in methods wich included .push()

  return result;
}item

console.log(transform([1, 2, 3], (n) => n * 2));






// 1500000 -> 1,500,000


