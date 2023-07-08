import React from "react";
import { Text, View } from "@/utils/ReactTailwind";
import { Pressable } from "react-native";
import { useAppDispatch } from "@/hooks";
import { action } from "@/redux";
import Dropdown from "../dropdown";
import { LogOut, Settings } from "lucide-react-native";

const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <View className="p-4 gap-4 z-10">
      <View className="flex-row h-12 items-center justify-between">
        <View className="w-12 h-12 rounded-full bg-slate-500"></View>
        <Dropdown>
          <Dropdown.Item title="Settings" Icon={Settings} />
          <Dropdown.Item
            title="Logout"
            Icon={LogOut}
            iconColor="#f00"
            onPress={() => dispatch(action.auth.Logout())}
          />
        </Dropdown>
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
