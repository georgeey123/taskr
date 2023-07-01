import React from "react";
import { Text, View } from "@/utils/ReactTailwind";
import { MoreVertical } from "lucide-react-native";
import { IconButton } from "@/components/buttons";

const Header = () => {
  return (
    <View className="p-4 gap-4">
      <View className="flex-row h-12 items-center justify-between">
        <View className="w-12 h-12 rounded-full bg-slate-500"></View>
        <IconButton Icon={MoreVertical} iconClassName="text-black" />
      </View>
      <View>
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
