import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "@/types";

type initialStateType = {
  Todos: ITask[];
};

const initialState: initialStateType = {
  Todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos(state, action: PayloadAction<ITask[]>) {
      let oldTodos = state.Todos;
      for (const todo of action.payload) {
        if (!state.Todos.find((item) => item._id === todo._id)) {
          oldTodos.push(todo);
          state.Todos = oldTodos;
        } else {
          state.Todos = state.Todos.map((item) =>
            item._id === todo._id ? todo : item
          );
        }
      }
    },
    setTodos(state, action: PayloadAction<ITask[]>) {
      state.Todos = action.payload;
    },
    addTodo(state, action: PayloadAction<ITask>) {
      const newTodo: ITask = action.payload;
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
        todo._id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});

export default todosSlice;
