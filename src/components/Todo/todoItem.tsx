import React, { useState } from "react";
import { Pressable, Text, View } from "../../utils/ReactTailwind";
import classNames from "classnames";

const TodoItem = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <View className="flex-row p-3 mb-2 rounded-xl items-center bg-white border border-slate-200">
      <Pressable
        onPress={() => setIsSelected(!isSelected)}
        className={classNames(
          "w-6 h-6 mr-3 rounded-md",
          isSelected ? "bg-blue-600" : "bg-white border border-slate-200"
        )}
      />
      <Text style={{ fontFamily: "Nunito_500Medium" }} className="text-base">
        Hello there
      </Text>
    </View>
  );
};

export default TodoItem;
