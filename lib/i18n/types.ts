export type Language = "ko" | "ja" | "en";

export interface TranslationKeys {
  common: {
    save: string;
    reset: string;
    cancel: string;
    confirm: string;
  };
  home: {
    choosePhoto: string;
    useThisPhoto: string;
    addSticker: string;
    noImageSelected: string;
    savedSuccess: string;
    selectEmoji: string;
  };
  about: {
    title: string;
    description: string;
    goBack: string;
  };
  tabs: {
    home: string;
    about: string;
  };
}
