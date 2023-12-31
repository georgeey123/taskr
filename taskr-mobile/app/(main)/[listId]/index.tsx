import React from "react";
import { Text, View } from "@/utils/ReactTailwind";
import { useRouter, useSearchParams } from "expo-router";
import TodoItem from "@/components/Todo/todoItem";
import { ActivityIndicator, FlatList } from "react-native";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { HeaderWithBack } from "@/components/layout/headers";
import { useQuery } from "@tanstack/react-query";
import useTaskrAPI from "@/services/taskr-api";
import { action } from "@/redux";
import { IconButton } from "@/components/buttons";
import { Plus } from "lucide-react-native";

const Lists = () => {
  const router = useRouter();
  const { listId } = useSearchParams();
  const { Lists } = useAppSelector((state) => state.lists);
  const { Todos } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();
  const { getTasks: getApiTasks } = useTaskrAPI();

  const SelectedList = Lists.find((list) => list._id === listId);

  const { isLoading, isSuccess } = useQuery({
    enabled: !!listId,
    queryKey: ["todos", listId],
    queryFn: () => getApiTasks(listId as string),
    onSuccess: ({ data }) => {
      dispatch(action.todos.addTodos(data));
    },
  });

  const ListTodos = Todos.filter((todo) => todo.listId === listId);
  const ListTodosDone = ListTodos.filter((todo) => todo.completed);
  const ListTodosNotDone = ListTodos.filter((todo) => !todo.completed);

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
        {isLoading && (
          <View className="flex-1 items-center justify-center">
            <ActivityIndicator size="large" color="#000" />
          </View>
        )}
        {isSuccess && ListTodos.length > 0 ? (
          <FlatList
            style={{ paddingBottom: 200 }}
            data={[...ListTodosNotDone, ...ListTodosDone]}
            renderItem={({ item }) => <TodoItem todo={item} />}
            keyExtractor={(item) => item._id}
          ></FlatList>
        ) : (
          <View className="flex-1 items-center justify-center">
            <Text className="text-3xl">No tasks</Text>
          </View>
        )}
      </View>
      <IconButton
        Icon={Plus}
        size={32}
        iconClassName="text-white"
        className="absolute bottom-6 right-6 w-16 h-16 bg-sky-500 active:bg-sky-600 items-center justify-center rounded-full"
        onPress={() => router.push(`/${SelectedList._id}/add_todo`)}
      />
    </View>
  );
};

export default Lists;
