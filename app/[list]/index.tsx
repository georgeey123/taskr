import React from "react";
import { View, Text } from "../../src/utils/ReactTailwind";
import { useSearchParams } from "expo-router";
import { HeaderWithBack } from "../../src/components/layout/header";
import TodoItem from "../../src/components/Todo/todoItem";
import { FlatList } from "react-native";

const Lists = () => {
  const { list } = useSearchParams();
  return (
    <View className="flex-1">
      <HeaderWithBack title={list as string} />
      <View className="relative flex-1 px-4 pt-2">
        <FlatList
          style={{ paddingBottom: 200 }}
          data={[
            { key: "a", title: "💀 My Super List" },
            { key: "b", title: "🙈 Wants & Needs" },
            { key: "as", title: "🚗 Super Cars" },
          ]}
          renderItem={({ item }) => <TodoItem />}
          keyExtractor={(item) => item.key}
        ></FlatList>
      </View>
    </View>
  );
};

export default Lists;
