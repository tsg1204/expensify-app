import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup removeExpense action object', () => {
    const action = removeExpense({id: '123abc'});

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

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
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last month rent'
    }

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })

});

test('should setup add expense action object with default values', () => {
    const action = addExpense();   
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
            
        }
    })
});
