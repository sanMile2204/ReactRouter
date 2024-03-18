import { configureStore } from "@reduxjs/toolkit";
import TODOSlice from "./features/TODOSlice";

export const store=configureStore({
    reducer: {
        todos: TODOSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type addDispatch = typeof store.dispatch;

export default store;
