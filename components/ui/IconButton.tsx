import { Pressable, StyleSheet, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
};

export default function IconButton({ icon, label, onPress }: Props) {
  return (
    <Pressable className="justify-center items-center" onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text className="text-white mt-3">{label}</Text>
    </Pressable>
  );
}
