import React from "react";
import { Pressable, Text, View } from "@/utils/ReactTailwind";
import classNames from "classnames";
import { ITask } from "@/types";
import { useAppDispatch } from "@/hooks";
import { action } from "@/redux";
import useTaskrAPI from "@/services/taskr-api";

const TodoItem = ({ todo }: { todo: ITask }) => {
  const dispatch = useAppDispatch();
  const { toggleTask } = useTaskrAPI();

  const handleToggleTodo = async () => {
    try {
      dispatch(action.todos.toggleTodo(todo._id));
      await toggleTask(todo._id, todo.completed);
    } catch (error) {
      dispatch(action.todos.toggleTodo(todo._id));
    }
  };
  return (
    <View className="flex-row p-3 mb-2 rounded-xl items-center bg-white border border-slate-200">
      <Pressable
        onPress={handleToggleTodo}
        className={classNames(
          "w-6 h-6 mr-3 rounded-md",
          todo.completed ? "bg-slate-600" : "bg-white border border-slate-200"
        )}
      />
      <Text
        style={{ fontFamily: "Nunito_500Medium" }}
        className={classNames(
          "text-base",
          todo.completed ? "text-slate-400 line-through" : "text-slate-700"
        )}
      >
        {todo.title}
      </Text>
    </View>
  );
};

export default TodoItem;
