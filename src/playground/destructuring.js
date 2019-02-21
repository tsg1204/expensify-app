//Array destructuring

//const address = ['1299 Dudley Street', 'Chapel Hill', 'North Carolina', '27517'];
const address = [];

const [street, city, state, zip] = address;
//const [, city, state = 'New York'] = address; //set up defaults

//console.log(`You are in ${address[1]} ${address[2]}.`);
console.log(`You are in ${city} ${state}.`);

const item = [ 'Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mPrice] = item;

console.log(`A medium ${itemName} costs ${mPrice}.`);


//Object destructuring

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self published'} = book.publisher;


// console.log(publisherName);
// const person = {
//     name: 'Tatiana',
//     age: 53,
//     location: {
//         city: 'Chapel Hill',
//         temp: 47
//     }
// }

// const {name: firstname = 'Anonymous', age} = person;

// console.log(`${firstname} is ${age}`);

// const { city, temp: temperature} = person.location;

// if (city && temperature) {
//     console.log(`It' ${temperature} is ${city}.`)
// }
