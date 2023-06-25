import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { IList } from "../types";

type initialStateType = {
  Lists: IList[];
};

const initialState: initialStateType = {
  Lists: [
    { id: "wQy3AuaBlBut7rmq6oJUa", title: "💀 My Super List" },
    { id: "u-rfUIKLqcDm-oY6vfU93", title: "🙈 Wants & Needs" },
    { id: "iA0zSAXLvCO3JWIUvlKhE", title: "Super Cars" },
  ],
};

const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    setLists(state, action: PayloadAction<IList[]>) {
      state.Lists = action.payload;
    },
    addList(state, action: PayloadAction<string>) {
      const title = action.payload;
      const newList = {
        id: nanoid(),
        title,
      };
      state.Lists.push(newList);
    },
    updateList(state, action: PayloadAction<IList>) {
      const updateListItem = action.payload;
      state.Lists = state.Lists.map((list) => {
        if (list.id === updateListItem.id) {
          return {
            ...list,
            ...updateListItem,
          };
        }
        return list;
      });
    },
    deleteList(state, action: PayloadAction<string>) {
      const id = action.payload;
      state.Lists = state.Lists.filter((list) => list.id !== id);
    },
  },
});

export default listsSlice;
