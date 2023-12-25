import { c as createStorage, S as StorageType } from "./base.js";
const storageKey = "api-info-storage-key";
const defaultApiList = [
  {
    apiId: "zh-simple-tradition-transfer",
    apiName: "中文简繁互转",
    apiMethod: "GET",
    apiPath: "https://api.vore.top/api/FanTiZi",
    description: "中文简繁互转",
    apiParams: [
      { name: "text", value: "测试" },
      { name: "mode", value: "j2f" }
    ],
    sheetDisplayDataKey: "data"
  },
  {
    apiId: "usd-cny-currency-exchange",
    apiName: "美金-人民币最新汇率",
    apiMethod: "GET",
    apiPath: "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/cny.json",
    description: "美金-人民币最新汇率",
    apiParams: [],
    sheetDisplayDataKey: ""
  },
  {
    apiId: "hangzhou-current-weather",
    apiName: "杭州目前天气",
    apiMethod: "GET",
    apiPath: "https://api.caiyunapp.com/v2/TAkhjf8d1nlSlspN/120.210752,30.246286/realtime.json",
    description: "杭州天气信息",
    apiParams: [],
    sheetDisplayDataKey: "result.apparent_temperature"
  },
  {
    apiId: "hangzhou-weather-forecast",
    apiName: "杭州天气预测",
    apiMethod: "GET",
    apiPath: "https://goweather.herokuapp.com/weather/hangzhou",
    description: "杭州天气信息",
    apiParams: [],
    sheetDisplayDataKey: "forecast"
  }
  // {
  //   apiId: 'usd-currency-exchange',
  //   apiName: '美金对各货币最新汇率',
  //   apiMethod: 'GET',
  //   apiPath: 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json',
  //   description: '美金对各货币最新汇率',
  //   apiParams: [],
  //   sheetDisplayDataKey: '',
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
const storage = createStorage(storageKey, { apiList: [...defaultApiList], commonParameters: [] }, {
  storageType: StorageType.Local,
  liveUpdate: true
});
const apiInfoStorage = {
  ...storage,
  // TODO: extends your own methods
  clear: () => {
    storage.set(() => ({ apiList: [], commonParameters: [] }));
  }
};
const PRODUCT_NAME = "数据服务API";
const events = {
  PASSING_SELECTION: "passing_selected_text"
};
const defaultResultTableDataKey = void 0;
export {
  PRODUCT_NAME as P,
  apiInfoStorage as a,
  defaultResultTableDataKey as d,
  events as e
};
