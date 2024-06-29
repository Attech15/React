// step 1: create store by using configureStore from redux(core redux).

import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({  // configureStore takes object mostly
    reducer: todoReducer
}) 