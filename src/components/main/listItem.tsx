import React, { useState } from "react";
import { MoreVertical } from "lucide-react-native";
import { Text, View } from "../../utils/ReactTailwind";
import { Pressable } from "react-native";
import { Link } from "expo-router";
import classNames from "classnames";
import { IList } from "../../types";

const ListItem = ({ list }: { list: IList }) => {
  const [isPressing, setIsPressing] = useState(false);
  return (
    <Link href={`/${list.id}`} asChild>
      <Pressable
        onPressIn={() => setIsPressing(true)}
        onPressOut={() => setIsPressing(false)}
      >
        <View
          className={classNames(
            "flex-row h-16 px-4 mb-2 rounded-lg border border-slate-300 items-center justify-between",
            isPressing ? "border-slate-600 bg-zinc-100" : "border-slate-300"
          )}
        >
          <Text className="font-semibold text-xl">{list.title}</Text>
          <MoreVertical className="w-6 h-6 text-black" />
        </View>
      </Pressable>
    </Link>
  );
};

export default ListItem;
