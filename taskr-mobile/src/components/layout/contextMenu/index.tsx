import { Pressable, Text, View } from "@/utils/ReactTailwind";
import { LucideIcon, MoreVertical } from "lucide-react-native";
import { IconButton } from "@/components/buttons";
import { ComponentProps, createContext, useContext, useState } from "react";

const ContextMenuContext = createContext({
  onClose: () => {},
});

type ContextMenuProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const ContextMenu = ({ onClose, children }: ContextMenuProps) => {
  return (
    <ContextMenuContext.Provider value={{ onClose }}>
      <View className="absolute top-16 right-0 w-48 p-1 bg-white border border-slate-200 rounded-lg z-50">
        {children}
      </View>
    </ContextMenuContext.Provider>
  );
};

const useContextMenuProvider = () => useContext(ContextMenuContext);

const ContextMenuItem = ({
  title = "",
  Icon,
  iconColor = "black",
  ...props
}: {
  title: string;
  Icon?: LucideIcon;
  iconColor?: string;
} & ComponentProps<typeof Pressable>) => {
  const { onClose } = useContextMenuProvider();
  return (
    <Pressable
      {...props}
      onPress={(e) => {
        props.onPress && props.onPress(e);
        onClose();
      }}
      className="w-full h-12 rounded-md border border-slate-100 flex-row items-center justify-between px-4"
    >
      <Text className="text-lg text-slate-800">{title}</Text>
      {Icon && <Icon size={20} color={iconColor} />}
    </Pressable>
  );
};

ContextMenu.Item = ContextMenuItem;

export default ContextMenu;
