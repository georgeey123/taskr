import React from "react";
import { Pressable, Text, View } from "../../utils/ReactTailwind";
import { ChevronLeft, MoreVertical, Plus } from "lucide-react-native";
import { useNavigation } from "expo-router";

const Header = () => {
  return (
    <View className="p-4 gap-4">
      <View className="flex-row h-12 items-center justify-between">
        <View className="w-12 h-12 rounded-full bg-slate-500"></View>
        <MoreVertical className="w-6 h-6 text-black" />
      </View>
      <View className="">
        <Text
          style={{ fontFamily: "Nunito_700Bold" }}
          className="font-bold text-4xl tracking-wider"
        >
          Taskr
        </Text>
      </View>
    </View>
  );
};

export const HeaderWithBack = ({ title = "", bigTitle = false }) => {
  const { goBack } = useNavigation();
  return (
    <View className="py-2 px-2 gap-4">
      <View className="flex-row h-12 items-center justify-between">
        <Pressable onPress={() => goBack()} className="rounded-md p-1.5">
          <ChevronLeft size={28} className="text-black" />
        </Pressable>
        {!bigTitle && (
          <Text style={{ fontFamily: "Nunito_700Bold" }} className="text-base">
            {title}
          </Text>
        )}
        <Pressable className="rounded-md p-1.5">
          <Plus size={28} className="text-black" />
        </Pressable>
      </View>
      {bigTitle && (
        <View className="px-2">
          <Text
            style={{ fontFamily: "Nunito_700Bold" }}
            className="font-bold text-2xl tracking-wider"
          >
            {title}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Header;
