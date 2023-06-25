import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../types";

type initialStateType = {
  Todos: ITodo[];
};

const initialState: initialStateType = {
  Todos: [
    {
      id: "vj_yKQd2QWWzDkjs77wbn",
      listID: "wQy3AuaBlBut7rmq6oJUa",
      title: "Learn React",
      isDone: false,
    },
    {
      id: "vj_yKQd2QWWzDkds77wbn",
      listID: "wQy3AuaBlBut7rmq6oJUa",
      title: "Learn Tailwind",
      isDone: true,
    },
    {
      id: "vj_yKQd2QWszDkjs77wbn",
      listID: "wQy3AuaBlBut7rmq6oJUa",
      title: "Take Ohemaa Out",
      isDone: false,
    },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos(state, action: PayloadAction<ITodo[]>) {
      state.Todos = action.payload;
    },
    addTodo(state, action: PayloadAction<{ title: string; listID: string }>) {
      const newTodo: ITodo = {
        id: nanoid(),
        listID: action.payload.listID,
        title: action.payload.title,
        isDone: false,
      };
      state.Todos = [newTodo, ...state.Todos];
    },
    updateTodo(state, action: PayloadAction<{ id: string; title: string }>) {
      state.Todos = state.Todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo
      );
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.Todos = state.Todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo(state, action: PayloadAction<string>) {
      state.Todos = state.Todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
  },
});

export default todosSlice;
