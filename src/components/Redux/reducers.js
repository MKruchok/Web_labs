import {combineReducers} from "redux";

export default function todoReducer(state = [], action) {
    switch (action.type) {
        case "ADD":
            const item = action.payload;
            return [...state, item]
        case "DELETE":
            const id = state.findIndex(item => item.name === action.payload.name)
            console.log(id)
            return [...state.slice(0, id), ...state.slice(id + 1)];
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    items: todoReducer,
})