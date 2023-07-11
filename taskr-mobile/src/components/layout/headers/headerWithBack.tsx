import { Text, View } from "@/utils/ReactTailwind";
import { ChevronLeft, Pencil, Trash } from "lucide-react-native";
import { useNavigation, useRouter, useSearchParams } from "expo-router";
import { IList } from "@/types";
import { IconButton } from "@/components/buttons";
import Dropdown from "../dropdown";
import { useMutation } from "@tanstack/react-query";
import useTaskrAPI from "@/services/taskr-api";
import { useAppDispatch } from "@/hooks";
import { action } from "@/redux";

const HeaderWithBack = ({
  List,
  bigTitle = false,
}: {
  List?: IList;
  bigTitle?: boolean;
}) => {
  const { goBack, canGoBack } = useNavigation();
  const router = useRouter();
  const { listId } = useSearchParams();
  const { deleteList } = useTaskrAPI();
  const dispatch = useAppDispatch();

  const { mutate } = useMutation({
    mutationKey: ["delete"],
    mutationFn: () => deleteList(listId as string),

    onSuccess() {
      dispatch(action.lists.deleteList(listId as string));
      router.back();
    },
  });

  return (
    <View className="py-2 px-2 gap-4 z-10">
      <View className="flex-row h-12 items-center justify-between">
        <IconButton
          Icon={ChevronLeft}
          onPress={() => {
            if (canGoBack()) {
              goBack();
            } else {
              router.push("/");
            }
          }}
          size={28}
          iconClassName="text-black"
          className="rounded-md p-1.5"
        />
        {!bigTitle && (
          <Text style={{ fontFamily: "Nunito_700Bold" }} className="text-base">
            {List.title}
          </Text>
        )}
        <Dropdown>
          <Dropdown.Item
            title="Edit"
            onPress={() => {
              router.push(`/add_list?listId=${List._id}`);
            }}
            Icon={Pencil}
          />
          <Dropdown.Item
            title="Delete List"
            Icon={Trash}
            onPress={() => mutate()}
          />
        </Dropdown>
      </View>
      {bigTitle && (
        <View className="px-2">
          <Text
            style={{ fontFamily: "Nunito_700Bold" }}
            className="font-bold text-2xl tracking-wider"
          >
            {List.title}
          </Text>
        </View>
      )}
    </View>
  );
};

export default HeaderWithBack;
