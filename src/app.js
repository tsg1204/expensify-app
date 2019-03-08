 import React from 'react';
 import ReactDOM from 'react-dom';
 import { Provider } from 'react-redux';
 import AppRouter from './routers/AppRouter';
 import configureStore from './store/configureStore';
 import 'normalize.css/normalize.css'; 
 import './styles/styles.scss';
 import 'react-dates/lib/css/_datepicker.css';
 import './firebase/firebase';

//  import {addExpense} from './actions/expenses';
//  import {setTextFilter} from './actions/filters';
//  import getVisibleExpenses from './selectors/expenses';

 //using babel plugin: transform-class-properties (.babelrc)


const store = configureStore();

// store.dispatch(addExpense({ description: 'Water Bill', amount: 6700 }));
// store.dispatch(addExpense({ description: 'Gas bill', amount: 2700, createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Rent Bill', amount: 12700 }));

// //store.dispatch(setTextFilter('bill'));
// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000)

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

// console.log(visibleExpenses);
// console.log("testing");

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>   
)

ReactDOM.render(jsx, document.getElementById("app"));

