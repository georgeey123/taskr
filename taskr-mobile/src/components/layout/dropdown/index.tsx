import { Pressable, Text, View } from "@/utils/ReactTailwind";
import { LucideIcon, MoreVertical } from "lucide-react-native";
import { IconButton } from "@/components/buttons";
import { ComponentProps, createContext, useContext, useState } from "react";
import { useClickOutside } from "react-native-click-outside";

const Dropdown = ({ children }: { children: React.ReactNode }) => {
  return (
    <DropdownProvider>
      <View className="relative">
        <DropdownCard>{children}</DropdownCard>
      </View>
    </DropdownProvider>
  );
};

const DropdownCard = ({ children }: { children: React.ReactNode }) => {
  const { setIsOpen, isOpen } = useDropdownProvider();
  const ref = useClickOutside<typeof View>(() => setIsOpen(false));
  return (
    <>
      <IconButton
        onPress={() => setIsOpen(!isOpen)}
        Icon={MoreVertical}
        iconClassName="text-black"
      />
      {isOpen && (
        <>
          <View
            ref={ref}
            className="absolute top-8 right-0 w-48 p-1 bg-white border border-slate-200 rounded-lg z-10"
          >
            {children}
          </View>
          <View className="absolute -top-6 -right-4 w-screen h-screen z-0"></View>
        </>
      )}
    </>
  );
};

const DropdownItem = ({
  title = "",
  Icon,
  iconColor = "black",
  ...props
}: {
  title: string;
  Icon?: LucideIcon;
  iconColor?: string;
} & ComponentProps<typeof Pressable>) => {
  const { setIsOpen } = useDropdownProvider();
  return (
    <Pressable
      {...props}
      onPress={(e) => {
        props.onPress && props.onPress(e);
        setIsOpen(false);
      }}
      className="w-full h-12 rounded-md border border-slate-100 active:bg-slate-100 flex-row items-center justify-between px-4"
    >
      <Text className="text-lg text-slate-800">{title}</Text>
      {Icon && <Icon size={20} color={iconColor} />}
    </Pressable>
  );
};

Dropdown.Item = DropdownItem;

const DropdownContext = createContext({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => {},
});

const DropdownProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DropdownContext.Provider>
  );
};

const useDropdownProvider = () => useContext(DropdownContext);

export default Dropdown;
