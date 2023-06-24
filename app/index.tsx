import { MoreVertical } from "lucide-react-native";
import { SafeAreaView, Text, View } from "../src/utils/tailwind";
import Header from "../src/components/layout/header";
import { FlatList } from "react-native";

export default function Page() {
  return (
    <SafeAreaView className="flex-1">
      <Header />
      <View className="relative flex-1 px-4 pb-4 gap-2">
        <FlatList
          style={{ paddingBottom: 200 }}
          data={[
            { key: "a", title: "💀 My Super List" },
            { key: "b", title: "🙈 Wants & Needs" },
            { key: "as", title: "🚗 Super Cars" },
            // { key: "eb", title: "🙈 Wants & Needs" },
            // { key: "ar", title: "💀 My Super List" },
            // { key: "b5", title: "🙈 Wants & Needs" },
            // { key: "ard", title: "💀 My Super List" },
            // { key: "b5f", title: "🙈 Wants & Needs" },
            // { key: "arg", title: "💀 My Super List" },
            // { key: "b5h", title: "🙈 Wants & Needs" },
            // { key: "ark", title: "💀 My Super List" },
            // { key: "b58", title: "🙈 Wants & Needs" },
          ]}
          renderItem={({ item }) => (
            <View className="flex-row h-16 px-4 mb-2 rounded-lg border border-slate-300 items-center justify-between">
              <Text className="font-semibold text-xl">{item.title}</Text>
              <MoreVertical className="w-6 h-6 text-black" />
            </View>
          )}
          keyExtractor={(item) => item.key}
        ></FlatList>
      </View>
      <View className="absolute bottom-6 right-6 w-[150px] flex-row h-14 bg-slate-600 items-center justify-center rounded-lg">
        <Text
          style={{ fontFamily: "Nunito_500Medium" }}
          className="text-white font-medium text-xl"
        >
          Add List
        </Text>
      </View>
    </SafeAreaView>
  );
}
