 import React from 'react';
 import ReactDOM from 'react-dom';
 import AppRouter from './routers/AppRouter';
 import configureStore from './store/configureStore';
 import {addExpense} from './actions/expenses';
 import {setTextFilter} from './actions/filters';
 import getVisibleExpenses from './selectors/expenses';
 import 'normalize.css/normalize.css'; 
 import './styles/styles.scss';
 //using babel plugin: transform-class-properties (.babelrc)


const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 6700 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 2700 }));

//store.dispatch(setTextFilter('bill'));
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById("app"));

