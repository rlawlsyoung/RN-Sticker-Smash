import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center gap-4 bg-[#25292e]">
      <Text className="text-white">Home Screen</Text>

      <Link href="/about" className="rounded-xl bg-white p-4 text-[20px] font-bold">
        Go to About Screen
      </Link>
    </View>
  );
}
