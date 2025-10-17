import { getLocales } from "expo-localization";
import ko from "./locales/ko";
import ja from "./locales/ja";
import en from "./locales/en";
import { Language, TranslationKeys } from "./types";

const translations: Record<Language, TranslationKeys> = {
  ko,
  ja,
  en,
};

export const getDeviceLanguage = (): Language => {
  const deviceLocales = getLocales();
  const deviceLanguage = deviceLocales[0]?.languageCode;

  if (deviceLanguage === "ko" || deviceLanguage === "ja") {
    return deviceLanguage;
  }

  return "en";
};

export const getTranslation = (language: Language): TranslationKeys => {
  return translations[language] || translations.en;
};

export const getNestedTranslation = (obj: any, path: string): string => {
  const keys = path.split(".");
  let result = obj;

  for (const key of keys) {
    if (result && typeof result === "object" && key in result) {
      result = result[key];
    } else {
      return path; // fallback to key if not found
    }
  }

  return typeof result === "string" ? result : path;
};
