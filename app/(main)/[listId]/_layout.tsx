import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="index"
    >
      <Stack.Screen
        name="add_todo"
        options={{
          presentation: "containedTransparentModal",
        }}
      />
    </Stack>
  );
}
