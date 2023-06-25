import { View } from "@/utils/ReactTailwind";
import { FlatList } from "react-native";
import ListItem from "@/components/main/listItem";
import { useRouter } from "expo-router";
import { useAppSelector } from "@/hooks";
import { Plus } from "lucide-react-native";
import { Header } from "@/components/layout/headers";
import { IconButton } from "@/components/buttons";

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
      <IconButton
        Icon={Plus}
        size={32}
        iconClassName="text-white"
        className="absolute bottom-6 right-6 w-16 h-16 bg-slate-600 items-center justify-center rounded-full"
        onPress={() => router.push("add_list")}
      />
    </View>
    // </SafeAreaView>
  );
}
