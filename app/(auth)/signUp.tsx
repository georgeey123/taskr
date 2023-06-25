import { IconButton } from "@/components/buttons";
import { SCREEN_WIDTH } from "@/constants";
import { Pressable, Text, TextInput, View } from "@/utils/ReactTailwind";
import classNames from "classnames";
import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

const SignUp = () => {
  const router = useRouter();
  return (
    <View className="relative flex-1 items-center justify-center">
      <View className="absolute top-0 left-0 p-3 ">
        <IconButton
          Icon={ChevronLeft}
          size={32}
          iconClassName="text-black"
          onPress={() => router.back()}
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <View
          style={{ width: SCREEN_WIDTH - 32 }}
          className={classNames(
            "bg-white rounded-xl",

            "p-4"
          )}
        >
          <Text className="text-3xl mb-4">Sign Up</Text>
          <View className="h-12 pl-4 mb-4 flex-row items-center border border-slate-300 rounded-md ">
            <TextInput
              className="text-lg"
              placeholder="Username"
              // value={title}
              // onChangeText={(text) => setTitle(text)}
            />
          </View>
          <View className="h-12 pl-4 mb-4 flex-row items-center border border-slate-300 rounded-md ">
            <TextInput
              className="text-lg"
              placeholder="Email"
              // value={title}
              // onChangeText={(text) => setTitle(text)}
            />
          </View>
          <View className="h-12 pl-4 mb-4 flex-row items-center border border-slate-300 rounded-md ">
            <TextInput
              className="text-lg"
              placeholder="Password"
              // value={title}
              // onChangeText={(text) => setTitle(text)}
            />
          </View>
          <Pressable className="w-full h-12 items-center justify-center bg-sky-500 rounded-lg">
            <Text className="text-xl font-semibold uppercase text-white">
              Sign Up
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUp;
