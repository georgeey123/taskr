import React from "react";
import { Text, View, TextInput, Pressable } from "@/utils/ReactTailwind";
import classNames from "classnames";
import { SCREEN_WIDTH } from "@/constants";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { useAppDispatch } from "@/hooks";
import { action } from "@/redux";
import useTaskrAPI from "@/services/taskr-api";
import { useMutation } from "@tanstack/react-query";
import { useForm, Controller } from "react-hook-form";

type AddListFormData = {
  title: string;
};

const AddList = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { postList } = useTaskrAPI();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddListFormData>({
    defaultValues: {
      title: "",
    },
  });

  const { mutate, isLoading, isError } = useMutation({
    mutationKey: ["addList"],
    mutationFn: (postTitle: string) => postList(postTitle),
    onSuccess({ data }) {
      dispatch(action.lists.addList(data));
      router.back();
    },
  });

  return (
    <View className="flex-1 items-center justify-center">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <View
          style={{ width: SCREEN_WIDTH - 32 }}
          className={classNames(
            "bg-white rounded-xl border shadow-xl",
            isError ? "border-red-500" : "border-slate-300",
            "p-4"
          )}
        >
          <Text className="text-2xl mb-4">Add List</Text>

          <View
            className={classNames(
              "h-12 mb-4 flex-row items-center border border-slate-300 rounded-md",
              errors.title && "border-red-500"
            )}
          >
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  className="text-lg pl-4 w-full h-full"
                  placeholder="List Title"
                  autoCapitalize="none"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="title"
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
              onPress={handleSubmit((data: AddListFormData) =>
                mutate(data.title)
              )}
              className="h-14 ml-2 flex-1 items-center justify-center border border-slate-600"
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="#000" />
              ) : (
                <Text className="text-xl font-semibold uppercase text-slate-600">
                  Add
                </Text>
              )}
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AddList;
