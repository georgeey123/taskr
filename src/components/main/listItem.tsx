import React, { useState } from "react";
import { MoreVertical } from "lucide-react-native";
import { Pressable, Text, View } from "@/utils/ReactTailwind";
import { Link, useRouter } from "expo-router";
import classNames from "classnames";
import { IList } from "@/types";
import { IconButton } from "../buttons";

const ListItem = ({ list }: { list: IList }) => {
  const [isPressing, setIsPressing] = useState(false);
  const router = useRouter();
  return (
    <View
      className={classNames(
        "flex-row h-16 mb-2 rounded-lg border border-slate-300 items-center justify-between",
        isPressing ? "border-slate-600 bg-zinc-100" : "border-slate-300"
      )}
    >
      <Link href={`/${list.id}`} asChild>
        <Pressable
          onPressIn={() => setIsPressing(true)}
          onPressOut={() => setIsPressing(false)}
          className={classNames("flex-1 flex-row items-center px-4 h-full")}
        >
          <Text className="font-semibold text-xl">{list.title}</Text>
        </Pressable>
      </Link>
      <IconButton
        Icon={MoreVertical}
        onPress={() => router.push(`/_sitemap`)}
        className="p-2 h-full items-center justify-center"
        iconClassName="text-black"
      />
    </View>
  );
};

export default ListItem;
