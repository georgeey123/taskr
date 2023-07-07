import React from "react";
import { Text, View } from "@/utils/ReactTailwind";
import { MoreVertical } from "lucide-react-native";
import { IconButton } from "@/components/buttons";
import { Pressable } from "react-native";
import { useAppDispatch } from "@/hooks";
import { action } from "@/redux";

const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <View className="p-4 gap-4">
      <View className="flex-row h-12 items-center justify-between">
        <Pressable
          onPress={() => {
            dispatch(action.auth.Logout());
          }}
        >
          <View className="w-12 h-12 rounded-full bg-slate-500"></View>
        </Pressable>
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
