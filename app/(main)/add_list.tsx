import React, { useState } from "react";
import { Text, View, TextInput, Pressable } from "@/utils/ReactTailwind";
import classNames from "classnames";
import { SCREEN_WIDTH } from "@/constants";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useRouter } from "expo-router";
import { useAppDispatch } from "@/hooks";
import { action } from "@/redux";

const AddList = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <View className="flex-1 items-center justify-center bg-black/5">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <View
          style={{ width: SCREEN_WIDTH - 32 }}
          className={classNames(
            "bg-white rounded-xl border border-slate-300 shadow-xl",

            "p-4"
          )}
        >
          <Text className="text-2xl mb-4">Add List</Text>

          <View className="h-12 pl-4 mb-4 flex-row items-center border border-slate-300 rounded-md ">
            <TextInput
              className="text-lg"
              placeholder="List Title"
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
          </View>
          <View className="flex-row w-full justify-between items-center">
            <Pressable
              className="h-14 flex-1 mr-2 items-center justify-center border border-red-500"
              onPress={() => router.back()}
            >
              <Text className="text-xl font-semibold uppercase text-red-500">
                Cancel
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                dispatch(action.lists.addList(title));
                router.back();
              }}
              className="h-14 ml-2 flex-1 items-center justify-center border border-slate-600"
            >
              <Text className="text-xl font-semibold uppercase text-slate-600">
                Add
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AddList;
