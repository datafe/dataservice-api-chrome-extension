import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';

type ApiInfo = { apiList: ApiData[], commonParameters: ApiParam[] };

const storageKey = 'api-info-storage-key';

type ApiInfoStorage = BaseStorage<ApiInfo> & {
  clear: () => void;
};

const defaultApiList: ApiData[] = [
  {
    apiId: 'en-word-dictionary',
    apiName: 'English Word Dictionary',
    apiMethod: 'GET',
    apiPath: 'https://api.dictionaryapi.dev/api/v2/entries/en/{word}',
    description: 'english word dictionary',
    apiParams: [
      { name: 'word', value: 'hello' },
    ],
    sheetDisplayDataKey: '0.meanings.0.definitions',
  },
  // {
  //   apiId: 'zh-word-dictionary',
  //   apiName: 'Chinese Word Dictionary',
  //   apiMethod: 'GET',
  //   apiPath: 'https://ctext.org/dictionary.pl',
  //   description: 'chinese word dictionary',
  //   apiParams: [
  //     { name: 'if', value: 'en' },
  //     { name: 'char', value: '你' },
  //   ],
  //   requestHeaderContentType: 'application/xml',
  //   sheetDisplayDataKey: '',
  // },
  {
    apiId: 'zh-simple-tradition-transfer',
    apiName: '中文简繁互转',
    apiMethod: 'GET',
    apiPath: 'https://api.vore.top/api/FanTiZi',
    description: '中文简繁互转',
    apiParams: [
      { name: 'text', value: '测试' },
      { name: 'mode', value: 'j2f' },
    ],
    sheetDisplayDataKey: 'data',
  },
  {
    apiId: 'weather-forecast',
    apiName: 'Weather Forecast',
    apiMethod: 'GET',
    apiPath: 'https://goweather.herokuapp.com/weather/{place}',
    description: 'Weather forecast',
    apiParams: [
      { name: 'place', value: 'beijing' }
    ],
    sheetDisplayDataKey: 'forecast',
  },
  {
    apiId: 'usd-currency-exchange',
    apiName: 'USD Currencies',
    apiMethod: 'GET',
    apiPath: 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json',
    description: 'Latest USD currencies',
    apiParams: [],
    sheetDisplayDataKey: 'usd.eur',
  },
  {
    apiId: 'usd-cny-currency-exchange',
    apiName: '美金-人民币最新汇率',
    apiMethod: 'GET',
    apiPath: 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/cny.json',
    description: '美金-人民币最新汇率',
    apiParams: [],
    sheetDisplayDataKey: '',
  },
  // {
  //   apiId: 'hangzhou-current-weather',
  //   apiName: '杭州目前天气',
  //   apiMethod: 'GET',
  //   apiPath: 'https://api.caiyunapp.com/v2/TAkhjf8d1nlSlspN/120.210752,30.246286/realtime.json',
  //   description: '杭州天气信息',
  //   apiParams: [],
  //   sheetDisplayDataKey: 'result.apparent_temperature',
  // },
  // {
  //   apiId: 'hk-weather',
  //   apiName: '香港天气信息',
  //   apiMethod: 'GET',
  //   apiPath: 'https://data.weather.gov.hk/weatherAPI/opendata/weather.php',
  //   description: '香港天气信息',
  //   apiParams: [
  //     { name: 'dataType', value: 'rhrread' },
  //     { name: 'lang', value: 'sc' },
  //   ],
  //   sheetDisplayDataKey: 'temperature.data',
  // },
  // {
  //   apiId: 'order-list-example',
  //   apiName: '电商订单数据范例',
  //   apiMethod: 'GET',
  //   apiPath: 'https://mw-ds-ng-parsed-meta-1254542291.cos.ap-nanjing.myqcloud.com/5ed77b69476565002dc4cb32/1600430189679_1/order2019.xlsx.meta.json',
  //   description: '电商订单数据范例',
  //   apiParams: [],
  //   sheetDisplayDataKey: 'data.0.column_statistics',
  // },
];

const storage = createStorage<ApiInfo>(storageKey, { apiList: [...defaultApiList], commonParameters: [] }, {
  storageType: StorageType.Local,
  liveUpdate: true,
});

const apiInfoStorage: ApiInfoStorage = {
  ...storage,
  // TODO: extends your own methods
  clear: () => {
    storage.set(() => ({ apiList: [], commonParameters: [] }));
  },
};

export default apiInfoStorage;
