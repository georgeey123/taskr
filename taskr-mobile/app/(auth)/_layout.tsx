import { SafeAreaView } from "@/utils/ReactTailwind";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <SafeAreaView className="flex-1 bg-[#F2F2F2]">
      <Stack
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="auth"
      ></Stack>
    </SafeAreaView>
  );
}
