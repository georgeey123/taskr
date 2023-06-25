import { Text, View } from "@/utils/ReactTailwind";
import Header from "@/components/layout/header";
import { FlatList, Pressable } from "react-native";
import ListItem from "@/components/main/listItem";
import { useRouter } from "expo-router";
import { useAppSelector } from "@/hooks";

export default function Page() {
  const router = useRouter();
  const { Lists } = useAppSelector((state) => state.lists);
  return (
    <View className="flex-1">
      <Header />
      <View className="relative flex-1 px-4 pb-4 gap-2">
        <FlatList
          style={{ paddingBottom: 200 }}
          data={Lists}
          renderItem={({ item }) => <ListItem list={item} />}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>
      <Pressable onPress={() => router.push("add_list")}>
        <View className="absolute bottom-6 right-6 w-[150px] flex-row h-14 bg-slate-600 items-center justify-center rounded-lg">
          <Text
            style={{ fontFamily: "Nunito_500Medium" }}
            className="text-white font-medium text-xl"
          >
            Add List
          </Text>
        </View>
      </Pressable>
    </View>
    // </SafeAreaView>
  );
}
