import { View, Text, Pressable, Modal } from "react-native";
import { PropsWithChildren } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View className="h-[25%] w-full bg-[#25292e] rounded-t-[18px] absolute bottom-0">
          <View className="h-[16%] bg-[#464C55] rounded-t-[10px] px-5 flex-row items-center justify-between">
            <Text className="text-white text-[16px]">Choose a sticker</Text>
            <Pressable onPress={onClose}>
              <MaterialIcons name="close" color="#fff" size={22} />
            </Pressable>
          </View>
          {children}
        </View>
      </Modal>
    </View>
  );
}
