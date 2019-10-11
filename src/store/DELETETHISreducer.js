import * as actionTypes from '../actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    
    switch ( action.type ) {
        case actionTypes.INCREMENT:
            return {...state, counter: state.counter + 1};
        case actionTypes.REMOVE_ONE:
            return {...state, counter: state.counter - 1};
        case actionTypes.ADD:
            return {...state, counter: state.counter + action.value};
        case actionTypes.REMOVE:
            return {...state, counter: state.counter - action.value};
        case actionTypes.STORE_RESULT:
            return {...state, results: state.results.concat({id: new Date(), value: state.counter})};
        case actionTypes.DELETE_RESULT:
            return {...state, results: state.results.filter(result => result.id !== action.resultElementId)}
    }
    
    return state;
}

export default reducer;