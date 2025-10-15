import { Link, Stack } from 'expo-router';
import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function NotFoundScreen() {
  return (
    <View className="flex-1 items-center justify-center gap-4 bg-black/80">
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />

      <Text className="text-white">This screen doesn't exist.</Text>

      <Link href="/" className="rounded-xl bg-white p-4 text-[20px] font-bold">
        <Text>Go to home screen!</Text>
      </Link>
    </View>
  );
}
