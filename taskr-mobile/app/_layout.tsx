import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { Poppins_700Bold } from "@expo-google-fonts/poppins";
import { Nunito_500Medium, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { Provider } from "react-redux";
import store from "@/redux";
import AuthProvider from "./(authProvider)";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import InitializerProvider from "./(InitializerProvider)";
import { ClickOutsideProvider } from "react-native-click-outside";

export const unstable_settings = {
  initialRouteName: "index",
};

const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

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
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <InitializerProvider>
          <AuthProvider>
            <ClickOutsideProvider>
              <Slot />
            </ClickOutsideProvider>
          </AuthProvider>
        </InitializerProvider>
      </Provider>
    </QueryClientProvider>
  );
}
