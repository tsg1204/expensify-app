import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })
// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     })

// database.ref('expenses').push({
//     description: 'Landscaping',
//     note: 'pay every month',
//     amount: 2000,
//     createdAt: Date()
// })

// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'pay every month',
//     amount: 100000,
//     createdAt: Date()
// })

// database.ref('expenses').push({
//     description: 'Water Bill',
//     note: 'pay every month',
//     amount: 5500,
//     createdAt: Date()
// })

//database.ref('notes/-L_hchv_nXbeJeHmlCbz'). remove()
// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'Teact, Node'
// })
// const firebaseNotes = {
//     notes: {
//         theIdOne: {
//             title: 'First note',
//             body: 'This is my note'
//         },
//         theIdTwo: {
//             title: 'First note',
//             body: 'This is my note'
//         }        
//     }
// }

// const notes = [{
//     id: '12',
//     title: 'First note',
//     body: 'This is my note'
// }, {
//     id: '15',
//     title: 'Second note',
//     body: 'This is my note'    
// }];

// database.ref('notes').set(notes);
// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// }, (e) => {
//     console.log('Error fetching data', e);
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// })

// setTimeout(() => {
//     database.ref('age').set(35);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(45);
// }, 10500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('This failed.', e);
//     })

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     })
//     .catch((e) => {
//         console.log('error: ', e);
//     });

// database.ref().set({
//     name: 'Tatiana Grigorieva',
//     age: 53,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Chapel Hill',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// }).then(() => {
//     console.log('Data is updated');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// //database.ref().set('My data here!');

// database.ref('age').set(105);
// database.ref('location/city').set('Durham');

// database.ref('attributes').set({
//         height: 5.4,
//         weight: 146
// })