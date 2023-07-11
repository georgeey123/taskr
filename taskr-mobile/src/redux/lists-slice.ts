import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IList } from "@/types";

type initialStateType = {
  isLoaded: boolean;
  Lists: IList[];
};

const initialState: initialStateType = {
  isLoaded: false,
  // Lists: [
  //   { id: "wQy3AuaBlBut7rmq6oJUa", title: "💀 My Super List" },
  //   { id: "u-rfUIKLqcDm-oY6vfU93", title: "🙈 Wants & Needs" },
  //   { id: "iA0zSAXLvCO3JWIUvlKhE", title: "Super Cars" },
  // ],
  Lists: [],
};

const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    setIsLoaded(state, action: PayloadAction<boolean>) {
      state.isLoaded = action.payload;
    },
    setLists(state, action: PayloadAction<IList[]>) {
      state.Lists = action.payload;
    },
    addList(state, action: PayloadAction<IList>) {
      const newList = action.payload;
      state.Lists.push(newList);
    },
    updateList(state, action: PayloadAction<IList>) {
      const updateListItem = action.payload;
      state.Lists = state.Lists.map((list) => {
        if (list._id === updateListItem._id) {
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
      state.Lists = state.Lists.filter((list) => list._id !== id);
    },
  },
});

export default listsSlice;
