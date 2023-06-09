import "server-only";

import { I18n, TranslateOptions } from "i18n-js";
import { Locale, translations } from "./translations";
import { Translation } from "./translations/types";

export const getTranslationDictionary = async (locale: Locale) => {
  return translations[locale];
};

export const getTranslationContent = ({
  key,
  locale,
  options,
}: {
  key: keyof Translation;
  locale: Locale;
  options: TranslateOptions;
}) => {
  const i18n = new I18n(translations);
  i18n.locale = locale;
  i18n.enableFallback = true;

  return i18n.t(key, options ? { ...options } : undefined);
};
