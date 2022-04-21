import { createStore } from "redux";

/*
    redux를 만들었던 때 처럼 동일하게
    Store를 만들고 Reducer를 통해서 호출하는 구조
*/

const ADD = "ADD";
const DELETE = "DELETE";

const addTodo = (text) => {
    return {
        type: ADD,
        text
    }
}

const deleteTodo = (id) => {
    return {
        type: DELETE,
        id
    }
}

const reducer = (state = ["hello"], action) => {
    switch (action.type) {
        case ADD :
            return [ { text: action.text, id: Date.now() }, ...state];

        case DELETE :
            return state.filter( todo => todo !== action.id );

        default:
            return state;
    }
}

const store = createStore(reducer);

export const actionCreators = {
    addTodo,
    deleteTodo
}

export default store;