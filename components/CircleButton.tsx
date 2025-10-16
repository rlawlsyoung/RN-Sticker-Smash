import { View, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
  onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
  return (
    <View className="size-[84px] border-4 border-[#ffd33d] rounded-[42px] p-[3px]">
      <Pressable onPress={onPress} className="flex-1 justify-center items-center rounded-[42px] bg-white">
        <MaterialIcons name="add" size={38} color="#25292e" />
      </Pressable>
    </View>
  );
}
