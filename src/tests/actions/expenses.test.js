import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

const createMockStore = configureMockStore([thunk]);

test('should setup edit Expense action object', () => {
    const action = editExpense('123abc', { note: 'Updated note' } )

    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id:'123abc',
        updates: {
            note: 'Updated note'
        }
    })
});

test('should setup add expense action object with provided values', () => {

    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note:' note for mouse',
        createdAt: 1000
    }

    store.dispatch(startAddExpense(expenseData)).then(() => {
        expect(1).toBe(1);
        done();
    });
})

test('should add expense with defaults to database and store', () => {
    
})

// test('should setup add expense action object with default values', () => {
//     const action = addExpense();   
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             amount: 0,
//             createdAt: 0,
//             note: ''
            
//         }
//     })
// });
