import { useAppSelector } from "@/hooks";
import { IUser } from "@/types";
import { useRouter, useSegments } from "expo-router";
import React from "react";

function useProtectedRoute(user: IUser | null) {
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace("/auth");
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace("/");
    }
  }, [user, segments, router]);
}

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  useProtectedRoute(isAuthenticated ? user : null);

  return <>{children}</>;
};

export default AuthProvider;
