import { Text, View } from "@/utils/ReactTailwind";
import { ChevronLeft, Plus } from "lucide-react-native";
import { useNavigation, useRouter } from "expo-router";
import { IList } from "@/types";
import { IconButton } from "@/components/buttons";

const HeaderWithBack = ({
  List,
  bigTitle = false,
}: {
  List?: IList;
  bigTitle?: boolean;
}) => {
  const { goBack } = useNavigation();
  const router = useRouter();

  return (
    <View className="py-2 px-2 gap-4">
      <View className="flex-row h-12 items-center justify-between">
        <IconButton
          Icon={ChevronLeft}
          onPress={() => goBack()}
          size={28}
          iconClassName="text-black"
          className="rounded-md p-1.5"
        />
        {!bigTitle && (
          <Text style={{ fontFamily: "Nunito_700Bold" }} className="text-base">
            {List.title}
          </Text>
        )}
        <IconButton
          Icon={Plus}
          onPress={() => router.push(`/${List.id}/add_todo`)}
          size={28}
          iconClassName="text-black"
          className="rounded-md p-1.5"
        />
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
