import {
  Text as NText,
  View as NView,
  Pressable as NPressable,
  TextInput as NTextInput,
} from "react-native";
import { SafeAreaView as NSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";

const View = styled(NView);
const Text = styled(NText);
const SafeAreaView = styled(NSafeAreaView);
const Pressable = styled(NPressable);
const TextInput = styled(NTextInput);

export { View, Text, SafeAreaView, Pressable, TextInput };
