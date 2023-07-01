import { SCREEN_HEIGHT } from "@/constants";
import { Pressable, Text, View } from "@/utils/ReactTailwind";
import { useRouter } from "expo-router";
import React from "react";

const Auth = () => {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center">
      <View
        style={{
          height: SCREEN_HEIGHT - 8 * 10,
        }}
        className="w-full pt-48 justify-between items-center"
      >
        <View className="flex-col items-center ">
          <Text
            style={{ fontFamily: "Nunito_700Bold" }}
            className="text-5xl font-bold"
          >
            Taskr
          </Text>
          <Text>Your favorite notes app</Text>
        </View>

        <View>
          <Pressable
            onPress={() => router.push("/login")}
            className="w-[250px] h-14 items-center justify-center bg-sky-500 rounded-3xl"
          >
            <Text className="text-white text-xl font-semibold">Login</Text>
          </Pressable>
          <Pressable
            onPress={() => router.push("/signUp")}
            className="w-[250px] h-14 items-center justify-center rounded-3xl"
          >
            <Text className="text-black text-xl font-semibold">Sign Up</Text>
          </Pressable>
        </View>
        {/* <Button
          title="Login"
          onPress={() => {
            dispatch(action.auth.setIsAuthenticated(true));
            dispatch(
              action.auth.setUser({
                id: "1",
                username: "Name Here",
              })
            );
          }}
        /> */}
      </View>
    </View>
  );
};

export default Auth;
