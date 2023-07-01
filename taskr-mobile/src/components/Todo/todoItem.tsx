import React from "react";
import { Pressable, Text, View } from "@/utils/ReactTailwind";
import classNames from "classnames";
import { ITodo } from "@/types";
import { useAppDispatch } from "@/hooks";
import { action } from "@/redux";

const TodoItem = ({ todo }: { todo: ITodo }) => {
  const dispatch = useAppDispatch();
  return (
    <View className="flex-row p-3 mb-2 rounded-xl items-center bg-white border border-slate-200">
      <Pressable
        onPress={() => dispatch(action.todos.toggleTodo(todo.id))}
        className={classNames(
          "w-6 h-6 mr-3 rounded-md",
          todo.isDone ? "bg-slate-600" : "bg-white border border-slate-200"
        )}
      />
      <Text
        style={{ fontFamily: "Nunito_500Medium" }}
        className={classNames(
          "text-base",
          todo.isDone ? "text-slate-400 line-through" : "text-slate-700"
        )}
      >
        {todo.title}
      </Text>
    </View>
  );
};

export default TodoItem;
