import { View } from "@/utils/ReactTailwind";
import { ActivityIndicator, FlatList } from "react-native";
import ListItem from "@/components/main/listItem";
import { useRouter } from "expo-router";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Plus } from "lucide-react-native";
import { Header } from "@/components/layout/headers";
import { IconButton } from "@/components/buttons";
import { useQuery } from "@tanstack/react-query";
import useTaskrAPI from "@/services/taskr-api";
import { action } from "@/redux";
import { RefreshControl } from "react-native-gesture-handler";

export default function Page() {
  const router = useRouter();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const { Lists } = useAppSelector((state) => state.lists);
  const dispatch = useAppDispatch();
  const { getLists } = useTaskrAPI();

  const { isLoading, isSuccess, refetch } = useQuery({
    enabled: isAuthenticated,
    queryKey: ["lists"],
    queryFn: getLists,
    onSuccess: (data) => {
      dispatch(action.lists.setLists(data.data));
    },
  });

  return (
    <View className="flex-1">
      <Header />
      <View className="relative flex-1 px-4 pb-4 gap-2 z-0">
        {isLoading && (
          <View className="flex-1 items-center justify-center">
            <ActivityIndicator size="large" color="#000" />
          </View>
        )}
        {isSuccess && (
          <FlatList
            style={{ paddingBottom: 200 }}
            refreshControl={
              <RefreshControl
                refreshing={isLoading}
                onRefresh={() => refetch()}
              />
            }
            data={Lists}
            renderItem={({ item }) => <ListItem list={item} />}
            keyExtractor={(item) => item._id}
          ></FlatList>
        )}
      </View>
      <IconButton
        Icon={Plus}
        size={32}
        iconClassName="text-white"
        className="absolute bottom-6 right-6 w-16 h-16 bg-sky-500 items-center justify-center rounded-full"
        onPress={() => {
          router.push("/add_list?listId=");
        }}
      />
    </View>
  );
}
