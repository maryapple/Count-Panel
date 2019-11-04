const actionCreator = payload => ({
    type: 'INCREMENT',
    payload // содержание
})

// Функция Reducer, возвращающая новый state
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return 1
        default:
            return 0
    }
}

let state = 0;

// dispatch, вызов action (action-Объект)
const dispatch = action => {
    state = reducer(state, action)
};

dispatch(actionCreator(0));

console.log(state);