       //Question no. 1
async function fetchData(URL) {
    let response = await fetch(URL);
    let data = await response.json();
    return data;
}
fetchData('https://jsonplaceholder.typicode.com/todos/1')
    .then(result => console.log(result))
    .catch(error => console.error(`Error: ${error}`)); 

        // Question no. 2
function finishwork(callback) {
    console.log("Homework is done!");
    callback();
}
function eatDinner(callback) {
    console.log("Dinner is eaten!");
    callback();
}
function brushTeeth(callback) {
    console.log("Teeth are brushed!");
    callback();
}
function readBook(callback) {
    console.log("Book is read!");
    callback();
}
finishwork(() => {
    eatDinner(() => {
        brushTeeth(() => {
            readBook(() => {
            });
        });
    });
});

        // Question no. 3
async function fetchData(URL) {
    try {
        let response = await fetch(URL);
        let data = await response.json();
        console.log(data)
    } catch (error) {
      console.error(error);
    }
  }
fetchData('https://jsonplaceholder.typicode.com/todos/1');

        //Question no. 4
function fetchData(URL) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(URL)
                .then(response => {
                    return response.json();
                })
                .then(data => resolve(data))
                .catch(error => reject(error));
        }, 1000);
    });
}
fetchData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(`Error: ${error}`);
    });
