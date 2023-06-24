import React from "react";
import { Text, View } from "../../utils/tailwind";
import { MoreVertical } from "lucide-react-native";

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

export default Header;
