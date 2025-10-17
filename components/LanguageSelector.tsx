import { View, Text, Pressable } from "react-native";
import { useTranslation, Language } from "@/lib/i18n";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "en", label: "English", flag: "🇺🇸" },
];

export default function LanguageSelector() {
  const { language, setLanguage } = useTranslation();

  return (
    <View className="flex-row gap-3 mt-6">
      {languages.map((lang) => (
        <Pressable
          key={lang.code}
          onPress={() => setLanguage(lang.code)}
          className={`px-4 py-3 rounded-xl flex-row items-center gap-2 ${
            language === lang.code ? "bg-[#ffd33d]" : "bg-[#464C55]"
          }`}
        >
          <Text className="text-2xl">{lang.flag}</Text>
          <Text className={`font-semibold ${language === lang.code ? "text-black" : "text-white"}`}>
            {lang.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}
