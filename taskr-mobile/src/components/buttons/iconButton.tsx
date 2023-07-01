import { Pressable } from "@/utils/ReactTailwind";
import { LucideIcon, LucideProps } from "lucide-react-native";
import React from "react";

type IconButtonProps = {
  Icon: LucideIcon;
  iconClassName: LucideProps["className"];
  size?: number;
} & React.ComponentProps<typeof Pressable>;
const IconButton = ({
  Icon,
  size = 24,
  iconClassName,
  ...props
}: IconButtonProps) => {
  return (
    <Pressable {...props}>
      <Icon className={iconClassName} size={size} />
    </Pressable>
  );
};

export default IconButton;
