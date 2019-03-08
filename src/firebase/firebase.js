import * as firebase from 'firebase';

const config = {
    apiKey: "ABC",
    authDomain: "expensify-74a5a.firebaseapp.com",
    databaseURL: "https://expensify-74a5a.firebaseio.com",
    projectId: "expensify-74a5a",
    storageBucket: "expensify-74a5a.appspot.com",
    messagingSenderId: "435885812381"
};
firebase.initializeApp(config);

const database = firebase.database();

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     })
//     .catch((e) => {
//         console.log('error: ', e);
//     });

database.ref().set({
    name: 'Tatiana Grigorieva',
    age: 53,
    isSingle: true,
    location: {
        city: 'Chapel Hill',
        country: 'United States'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((e) => {
    console.log('This failed.', e);
});


// //database.ref().set('My data here!');

// database.ref('age').set(105);
// database.ref('location/city').set('Durham');

// database.ref('attributes').set({
//         height: 5.4,
//         weight: 146
// })