import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
import 'webextension-polyfill';

reloadOnUpdate('pages/background');

const selfExtensionId = chrome?.runtime?.id;

// 不要显示 url
const doNotShowUrlList = [chrome.i18n.getMessage('mds')];

// 不要加上 <match> <url> <dim>
const doNotDecorateDescriptionList = [];

const bizLinks = [
  // global site
  {
    keywords: [chrome.i18n.getMessage('console'), 'console'],
    display: chrome.i18n.getMessage('global'),
    urlMap: {
      [chrome.i18n.getMessage('console')]: 'https://dataworks.console.aliyun.com',
      [chrome.i18n.getMessage('hologresConsole')]: 'https://hologram.console.aliyun.com',
      [chrome.i18n.getMessage('mcConsole')]: 'https://maxcompute.console.aliyun.com',
      [chrome.i18n.getMessage('paiConsole')]: 'https://pai.console.aliyun.com',
      [chrome.i18n.getMessage('emrConsole')]: 'https://emr-next.console.aliyun.com',
      [chrome.i18n.getMessage('flinkConsole')]: 'https://flink.console.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('dataset'), 'datasets'],
    display: chrome.i18n.getMessage('datasetLink'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorks')]: 'https://dataworks.console.aliyun.com/publicDatasets',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('openAPI'), 'open', 'api'],
    display: chrome.i18n.getMessage('openApiLink'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorks')]: 'https://next.api.aliyun.com/api/dataworks-public',
    },
  },
  // region site
  {
    keywords: [chrome.i18n.getMessage('inner'), 'inner', '弹内'],
    display: chrome.i18n.getMessage('inner'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorksSetting')]: 'https://setting.dw.alibaba-inc.com',
      [chrome.i18n.getMessage('newDataStudio')]: 'https://bff.dw.alibaba-inc.com/ide',
      [chrome.i18n.getMessage('dataStudio')]: 'https://datastudio.dw.alibaba-inc.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc.dw.alibaba-inc.com',
      [chrome.i18n.getMessage('dataService')]: 'https://dataservice.dw.alibaba-inc.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://sqlx.alibaba-inc.com',
      [chrome.i18n.getMessage('dgc')]: 'https://dgc.dw.alibaba-inc.com',
      [chrome.i18n.getMessage('dqc')]: 'https://dqc.dw.alibaba-inc.com',
      [chrome.i18n.getMessage('di')]: 'https://di.dw.alibaba-inc.com',
      [chrome.i18n.getMessage('holoweb')]: 'https://holoweb.dw.alibaba-inc.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('shanghai'), 'shanghai', 'shang', '上海'],
    display: chrome.i18n.getMessage('shanghai'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorksSetting')]: 'https://setting-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://dgc-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://dqc-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('holoweb')]: 'https://holoweb-cn-shanghai.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('hangzhou'), 'hangzhou', 'hang', '杭州'],
    display: chrome.i18n.getMessage('hangzhou'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorksSetting')]: 'https://setting-cn-hangzhou.data.aliyun.com',
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-hangzhou.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-hangzhou.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-hangzhou.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-hangzhou.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://dgc-cn-hangzhou.data.aliyun.com',
      [chrome.i18n.getMessage('dqc')]: 'https://dqc-cn-hangzhou.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-cn-hangzhou.data.aliyun.com',
      [chrome.i18n.getMessage('holoweb')]: 'https://holoweb-cn-hangzhou.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('shenzhen'), 'shenzhen', 'shen', '深圳'],
    display: chrome.i18n.getMessage('shenzhen'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorksSetting')]: 'https://setting-cn-shenzhen.data.aliyun.com',
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-shenzhen.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-shenzhen.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-shenzhen.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-shenzhen.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://dgc-cn-shenzhen.data.aliyun.com',
      [chrome.i18n.getMessage('dqc')]: 'https://dqc-cn-shenzhen.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-cn-shenzhen.data.aliyun.com',
      [chrome.i18n.getMessage('holoweb')]: 'https://holoweb-cn-shenzhen.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('beijing'), 'beijing', 'bei', '北京'],
    display: chrome.i18n.getMessage('beijing'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorksSetting')]: 'https://setting-cn-beijing.data.aliyun.com',
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-beijing.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-beijing.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-beijing.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-beijing.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://dgc-cn-beijing.data.aliyun.com',
      [chrome.i18n.getMessage('dqc')]: 'https://dqc-cn-beijing.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-cn-beijing.data.aliyun.com',
      [chrome.i18n.getMessage('holoweb')]: 'https://holoweb-cn-beijing.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('chengdu'), 'chengdu', 'cheng', '成都'],
    display: chrome.i18n.getMessage('chengdu'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorksSetting')]: 'https://setting-cn-chengdu.data.aliyun.com',
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-chengdu.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-chengdu.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-chengdu.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-chengdu.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://dgc-cn-chengdu.data.aliyun.com',
      [chrome.i18n.getMessage('dqc')]: 'https://dqc-cn-chengdu.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-cn-chengdu.data.aliyun.com',
      [chrome.i18n.getMessage('holoweb')]: 'https://holoweb-cn-chengdu.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('zhangjiakou'), 'zhangjiakou', 'zhang', '张家口'],
    display: chrome.i18n.getMessage('zhangjiakou'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorksSetting')]: 'https://setting-cn-zhangjiakou.data.aliyun.com',
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-zhangjiakou.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-zhangjiakou.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-zhangjiakou.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-zhangjiakou.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://dgc-cn-zhangjiakou.data.aliyun.com',
      [chrome.i18n.getMessage('dqc')]: 'https://dqc-cn-zhangjiakou.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-cn-zhangjiakou.data.aliyun.com',
      [chrome.i18n.getMessage('holoweb')]: 'https://holoweb-cn-zhangjiakou.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('wulanchabu'), 'wulanchabu', 'wulan', '乌兰察布'],
    display: chrome.i18n.getMessage('wulanchabu'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorksSetting')]: 'https://setting-cn-wulanchabu.data.aliyun.com',
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-wulanchabu.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-wulanchabu.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-wulanchabu.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-cn-wulanchabu.data.aliyun.com',
      [chrome.i18n.getMessage('dqc')]: 'https://dqc-cn-wulanchabu.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('hongkong'), 'hongkong', 'hong', 'hk', '香港'],
    display: chrome.i18n.getMessage('hongkong'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorksSetting')]: 'https://setting-cn-hongkong.data.aliyun.com',
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-hongkong.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-hongkong.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-hongkong.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-hongkong.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://dgc-cn-hongkong.data.aliyun.com',
      [chrome.i18n.getMessage('dqc')]: 'https://dqc-cn-hongkong.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-cn-hongkong.data.aliyun.com',
      [chrome.i18n.getMessage('holoweb')]: 'https://holoweb-cn-hongkong.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('singapore'), 'singapore', 'sin', 'sg', 'ap-southeast-1', 'ap', 'southeast', 'south', 'east', '新加坡'],
    display: chrome.i18n.getMessage('singapore'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorksSetting')]: 'https://setting-ap-southeast-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-ap-southeast-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-ap-southeast-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-ap-southeast-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-ap-southeast-1.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://dgc-ap-southeast-1.data.aliyun.com',
      [chrome.i18n.getMessage('dqc')]: 'https://dqc-ap-southeast-1.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-ap-southeast-1.data.aliyun.com',
      [chrome.i18n.getMessage('holoweb')]: 'https://holoweb-ap-southeast-1.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('sydney'), 'sydney', 'syn', 'ap-southeast-2', 'ap', 'southeast', 'south', 'east', '悉尼'],
    display: chrome.i18n.getMessage('sydney'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorksSetting')]: 'https://setting-ap-southeast-2.data.aliyun.com',
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-ap-southeast-2.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-ap-southeast-2.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-ap-southeast-2.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-ap-southeast-2.data.aliyun.com',
      [chrome.i18n.getMessage('dqc')]: 'https://dqc-ap-southeast-2.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-ap-southeast-2.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('kualaLumpur'), 'kualaLumpur', 'kuala', 'ap-southeast-3', 'ap', 'southeast', 'south', 'east', '吉隆坡'],
    display: chrome.i18n.getMessage('kualaLumpur'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorksSetting')]: 'https://setting-ap-southeast-3.data.aliyun.com',
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-ap-southeast-3.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-ap-southeast-3.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-ap-southeast-3.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-ap-southeast-3.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-ap-southeast-3.data.aliyun.com',
      [chrome.i18n.getMessage('dqc')]: 'https://dqc-ap-southeast-3.data.aliyun.com',
      [chrome.i18n.getMessage('holoweb')]: 'https://holoweb-ap-southeast-3.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('jakarta'), 'jakarta', 'ap-southeast-5', 'ap', 'southeast', 'south', 'east', '雅加达'],
    display: chrome.i18n.getMessage('jakarta'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorksSetting')]: 'https://setting-ap-southeast-5.data.aliyun.com',
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-ap-southeast-5.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-ap-southeast-5.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-ap-southeast-5.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-ap-southeast-5.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://dgc-ap-southeast-5.data.aliyun.com',
      [chrome.i18n.getMessage('dqc')]: 'https://dqc-ap-southeast-5.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-ap-southeast-5.data.aliyun.com',
      [chrome.i18n.getMessage('holoweb')]: 'https://holoweb-ap-southeast-5.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('mumbai'), 'mumbai', 'ap-south-1', 'ap', 'south', 'east', '孟买'],
    display: chrome.i18n.getMessage('jakarta'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorksSetting')]: 'https://setting-ap-south-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-ap-south-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-ap-south-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-ap-south-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-ap-south-1.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-ap-south-1.data.aliyun.com',
      [chrome.i18n.getMessage('dqc')]: 'https://dqc-ap-south-1.data.aliyun.com',
      [chrome.i18n.getMessage('holoweb')]: 'https://holoweb-ap-south-1.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('dubai'), 'dubai', 'me', 'east', '迪拜'],
    display: chrome.i18n.getMessage('dubai'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorksSetting')]: 'https://setting-me-east-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-me-east-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-me-east-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-me-east-1.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-me-east-1.data.aliyun.com',
      [chrome.i18n.getMessage('dqc')]: 'https://dqc-me-east-1.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('tokyo'), 'tokyo', 'ap-northeast-1', 'ap', 'northeast', 'north', 'east', 'japan', '东京'],
    display: chrome.i18n.getMessage('tokyo'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorksSetting')]: 'https://setting-ap-northeast-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-ap-northeast-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-ap-northeast-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-ap-northeast-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-ap-northeast-1.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-ap-northeast-1.data.aliyun.com',
      [chrome.i18n.getMessage('dqc')]: 'https://dqc-ap-northeast-1.data.aliyun.com',
      [chrome.i18n.getMessage('holoweb')]: 'https://holoweb-ap-northeast-1.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('siliconValley'), 'silicon', 'us-west-1', 'us', 'west', '美西', '硅谷'],
    display: chrome.i18n.getMessage('siliconValley'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorksSetting')]: 'https://setting-us-west-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-us-west-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-us-west-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-us-west-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-us-west-1.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://dgc-us-west-1.data.aliyun.com',
      [chrome.i18n.getMessage('dqc')]: 'https://dqc-us-west-1.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-us-west-1.data.aliyun.com',
      [chrome.i18n.getMessage('holoweb')]: 'https://holoweb-us-west-1.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('virginia'), 'virginia', 'us-east-1', 'us', 'east', '美东', '弗吉尼亚'],
    display: chrome.i18n.getMessage('virginia'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorksSetting')]: 'https://setting-us-east-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-us-east-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-us-east-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-us-east-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-us-east-1.data.aliyun.com',
      [chrome.i18n.getMessage('dqc')]: 'https://dqc-us-east-1.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-us-east-1.data.aliyun.com',
      [chrome.i18n.getMessage('holoweb')]: 'https://holoweb-us-east-1.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('frankfurt'), 'frankfurt', 'eu-central-1', 'eu', 'central', 'germany', '德国', '法兰克福'],
    display: chrome.i18n.getMessage('frankfurt'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorksSetting')]: 'https://setting-eu-central-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-eu-central-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-eu-central-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-eu-central-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-eu-central-1.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://dgc-eu-central-1.data.aliyun.com',
      [chrome.i18n.getMessage('dqc')]: 'https://dqc-eu-central-1.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-eu-central-1.data.aliyun.com',
      [chrome.i18n.getMessage('holoweb')]: 'https://holoweb-eu-central-1.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('london'), 'london', 'eu-west-1', 'eu', 'west', 'england', '英国', '伦敦'],
    display: chrome.i18n.getMessage('london'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorksSetting')]: 'https://setting-eu-west-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-eu-west-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-eu-west-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-eu-west-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-eu-west-1.data.aliyun.com',
      [chrome.i18n.getMessage('dqc')]: 'https://dqc-eu-west-1.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-eu-west-1.data.aliyun.com',
      [chrome.i18n.getMessage('holoweb')]: 'https://holoweb-eu-west-1.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('shanghaiFinance'), 'shanghaifinance', 'shanghaifin', 'cn-shanghai-finance-1', 'finance', 'shanghai', '上海金融云', '上海金'],
    display: chrome.i18n.getMessage('shanghaiFinance'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorksSetting')]: 'https://setting-cn-shanghai-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-shanghai-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-shanghai-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-shanghai-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-shanghai-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://dgc-cn-shanghai-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('dqc')]: 'https://dqc-cn-shanghai-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-cn-shanghai-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('holoweb')]: 'https://holoweb-cn-shanghai-finance-1.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('shenzhenFinance'), 'shenzhenfinance', 'shenzhenfin', 'cn-shenzhen-finance-1', 'finance', 'shenzhen', '深圳金融云', '深圳金'],
    display: chrome.i18n.getMessage('shenzhenFinance'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorksSetting')]: 'https://setting-cn-shenzhen-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-shenzhen-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-shenzhen-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-shenzhen-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-shenzhen-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('dqc')]: 'https://dqc-cn-shenzhen-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-cn-shenzhen-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('holoweb')]: 'https://holoweb-cn-shenzhen-finance-1.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('beijingFinance'), 'beijingfinance', 'beijingfin', 'cn-beijing-finance-1', 'finance', 'beijing', '北京金融云', '北京金'],
    display: chrome.i18n.getMessage('beijingFinance'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorksSetting')]: 'https://setting-cn-beijing-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-beijing-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-beijing-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-beijing-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('dqc')]: 'https://dqc-cn-cn-beijing-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-cn-beijing-finance-1.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('beijingGov'), 'beijinggov', '北京政务云', '北京政', 'gov', 'beijing', 'cn-north-2-gov-1'],
    display: chrome.i18n.getMessage('beijingGov'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorksSetting')]: 'https://setting-cn-north-2-gov-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-north-2-gov-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-north-2-gov-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-north-2-gov-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-north-2-gov-1.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://dgc-cn-north-2-gov-1.data.aliyun.com',
      [chrome.i18n.getMessage('dqc')]: 'https://dqc-cn-north-2-gov-1.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-cn-north-2-gov-1.data.aliyun.com',
      [chrome.i18n.getMessage('holoweb')]: 'https://holoweb-cn-north-2-gov-1.data.aliyun.com',
    },
  },
];

const devBizLinks = [
  {
    keywords: [chrome.i18n.getMessage('consolePre'), 'console', 'pre', '预发'],
    display: chrome.i18n.getMessage('consolePre'),
    urlMap: {
      [chrome.i18n.getMessage('console')]: 'https://pre-dataworks.console.aliyun.com',
      [chrome.i18n.getMessage('hologresConsole')]: 'https://pre-hologram.console.aliyun.com',
      [chrome.i18n.getMessage('mcConsole')]: 'https://pre-maxcompute.console.aliyun.com',
      [chrome.i18n.getMessage('paiConsole')]: 'https://pre-pai.console.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('innerPre'), 'inner', 'pre', '弹内', '预发'],
    display: chrome.i18n.getMessage('innerPre'),
    urlMap: {
      [chrome.i18n.getMessage('newDataStudio')]: 'https://pre-bff.dw.alibaba-inc.com/ide',
      [chrome.i18n.getMessage('dataStudio')]: 'https://pre-datastudio.dw.alibaba-inc.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://pre-dmc.dw.alibaba-inc.com',
      [chrome.i18n.getMessage('dataService')]: 'https://pre-dataservice.dw.alibaba-inc.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://pre-sqlx.alibaba-inc.com',
      [chrome.i18n.getMessage('dgc')]: 'https://pre-dgc.alibaba-inc.com',
      [chrome.i18n.getMessage('dqc')]: 'https://pre-dqc.alibaba-inc.com',
      [chrome.i18n.getMessage('di')]: 'https://pre-di.alibaba-inc.com',
      [chrome.i18n.getMessage('holoweb')]: 'https://pre-holoweb.alibaba-inc.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('innerPreLocal'), 'inner', 'pre', 'local', '弹内', '预发', '本地'],
    display: chrome.i18n.getMessage('innerPreLocal'),
    urlMap: {
      [chrome.i18n.getMessage('dataService')]: 'https://local.pre-dataservice.alibaba-inc.com:8030',
      [chrome.i18n.getMessage('dgc')]: 'https://local.pre-dgc.dw.alibaba-inc.com:8002',
      [chrome.i18n.getMessage('tag')]: 'https://local.pre-dgc.dw.alibaba-inc.com:8000/tag',
      [chrome.i18n.getMessage('holoweb')]: 'https://local.pre-holoweb.dw.alibaba-inc.com:8080',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('shanghaiPre'), 'shanghai', 'pre', 'shang', '上海', '预发'],
    display: chrome.i18n.getMessage('shanghaiPre'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorksSetting')]: 'https://pre-setting-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('dataStudio')]: 'https://pre-ide2-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://pre-dmc-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://pre-ds-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://pre-da-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://pre-dgc-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('dqc')]: 'https://pre-dqc-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://pre-di-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('holoweb')]: 'https://pre-holoweb-cn-shanghai.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('shanghaiPreLocal'), 'shanghai', 'pre', 'local', 'shang', '上海', '预发', '本地'],
    display: chrome.i18n.getMessage('shanghaiPreLocal'),
    urlMap: {
      [chrome.i18n.getMessage('dataService')]: 'https://local.pre-ds-cn-shanghai.data.aliyun.com:8030',
      [chrome.i18n.getMessage('dgc')]: 'https://local.pre-dgc-cn-shanghai.data.aliyun.com:8002',
      [chrome.i18n.getMessage('tag')]: 'https://local.pre-dgc-cn-shanghai.data.aliyun.com:8000/tag',
      [chrome.i18n.getMessage('holoweb')]: 'https://local.pre-holoweb.data.aliyun.com:8080',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('shanghaiLocal'), 'shanghai', 'local', 'shang', 'local', '上海', '本地'],
    display: chrome.i18n.getMessage('shanghaiLocal'),
    urlMap: {
      [chrome.i18n.getMessage('dataService')]: 'https://local.prod-ds-cn-shanghai.data.aliyun.com:8030',
      [chrome.i18n.getMessage('dgc')]: 'https://local.prod-dgc-cn-shanghai.data.aliyun.com:8002',
      [chrome.i18n.getMessage('tag')]: 'https://local.prod-dgc-cn-shanghai.data.aliyun.com:8000/tag',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('hangzhouPre'), 'hangzhou', 'pre', 'hang', '杭州', '预发'],
    display: chrome.i18n.getMessage('hangzhouPre'),
    urlMap: {
      [chrome.i18n.getMessage('dataService')]: 'https://pre-ds-vpc-cn-hangzhou.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('hangzhouPreLocal'), 'hangzhou', 'pre', 'local', 'hang', '杭州', '预发', '本地'],
    display: chrome.i18n.getMessage('hangzhouPreLocal'),
    urlMap: {
      [chrome.i18n.getMessage('dataService')]: 'https://local.pre-ds-cn-hangzhou.data.aliyun.com:8030',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('beijingPre'), 'beijing', 'bei', 'pre', '北京', '预发'],
    display: chrome.i18n.getMessage('beijingPre'),
    urlMap: {
      [chrome.i18n.getMessage('dataService')]: 'https://pre-ds-vpc-cn-beijing.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('beijingPreLocal'), 'beijing', 'pre', 'local', 'bei', '北京', '预发', '本地'],
    display: chrome.i18n.getMessage('beijingPreLocal'),
    urlMap: {
      [chrome.i18n.getMessage('dataService')]: 'https://local.pre-ds-cn-beijing.data.aliyun.com:8030',
    },
  },
  // 其他
  {
    keywords: [chrome.i18n.getMessage('uiCodeInventory'), 'code', 'fe'],
    display: chrome.i18n.getMessage('uiCodeInventory'),
    urlMap: {
      [chrome.i18n.getMessage('newDataStudioPlugins')]: 'https://code.alibaba-inc.com/alishu/vscode-datastudio-extensions',
      [chrome.i18n.getMessage('dataStudio')]: 'https://code.alibaba-inc.com/alishu/datastudio',
      [chrome.i18n.getMessage('dataService')]: 'https://code.alibaba-inc.com/alishu/only-dataservice',
      [chrome.i18n.getMessage('dataMap')]: 'https://code.alibaba-inc.com/alishu/only-datamap',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://code.alibaba-inc.com/alishu/only-excel',
      [chrome.i18n.getMessage('di')]: 'https://code.alibaba-inc.com/alishu/xstudio-di',
      [chrome.i18n.getMessage('dgc')]: 'https://code.alibaba-inc.com/alishu/data-governance-center',
      [chrome.i18n.getMessage('holoweb')]: 'https://code.alibaba-inc.com/alishu/only-holoweb',
      [chrome.i18n.getMessage('commonHeader')]: 'https://code.alibaba-inc.com/alishu/dataworks-common-header',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('onebox'), 'onebox'],
    display: chrome.i18n.getMessage('onebox'),
    urlMap: {
      [chrome.i18n.getMessage('oneboxProjects')]: 'https://onebox.alibaba-inc.com/#/list',
      [chrome.i18n.getMessage('newDataStudioPlugins')]: 'https://bear.onebox.alibaba-inc.com/#/projects/559',
      [chrome.i18n.getMessage('dataStudio')]: 'https://bear.onebox.alibaba-inc.com/#/projects/207',
      [chrome.i18n.getMessage('dataService')]: 'https://bear.onebox.alibaba-inc.com/#/projects/158',
      [chrome.i18n.getMessage('dataMap')]: 'https://bear.onebox.alibaba-inc.com/#/projects/167',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://bear.onebox.alibaba-inc.com/#/projects/177',
      [chrome.i18n.getMessage('di')]: 'https://bear.onebox.alibaba-inc.com/#/projects/204',
      [chrome.i18n.getMessage('dgc')]: 'https://bear.onebox.alibaba-inc.com/#/projects/472',
      [chrome.i18n.getMessage('holoweb')]: 'https://bear.onebox.alibaba-inc.com/#/projects/293',
      [chrome.i18n.getMessage('commonHeader')]: 'https://bear.onebox.alibaba-inc.com/#/projects/41'
    },
  },
  {
    keywords: [chrome.i18n.getMessage('oneboxPrivateEnvLink'), 'onebox', 'private', 'dataworks'],
    display: chrome.i18n.getMessage('oneboxPrivateEnvLink'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorks')]: 'https://bear.onebox.alibaba-inc.com/#/private-cloud?product_line=dataworks',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('ued'), 'ued', 'design'],
    display: chrome.i18n.getMessage('ued'),
    urlMap: {
      [chrome.i18n.getMessage('dgc')]: 'https://mgdone.alibaba-inc.com/file/112913719891129',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('prd'), 'prd'],
    display: chrome.i18n.getMessage('prd'),
    urlMap: {
      [chrome.i18n.getMessage('dgc')]: 'https://aliyuque.antfin.com/dataworks/dybyo0',
    },
  },
];

const devLinks = [
  {
    keywords: ['dcd'],
    display: chrome.i18n.getMessage('dcdLink'),
    urlMap: {
      [chrome.i18n.getMessage('dcdHome')]: 'https://dcd.alibaba-inc.com',
      [chrome.i18n.getMessage('uiCommand')]: 'https://dcd.alibaba-inc.com/?env=prod#/help-doc/1-6#%E6%B3%A8%E5%86%8C%E4%BF%A1%E6%81%AF',
      [chrome.i18n.getMessage('uiPalette')]: 'https://dcd.alibaba-inc.com/?env=prod#/palette',
      [chrome.i18n.getMessage('uiIcon')]: 'https://dcd.alibaba-inc.com/?env=prod#/icon-search',
    },
  },
  {
    keywords: ['aem'],
    display: chrome.i18n.getMessage('aem'),
    urlMap: {
      [chrome.i18n.getMessage('aemHome')]: 'https://aem.alibaba-inc.com',
      [chrome.i18n.getMessage('console')]: ' https://aem.alibaba-inc.com/project/a2c1h.11154984/page/board',
      [chrome.i18n.getMessage('dataWorks')]: 'https://aem.alibaba-inc.com/project/combo_2Nnc4W/page/board',
      [chrome.i18n.getMessage('dataMap')]: 'https://aem.alibaba-inc.com/project/only-datamap/page/board',
      [chrome.i18n.getMessage('dataService')]: 'https://aem.alibaba-inc.com/project/data-service-studio.project/page/board',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://aem.alibaba-inc.com/project/dataworks-webexcel/page/board',
      [chrome.i18n.getMessage('dgc')]: 'https://aem.alibaba-inc.com/project/data-governance-center/page/board',
      [chrome.i18n.getMessage('holoweb')]: 'https://aem.alibaba-inc.com/project/holoweb/page/board',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('mds'), 'mds'],
    display: chrome.i18n.getMessage('mds'),
    urlMap: {
      [chrome.i18n.getMessage('mdsHome')]: 'https://mds-portal.alibaba-inc.com',
      [chrome.i18n.getMessage('dataService')]: 'https://mds-portal.alibaba-inc.com/applications/detail?appName=only-dataservice&appId=868001',
      [chrome.i18n.getMessage('dataStudio')]: 'https://mds-portal.alibaba-inc.com/applications/detail?appName=data-works-datastudio&appId=605001',
      [chrome.i18n.getMessage('holoweb')]: 'https://mds-portal.alibaba-inc.com/applications/detail?appName=holoweb&appId=2004001',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('aone'), 'aone'],
    display: chrome.i18n.getMessage('aone'),
    urlMap: {
      common: 'https://aone.alibaba-inc.com/v2/req/__var1__',
      [chrome.i18n.getMessage('aoneHome')]: 'https://aone.alibaba-inc.com',
      [chrome.i18n.getMessage('dataService')]: 'https://project.aone.alibaba-inc.com/projects/786390',
      [chrome.i18n.getMessage('dgc')]: 'https://project.aone.alibaba-inc.com/projects/1095520',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('yuque'), 'yuque', 'aliyuque'],
    display: chrome.i18n.getMessage('yuque'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorks')]: 'https://aliyuque.antfin.com/dataworks',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('commonLink'), 'link'],
    display: chrome.i18n.getMessage('commonLink'),
    urlMap: {
      [chrome.i18n.getMessage('okr')]: 'https://okr.alibaba-inc.com',
      [chrome.i18n.getMessage('dataTracker')]: 'https://data-tracker.alibaba-inc.com',
      [chrome.i18n.getMessage('mock')]: 'https://mock.alibaba-inc.com',
      [chrome.i18n.getMessage('f2etest')]: 'https://f2etest.alibaba-inc.com',
      [chrome.i18n.getMessage('tps')]: 'https://tps.alibaba-inc.com',
      [chrome.i18n.getMessage('uone')]: 'https://uone.alibaba-inc.com',
      [chrome.i18n.getMessage('df')]: 'https://df.alibaba-inc.com'
    },
  },
];

const relatedLinks = [
  {
    keywords: [chrome.i18n.getMessage('aliyunDeveloperCommunity'), 'developer', 'community'],
    display: chrome.i18n.getMessage('aliyunDeveloperCommunity'),
    urlMap: {
      [chrome.i18n.getMessage('bigData')]: 'https://developer.aliyun.com/bigdata/',
      [chrome.i18n.getMessage('dataWorks')]: 'https://developer.aliyun.com/group/dataworks/article',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('zhihu'), 'zhihu', 'zhi'],
    display: chrome.i18n.getMessage('zhihu'),
    urlMap: {
      [chrome.i18n.getMessage('cc')]: 'https://www.zhihu.com/column/c_128579185',
      [chrome.i18n.getMessage('dataWorks')]: 'https://www.zhihu.com/column/dataworks',
      [chrome.i18n.getMessage('dwfe')]: 'https://www.zhihu.com/column/dataworks-fe',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('juejin'), 'juejin', 'jue'],
    display: chrome.i18n.getMessage('juejin'),
    urlMap: {
      [chrome.i18n.getMessage('cc')]: 'https://juejin.cn/user/2414974667341287',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('medium'), 'medium', 'med'],
    display: chrome.i18n.getMessage('medium'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorks')]: 'https://medium.com/tag/dataworks',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('vscodeExtension'), 'vscode', 'extension'],
    display: chrome.i18n.getMessage('vscodeExtension'),
    urlMap: {
      [chrome.i18n.getMessage('dataWorks')]: 'https://marketplace.visualstudio.com/search?term=dataworks&target=VSCode&category=All%20categories&sortBy=Relevance',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('github'), 'github', 'git'],
    display: chrome.i18n.getMessage('github'),
    urlMap: {
      [chrome.i18n.getMessage('alibaba')]: 'https://github.com/alibaba',
      [chrome.i18n.getMessage('aliyun')]: 'https://github.com/aliyun',
      [chrome.i18n.getMessage('dwfe')]: 'https://github.com/datafe',
    },
  },
];

const products = [
  { keywords: [chrome.i18n.getMessage('alibaba')], content: chrome.i18n.getMessage('alibaba'), description: chrome.i18n.getMessage('alibaba') },
  { keywords: [chrome.i18n.getMessage('aliyun')], content: chrome.i18n.getMessage('aliyun'), description: chrome.i18n.getMessage('aliyun') },
  { keywords: [chrome.i18n.getMessage('bigData')], content: chrome.i18n.getMessage('bigData'), description: chrome.i18n.getMessage('bigData') },
  { keywords: [chrome.i18n.getMessage('openApi'), 'open', 'api'], content: chrome.i18n.getMessage('openApi'), description: chrome.i18n.getMessage('openApi') },
  { keywords: [chrome.i18n.getMessage('dcd'), 'dcd'], content: chrome.i18n.getMessage('dcd'), description: chrome.i18n.getMessage('dcd') },
  { keywords: [chrome.i18n.getMessage('f2etest'), 'mock', 'test', '测试'], content: chrome.i18n.getMessage('f2etest'), description: chrome.i18n.getMessage('f2etest') },
  { keywords: [chrome.i18n.getMessage('mock'), 'mock'], content: chrome.i18n.getMessage('mock'), description: chrome.i18n.getMessage('mock') },
  { keywords: [chrome.i18n.getMessage('okr'), 'okr'], content: chrome.i18n.getMessage('okr'), description: chrome.i18n.getMessage('okr') },
  { keywords: [chrome.i18n.getMessage('uone'), 'uone', 'survey', '问卷'], content: chrome.i18n.getMessage('uone'), description: chrome.i18n.getMessage('uone') },
  { keywords: [chrome.i18n.getMessage('tps'), 'tps', 'upload'], content: chrome.i18n.getMessage('tps'), description: chrome.i18n.getMessage('tps') },
  { keywords: [chrome.i18n.getMessage('df'), 'df', 'security'], content: chrome.i18n.getMessage('df'), description: chrome.i18n.getMessage('df') },
  { keywords: [chrome.i18n.getMessage('aoneHome'), 'aone', 'home'], content: chrome.i18n.getMessage('aoneHome'), description: chrome.i18n.getMessage('aoneHome') },
  { keywords: [chrome.i18n.getMessage('mdsHome'), 'mds', 'home'], content: chrome.i18n.getMessage('mdsHome'), description: chrome.i18n.getMessage('mdsHome') },
  { keywords: [chrome.i18n.getMessage('aemHome'), 'aem', 'home'], content: chrome.i18n.getMessage('aemHome'), description: chrome.i18n.getMessage('aemHome') },
  { keywords: [chrome.i18n.getMessage('dataTracker'), 'tracker'], content: chrome.i18n.getMessage('dataTracker'), description: chrome.i18n.getMessage('dataTracker') },
  { keywords: [chrome.i18n.getMessage('oneboxProjects'), 'onebox'], content: chrome.i18n.getMessage('oneboxProjects'), description: chrome.i18n.getMessage('oneboxProjects') },
  { keywords: [chrome.i18n.getMessage('oneboxDataWorksPrivate'), 'onebox', 'private'], content: chrome.i18n.getMessage('oneboxDataWorksPrivate'), description: chrome.i18n.getMessage('oneboxDataWorksPrivate') },
  { keywords: [chrome.i18n.getMessage('uiIcon'), 'dcd', 'icon'], content: chrome.i18n.getMessage('uiIcon'), description: chrome.i18n.getMessage('uiIcon') },
  { keywords: [chrome.i18n.getMessage('uiPalette'), 'dcd', 'color'], content: chrome.i18n.getMessage('uiPalette'), description: chrome.i18n.getMessage('uiPalette') },
  { keywords: [chrome.i18n.getMessage('uiCommand'), 'dcd', 'command'], content: chrome.i18n.getMessage('uiCommand'), description: chrome.i18n.getMessage('uiCommand') },
  { keywords: [chrome.i18n.getMessage('console'), 'dataworks', 'dw', 'console', '管控台', '控制台'], content: chrome.i18n.getMessage('console'), description: chrome.i18n.getMessage('console') },
  { keywords: [chrome.i18n.getMessage('dataWorksPublicDatasets'), 'public', 'datasets', '数据集', '公共'], content: chrome.i18n.getMessage('dataWorksPublicDatasets'), description: chrome.i18n.getMessage('dataWorksPublicDatasets') },
  { keywords: [chrome.i18n.getMessage('hologresConsole'), 'hologres', 'hologram', 'holo', 'console', '管控台', '控制台'], content: chrome.i18n.getMessage('hologresConsole'), description: chrome.i18n.getMessage('hologresConsole') },
  { keywords: [chrome.i18n.getMessage('mcConsole'), 'mc', 'maxcompute', 'console', '管控台', '控制台'], content: chrome.i18n.getMessage('mcConsole'), description: chrome.i18n.getMessage('mcConsole') },
  { keywords: [chrome.i18n.getMessage('paiConsole'), 'pai', 'ai', 'console', '管控台', '控制台'], content: chrome.i18n.getMessage('paiConsole'), description: chrome.i18n.getMessage('paiConsole') },
  { keywords: [chrome.i18n.getMessage('emrConsole'), 'emr', 'console', '管控台', '控制台'], content: chrome.i18n.getMessage('emrConsole'), description: chrome.i18n.getMessage('emrConsole') },
  { keywords: [chrome.i18n.getMessage('flinkConsole'), 'flink', 'console', '管控台', '控制台'], content: chrome.i18n.getMessage('flinkConsole'), description: chrome.i18n.getMessage('flinkConsole') },
  { keywords: [chrome.i18n.getMessage('holoweb'), 'holoweb', 'holo', 'hologres'], content: chrome.i18n.getMessage('holoweb'), description: chrome.i18n.getMessage('holoweb') },
  { keywords: [chrome.i18n.getMessage('cc')], content: chrome.i18n.getMessage('cc'), description: chrome.i18n.getMessage('cc') },
  { keywords: [chrome.i18n.getMessage('dataWorks')], content: chrome.i18n.getMessage('dataWorks'), description: chrome.i18n.getMessage('dataWorks') },
  { keywords: [chrome.i18n.getMessage('dwfe')], content: chrome.i18n.getMessage('dwfe'), description: chrome.i18n.getMessage('dwfe') },
  { keywords: [chrome.i18n.getMessage('dataWorksSetting'), 'setting', '配置'], content: chrome.i18n.getMessage('dataWorksSetting'), description: chrome.i18n.getMessage('dataWorksSetting') },
  { keywords: [chrome.i18n.getMessage('newDataStudio'), 'ide', 'new', 'vscode', 'studio', '开发'], content: chrome.i18n.getMessage('newDataStudio'), description: chrome.i18n.getMessage('newDataStudio') },
  { keywords: [chrome.i18n.getMessage('newDataStudioPlugins'), 'ide', 'new', 'vscode', 'plugins', 'extensions', 'studio', '开发'], content: chrome.i18n.getMessage('newDataStudioPlugins'), description: chrome.i18n.getMessage('newDataStudioPlugins') },
  { keywords: [chrome.i18n.getMessage('dataStudio'), 'ide', 'ide2', 'studio', '开发'], content: chrome.i18n.getMessage('dataStudio'), description: chrome.i18n.getMessage('dataStudio') },
  { keywords: [chrome.i18n.getMessage('dataMap'), 'dmc', 'map', '地图'], content: chrome.i18n.getMessage('dataMap'), description: chrome.i18n.getMessage('dataMap') },
  { keywords: [chrome.i18n.getMessage('dataService'), 'dataservice', 'ds', '服务'], content: chrome.i18n.getMessage('dataService'), description: chrome.i18n.getMessage('dataService') },
  { keywords: [chrome.i18n.getMessage('dataAnalytics'), 'da', 'sqlx', 'analyze', 'analytics', '分析'], content: chrome.i18n.getMessage('dataAnalytics'), description: chrome.i18n.getMessage('dataAnalytics') },
  { keywords: [chrome.i18n.getMessage('dgc'), 'dgc', '治理'], content: chrome.i18n.getMessage('dgc'), description: chrome.i18n.getMessage('dgc') },
  { keywords: [chrome.i18n.getMessage('tag'), 'tag', '标签'], content: chrome.i18n.getMessage('tag'), description: chrome.i18n.getMessage('tag') },
  { keywords: [chrome.i18n.getMessage('di'), 'di', 'di2', 'integrate', '集成'], content: chrome.i18n.getMessage('di'), description: chrome.i18n.getMessage('di') },
  { keywords: [chrome.i18n.getMessage('dqc'), 'dqc', 'quality', '质量'], content: chrome.i18n.getMessage('dqc'), description: chrome.i18n.getMessage('dqc') },
  { keywords: [chrome.i18n.getMessage('commonHeader'), 'header', 'common'], content: chrome.i18n.getMessage('commonHeader'), description: chrome.i18n.getMessage('commonHeader') },
];

// chrome.omnibox.setDefaultSuggestion({
//   description: chrome.i18n.getMessage('console'),
// });

const intersection = (array1 = [], array2 = []) => {
  const _array2 = array2?.map?.((obj) => obj?.toLowerCase ? obj?.toLowerCase?.() : obj);
  return array1?.filter?.(value => {
    const _value = value?.toLowerCase ? value?.toLowerCase?.() : value;
    return _array2?.includes?.(_value);
  }) || [];
}

const notIntersection = (array1 = [], array2 = []) => {
  const inter = intersection(array1, array2);
  let result = [];

  const _inter = inter?.map?.((obj) => obj?.toLowerCase ? obj?.toLowerCase?.() : obj);

  if (_inter?.length > 0) {
    array1?.forEach?.(value => {
      const _value = value?.toLowerCase ? value?.toLowerCase?.() : value;
      if (!_inter?.includes?.(_value)) {
        result?.push?.(value);
      }
    });
    array2?.forEach?.(value => {
      const _value = value?.toLowerCase ? value?.toLowerCase?.() : value;
      if (!_inter?.includes?.(_value)) {
        result?.push?.(value);
      }
    });
  } else {
    result = [...array1, ...array2];
  }
  return result;
}

let tempText;

// default suggestion
chrome.omnibox.onInputStarted.addListener(function () {
});

chrome.omnibox.onInputChanged.addListener(function (text, suggest) {

  const textArr = text?.toLowerCase?.()?.split?.(' ') || [];

  const set = new Set<{ content: string; description: string; deletable?: boolean; searchedCounts?: number }>();

  const getDescription = (content: string, url: string, regionDisplay?: string) => {
    if (regionDisplay && doNotShowUrlList?.includes?.(regionDisplay)) return content;
    if (regionDisplay && doNotDecorateDescriptionList?.includes?.(regionDisplay)) return `${content} ${url}`;
    return `${content} <url>${url}</url>`;
  }

  const calMatch = (str: string, keyword: string) => {
    let result = str;
    try {
      if (!keyword) return str;
      let _keyword = keyword?.trim?.();
      result = str?.replaceAll ? str?.replaceAll?.(_keyword, `<match><dim>${_keyword}</dim></match>`) : str;
    } catch (e) {
      // may happen url is not formatted
    }
    return result;
  }

  const allBizLinks = bizLinks.concat(devBizLinks);

  allBizLinks.forEach(region => {
    products.forEach(product => {
      if (!region?.urlMap?.[product.content]) return;
      const searched = intersection((region?.keywords || [])?.concat?.(product?.keywords || []), textArr);
      if (searched?.length > 0) {
        const description = getDescription(`${region.display} ${product.description}`, region.urlMap?.[product.content], region?.display);
        set.add({ content: `${region.display} ${product.content}`, description: calMatch(description, text), searchedCounts: searched?.length || 0 });
      }
    });
  });

  const otherLinks = devLinks.concat(relatedLinks);

  otherLinks.forEach(region => {

    if (region?.urlMap?.common) {
      const searched = intersection((region?.keywords || []), textArr);
      if (searched?.length > 0) {
        const content = region.display;
        const description = getDescription(`${region.display}`, region.urlMap?.common, region?.display);
        set.add({ content, description: calMatch(description, text), searchedCounts: searched?.length || 0 });
      }
    }

    products.forEach(product => {
      if (!region?.urlMap?.[product.content]) return;
      const searched = intersection((region?.keywords || [])?.concat?.(product?.keywords || []), textArr);
      if (searched?.length > 0) {
        const content = `${region.display} ${product.content}`;
        const description = getDescription(`${region.display} ${product.description}`, region.urlMap?.[product.content], region?.display);
        set.add({ content, description: calMatch(description, text), searchedCounts: searched?.length || 0 });
      }
    });
  });

  const result: chrome.omnibox.SuggestResult[] = Array.from(set) || [];

  result.sort((a, b) => (b as any)?.searchedCounts - (a as any)?.searchedCounts);
  result?.forEach?.((item: any) => delete item?.searchedCounts); // remove searchedCounts

  suggest(result);

  tempText = text;

});

chrome.omnibox.onInputEntered.addListener(function (text, disposition) {

  const textArr = text?.split?.(' ') || [];
  let restVars = [];

  let link;

  const allBizLinks = bizLinks.concat(devBizLinks);

  allBizLinks.findIndex(region => {
    return products?.findIndex?.(product => {
      const content = `${region.display} ${product.content}`;
      if (text?.toLowerCase?.() === content?.toLowerCase?.()) {
        link = region?.urlMap?.[product?.content];
        if (link) return true;
      }
    }) !== -1;
  });

  if (!link) {
    const otherLinks = devLinks.concat(relatedLinks);
    otherLinks.findIndex(region => {
      let existed = products?.findIndex?.(product => {
        const content = `${region.display} ${product.content}`;
        if (text?.toLowerCase?.() === content?.toLowerCase?.()) {
          link = region?.urlMap?.[product?.content];
          if (link) return true;
        }
      }) !== -1;

      if (existed) return true;

      if (region?.urlMap?.common) {

        if (text?.toLowerCase?.() === region?.display?.toLowerCase?.()) {
          link = region?.urlMap?.common;
          restVars = notIntersection(region?.keywords, tempText?.split?.(' ') || []);
          return true;
        } else if (intersection(region?.keywords, textArr)?.length > 0) {
          link = region?.urlMap?.common;
          restVars = notIntersection(region?.keywords, textArr);
          return true;
        }
      }
    });
  }

  if (link) {

    // check path var, starting from 1
    for (let i = 1; i < 10; i++) {
      const flag = `__var${i}__`;
      if (link?.includes?.(flag)) {
        link = link?.replaceAll?.(flag, restVars?.[i - 1] || '');
      } else break;
    }

    chrome?.tabs?.create?.({ url: link });
  }
  else chrome?.tabs?.create?.({ url: 'https://dataworks.console.aliyun.com/' }); // default 至管控台

});

chrome.omnibox.onInputCancelled.addListener(function () {

});

chrome.omnibox.onDeleteSuggestion.addListener(function (text) {

});



