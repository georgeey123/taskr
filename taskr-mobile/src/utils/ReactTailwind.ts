import {
  Text as NText,
  View as NView,
  Pressable as NPressable,
  TextInput as NTextInput,
  Modal as NModal,
} from "react-native";
import { SafeAreaView as NSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";

const View = styled(NView);
const Text = styled(NText);
const SafeAreaView = styled(NSafeAreaView);
const Pressable = styled(NPressable);
const TextInput = styled(NTextInput);
const Modal = styled(NModal);

export { View, Text, SafeAreaView, Pressable, TextInput, Modal };
