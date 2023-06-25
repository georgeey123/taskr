import { SafeAreaView } from "@/utils/ReactTailwind";
import { Stack } from "expo-router";

export default function MainLayout() {
  return (
    <SafeAreaView className="flex-1 bg-[#F2F2F2]">
      <Stack
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="index"
      >
        <Stack.Screen
          name="add_list"
          options={{
            presentation: "containedTransparentModal",
          }}
        />
      </Stack>
    </SafeAreaView>
  );
}
