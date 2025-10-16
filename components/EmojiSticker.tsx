import { ImageSourcePropType, View } from "react-native";
import { Image } from "expo-image";

type Props = {
  className?: string;
  stickerSource: ImageSourcePropType;
};

export default function EmojiSticker({ className, stickerSource }: Props) {
  return (
    <View className="top-[-350px]">
      <Image source={stickerSource} className={className} />
    </View>
  );
}
