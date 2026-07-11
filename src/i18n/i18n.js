import React from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import ko from './ko.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ko: { translation: ko },
  },
  lng: 'ko',
  fallbackLng: 'ko',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

// \n을 <br>로 렌더링하는 헬퍼
export function tLines(str) {
  const parts = str.split('\n');
  return parts.map((line, i) =>
    i < parts.length - 1 ? [line, React.createElement('br', { key: i })] : line
  ).flat();
}
