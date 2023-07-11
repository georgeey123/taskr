import { IconButton } from "@/components/buttons";
import { SCREEN_WIDTH } from "@/constants";
import { useAppDispatch } from "@/hooks";
import { action } from "@/redux";
import useTaskrAPI from "@/services/taskr-api";
import { Pressable, Text, TextInput, View } from "@/utils/ReactTailwind";
import { AxiosError } from "axios";
import classNames from "classnames";
import { useRouter, useNavigation } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

type LoginFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { login } = useTaskrAPI();
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onLogin = handleSubmit(async (formData: LoginFormData) => {
    try {
      setLoading(true);
      const { data } = await login(formData);
      dispatch(
        action.auth.setAuth({
          accessToken: data.accessToken,
          user: {
            id: "1",
            username: "test",
          },
          isAuthenticated: true,
        })
      );
    } catch (err) {
      const error = err as AxiosError;
      console.log(error.response.data);
      setError("root", {
        message: (error.response.data as { error: string })?.error,
      });
    } finally {
      setLoading(false);
    }
  });
  return (
    <View className="relative flex-1 items-center justify-center">
      <View className="absolute top-0 left-0 p-3 ">
        <IconButton
          Icon={ChevronLeft}
          size={32}
          iconClassName="text-black"
          onPress={() => {
            if (navigation.canGoBack()) {
              router.back();
            } else {
              router.replace("/");
            }
          }}
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
          <Text className="text-3xl mb-4">Welcome</Text>
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
            onPress={onLogin}
            className="w-full h-12 items-center justify-center bg-sky-500 rounded-lg"
          >
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text className="text-xl font-semibold uppercase text-white">
                Login
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

export default Login;
