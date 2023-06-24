import { Stack } from "expo-router";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { Poppins_700Bold } from "@expo-google-fonts/poppins";
import { Nunito_500Medium, Nunito_700Bold } from "@expo-google-fonts/nunito";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_500Medium,
    Inter_600SemiBold,
    Nunito_500Medium,
    Nunito_700Bold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="index"
    />
  );
}
