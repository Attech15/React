// step 2: create slice(reducers) by using createSlice from core reduxtoolkit. nanoid is used for uniquence so that react can differentiate between mulitpe slice then create the initial state of store (how store is looklike initially is empty,something is initailly is present in the store etc).
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { // we initially store the object in the store and also we can use arrays,objects etc .
    todos:[{id:1, text: "hello world"}]
}

// function sayHello() {
//     console.log("hello world");
// }
export const todoSlice = createSlice({ // we create slice name:todo name is by default property and every slice need a initial state .
    name: 'todo',
    initialState,
    reducers:{
        // addTodo:sayHello,
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => {
                return todo.id !== action.payload
            })
        },
        // removeTodo: (state, action) => {
        //     state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        // },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer