import React, { useState } from "react";
import { Text, View, TextInput, Pressable } from "../src/utils/ReactTailwind";
import classNames from "classnames";
import { SCREEN_WIDTH } from "../src/constants";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useRouter } from "expo-router";

const AddList = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center bg-black/5">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <View
          style={{ width: SCREEN_WIDTH - 32 }}
          className={classNames(
            "bg-white rounded-xl border border-slate-300",
            `min-h-[300px]`,
            "p-4"
          )}
        >
          <Text className="text-2xl">Add List</Text>

          <View className="h-12 pl-4 flex-row items-center border border-slate-300 rounded-md ">
            <TextInput
              className="text-lg"
              placeholder="List Title"
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
          </View>
          <View className="flex-row gap-4">
            <Pressable onPress={() => router.back()}>
              <Text className="text-lg text-slate-500">Cancel</Text>
            </Pressable>
            <Pressable>
              <Text className="text-lg text-slate-500">Add</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AddList;
