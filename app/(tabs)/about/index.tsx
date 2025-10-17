import { Link } from "expo-router";
import { Text, View } from "react-native";
import { useTranslation } from "@/lib/i18n";
import LanguageSelector from "@/components/LanguageSelector";

export default function AboutScreen() {
  const { t } = useTranslation();

  return (
    <View className="flex-1 items-center justify-center gap-4 bg-[#25292e] p-6">
      <Text className="text-white text-3xl font-bold mb-4">{t("about.title")}</Text>

      <Text className="text-white text-center text-lg mb-4 px-4">{t("about.description")}</Text>

      <LanguageSelector />

      <Link href="/" className="rounded-xl bg-white p-4 text-[20px] font-bold mt-8">
        {t("about.goBack")}
      </Link>
    </View>
  );
}
