import { Text, View } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/button";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  return (
    <View className="flex-1 items-center bg-[#25292e] gap-8">
      <View className="mt-7">
        <ImageViewer imgSource={PlaceholderImage} />
      </View>

      <View className="w-full items-center gap-4">
        <Button label="Choose a photo" theme="primary" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}
