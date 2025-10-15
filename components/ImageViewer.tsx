import { ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { cssInterop } from "nativewind";

cssInterop(Image, { className: "style" });

type Props = {
  imgSource: ImageSourcePropType;
};

export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} className="w-[320px] h-[440px] rounded-[18px]" />;
}
