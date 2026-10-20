
//   these means its an object {}

const student = {
  name: "Grace",
  age: 22,
  track: "Frontend",
  skills: ["HTML", "CSS"],
  address: { city: "Kigali", district: "Gasabo" },
  greet() {
    return `Hi, I'm ${this.name}`;
  },
};
 
// console.log(student.name); // these is a dot notation method

// console.log(student["track"]); // these is a bracket notation method

// console.log(student.address.district);  // these is a dot notation with a nested object

// console.log(student.skills[0]); // these is a dot notation with an array index

// console.log(student.phone);
// console.log(student.phone?.number);


// updating, deleting and adding new properties to an object

// 1 add 

student.email = "derrick@igirerwanda.org"

// 2 updating

student.age = 23
student.skills.push("Javascript")

// 3 deleting

delete student. greet 

// console.log(student);


// Looping over an object

const prices = { shoes: 45000, bag: 30000, cap: 8000 };

// console.log(Object.entries(prices));

for (const [key, value] of Object.entries(prices)){
    // console.log(`Thes is ${key} costs ${value} RWF`);
}

const total = Object.values(prices).reduce((acc, curr) => acc + curr);

// console.log(`The total cost of all items is ${total} RWF`);


// Destructuring an object

const user = {
    name: "Derrick",
    age: 22,
    address: {
        city: "Kigali",
        district: "Gasabo"
    },
    skills: ["HTML", "CSS", "Javascript", "React"],
    greet() {
        return `Hi, I'm ${this.name}`;
    },
    login() {
        return `${this.name} is logged in`;
    }
}

const {name, age, address: {city, district}, skills, greet, login} = user;

console.log(name)


