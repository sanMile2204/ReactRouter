import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import ButtonProps from "../../models/Button";

export interface TODOData {
    id: number,
    title: string,
    description: string,
    creationTime: number,
    completed: boolean
  };

  export interface DetailProps {
    todoInfo: TODOData,
    button: ButtonProps
  };

  interface TODOState {
    todos: TODOData[]
  }

  const initialState: TODOState = {
    todos: []
  }

  export const TODOSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTODO: (state, action: PayloadAction<TODOData>) => {
            state.todos.push({
                id: state.todos.length,
                title: action.payload.title,
                description: action.payload.description,
                creationTime: action.payload.creationTime,
                completed: false
            })
        },
        removeTODO: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        removeAllTODO: (state) => {
          state.todos = [];
        },
        markAsCompleted: (state, action: PayloadAction<number>) => {
          state.todos.map(todo => {
            if (todo.id !== action.payload) {
              return todo;
            }
            return {
              ...todo, 
              completed: !todo.completed
            }
          })
        }
    }
  });

  export default TODOSlice.reducer;
  export const { addTODO, removeTODO, removeAllTODO, markAsCompleted } = TODOSlice.actions