import { TASKR_AUTH } from "@/constants";
import { useAppDispatch } from "@/hooks";
import { action } from "@/redux";
import { View } from "@/utils/ReactTailwind";
import { useCallback, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import * as SplashScreen from "expo-splash-screen";

const InitializerProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        const auth = await SecureStore.getItemAsync(TASKR_AUTH);
        if (auth) {
          const parsedAuth = JSON.parse(auth);
          dispatch(action.auth.setAuth(parsedAuth));
        }
      } catch (e) {
        console.warn("async?", e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, [dispatch]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {children}
    </View>
  );
};
export default InitializerProvider;
