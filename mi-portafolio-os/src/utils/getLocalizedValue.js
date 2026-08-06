export function getLocalizedValue(value, language = "es") {
  if (value == null || Array.isArray(value) || typeof value !== "object") {
    return value;
  }

  const locale = language.split("-")[0];

  if (Object.hasOwn(value, locale)) {
    return value[locale];
  }

  return value.es ?? value.en ?? value;
}

export function asArray(value) {
  if (value == null) return [];
  return Array.isArray(value) ? value : [value];
}
