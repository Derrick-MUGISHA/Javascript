// Asynchronous function or operation 

// async function () {
// await 
// }

// results (promise)


// setTimeout(() => {
//     console.log("I am a callback function");
// } , 5000);

// console.log("I am a synchronous function");


async function getPosts() {
    const response = await fetch("https://dummyjson.com/prod"); // these is an api call 
    // that uses fetch keyword to get data from the api and returns a promise 
    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
}
// .then() .catch() method 

const fetchData = () => {

    fetch("https://dummyjson.com/products")

    .then((response) => {
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
}

// try and catch method

async function fetchDataWithTryCatch() {
    try {

        const response = await fetch("https://dummyjson.com/products");

        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.error("Error fetching data:", error);
    }

}

fetchDataWithTryCatch();
