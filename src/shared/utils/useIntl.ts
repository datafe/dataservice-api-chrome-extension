import intl from 'react-intl-universal';
import zhCN from '@src/locales/zh-CN.json';
import enUS from '@src/locales/en-US.json';
import { useState, useEffect } from 'react';

const LOCALE_DATA = {
  "en-US": enUS,
  "zh-CN": zhCN,
};

const LOCALES_LIST = [
  {
    label: "English",
    value: "en-US",
  },
  {
    label: "简体中文",
    value: "zh-CN",
  },
];

const useIntl = () => {

  const [initDone, setInitDone] = useState(false);

  useEffect(() => {
    try {
      initializeIntl();
    } catch (e) { }
  }, []);

  const initializeIntl = () => {

    // 1. Get the currentLocale from url, cookie, or browser setting
    let currentLocale = intl.determineLocale({
      urlLocaleKey: 'lang', // Example: https://fe-tool.com/react-intl-universal?lang=en-US
      cookieLocaleKey: 'lang', // Example: "lang=en-US" in cookie
    });
    // let currentLocale = 'zh-CN';
    // let currentLocale = 'en-US';

    // 2. Fallback to "en-US" if the currentLocale isn't supported in LOCALES_LIST
    if (!LOCALES_LIST.some(item => item.value === currentLocale)) {
      currentLocale = "zh-CN";
    }

    // 3. Set currentLocale and load locale data 
    setCurrentLocale(currentLocale);

    // 4. After loading locale data, start to render
    setInitDone(true);
  }

  const setCurrentLocale = (currentLocale: string) => {
    try {
      intl.init({
        // debug: true,
        currentLocale,
        locales: LOCALE_DATA,
        warningHandler: () => { },
      });
    } catch (e) { }
  };

  return { initDone };

};

export default useIntl;
