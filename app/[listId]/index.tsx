import React from "react";
import { View } from "../../src/utils/ReactTailwind";
import { useSearchParams } from "expo-router";
import { HeaderWithBack } from "../../src/components/layout/header";
import TodoItem from "../../src/components/Todo/todoItem";
import { FlatList } from "react-native";
import { useAppSelector } from "../../src/hooks";

const Lists = () => {
  const { listId } = useSearchParams();
  const { Lists } = useAppSelector((state) => state.lists);
  const { Todos } = useAppSelector((state) => state.todos);

  const SelectedList = Lists.find((list) => list.id === listId);

  const ListTodos = Todos.filter((todo) => todo.listID === listId);
  const ListTodosDone = ListTodos.filter((todo) => todo.isDone);
  const ListTodosNotDone = ListTodos.filter((todo) => !todo.isDone);

  return (
    <View className="flex-1">
      <HeaderWithBack title={SelectedList.title} />
      <View className="relative flex-1 px-4 pt-2">
        <FlatList
          style={{ paddingBottom: 200 }}
          data={[...ListTodosNotDone, ...ListTodosDone]}
          renderItem={({ item }) => <TodoItem todo={item} />}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>
    </View>
  );
};

export default Lists;
