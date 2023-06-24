import { Text as NText, View as NView } from "react-native";
import { SafeAreaView as NSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";

const View = styled(NView);
const Text = styled(NText);
const SafeAreaView = styled(NSafeAreaView);

export { View, Text, SafeAreaView };
