import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "hello world" }],
  update: {},
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
      console.log("add");
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      console.log(action.payload.id);
      // state.todos = state.todos.map((todo) => {
      //   if (todo.id === action.payload.id) {
      //     return { ...todo, text: action.payload.text };
      //   }
      //   return todo;
      //   //  ( todo.id === action.payload.id
      //   //     ? { ...todo, text: action.payload.text }
      //   //     : todo)
      // });
      const updateIndex = state.todos.findIndex(
        (obj) => obj.id == action.payload.id
      );
      console.log(updateIndex + " index");
      console.log(action.payload.text + " text");

      state.todos[updateIndex].text = action.payload.text;
      state.update = {};
    },
    getUpdateTodo: (state, action) => {
      state.update = action.payload;
    },
  },
});

export const { addTodo, removeTodo, updateTodo, getUpdateTodo } = todoSlice.actions;

export default todoSlice.reducer;
