import React, { useState } from "react";
import { Pressable, Text, View } from "@/utils/ReactTailwind";
import { Link } from "expo-router";
import classNames from "classnames";
import { IList } from "@/types";

const ListItem = ({ list }: { list: IList }) => {
  const [isPressing, setIsPressing] = useState(false);
  return (
    <>
      <View
        className={classNames(
          "flex-row h-16 mb-2 rounded-lg border border-slate-300 items-center justify-between z-0",
          isPressing ? "border-slate-600 bg-zinc-100" : "border-slate-300"
        )}
      >
        <Link href={`/${list._id}`} asChild>
          <Pressable
            onPressIn={() => setIsPressing(true)}
            onPressOut={() => setIsPressing(false)}
            className={classNames("flex-1 flex-row items-center px-4 h-full")}
          >
            <Text className="font-semibold text-xl">{list.title}</Text>
          </Pressable>
        </Link>
      </View>
    </>
  );
};

export default ListItem;
