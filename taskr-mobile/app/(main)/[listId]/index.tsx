import React from "react";
import { Text, View } from "@/utils/ReactTailwind";
import { useSearchParams } from "expo-router";
import TodoItem from "@/components/Todo/todoItem";
import { FlatList } from "react-native";
import { useAppSelector } from "@/hooks";
import { HeaderWithBack } from "@/components/layout/headers";

const Lists = () => {
  const { listId } = useSearchParams();
  const { Lists } = useAppSelector((state) => state.lists);
  const { Todos } = useAppSelector((state) => state.todos);

  const SelectedList = Lists.find((list) => list.id === listId);

  const ListTodos = Todos.filter((todo) => todo.listID === listId);
  const ListTodosDone = ListTodos.filter((todo) => todo.isDone);
  const ListTodosNotDone = ListTodos.filter((todo) => !todo.isDone);

  if (SelectedList === undefined) {
    return (
      <View className="flex-1">
        <HeaderWithBack
          List={{
            id: "",
            title: "",
          }}
        />
        <View className="flex-1 items-center justify-center">
          <Text className="text-3xl">Oops</Text>
          <Text className="text-xl">List not found</Text>
        </View>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <HeaderWithBack List={SelectedList} />
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
