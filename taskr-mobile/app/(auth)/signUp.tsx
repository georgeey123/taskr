import { IconButton } from "@/components/buttons";
import { SCREEN_WIDTH } from "@/constants";
import useTaskrAPI from "@/services/taskr-api";
import { Pressable, Text, TextInput, View } from "@/utils/ReactTailwind";
import { useMutation } from "@tanstack/react-query";
import classNames from "classnames";
import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

type SignupFormData = {
  name: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const router = useRouter();
  const { register } = useTaskrAPI();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { mutate, isLoading } = useMutation({
    mutationKey: ["register"],
    mutationFn: (data: Parameters<typeof register>[0]) => register(data),
    onSuccess({ data }) {
      router.replace("/login");
    },
  });

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
          <View className="h-12 mb-4 border border-slate-300 rounded-md">
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  className="text-lg pl-4 w-full h-full"
                  placeholder="Username"
                  autoCapitalize="none"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="name"
            />
          </View>
          <View className="h-12 mb-4 border border-slate-300 rounded-md">
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  className="text-lg pl-4 w-full h-full"
                  placeholder="Email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="email"
            />
          </View>
          <View className="h-12 mb-4 border border-slate-300 rounded-md">
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  className="text-lg pl-4 w-full h-full"
                  placeholder="Password"
                  autoCapitalize="none"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="password"
            />
          </View>
          <Pressable
            onPress={handleSubmit((data: SignupFormData) => mutate(data))}
            className="w-full h-12 items-center justify-center bg-sky-500 rounded-lg"
          >
            {isLoading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text className="text-xl font-semibold uppercase text-white">
                Sign Up
              </Text>
            )}
          </Pressable>
        </View>
        {errors.root && (
          <Text className="text-red-500 mt-4">{errors.root.message}</Text>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUp;
