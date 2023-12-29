import React, { useEffect, useState, useMemo } from 'react';
import intl from 'react-intl-universal';
import logo from '@assets/img/logo.svg';
import cloneDeep from 'lodash/cloneDeep';
import delay from 'lodash/delay';
import set from 'lodash/set';
import useForceUpdate from '@src/shared/hooks/useForceUpdate';
import useStorage from '@src/shared/hooks/useStorage';
import apiInfoStorage from '@src/shared/storages/apiInfoStorage';
import selectionInfoStorage from '@root/src/shared/storages/selectionInfoStorage';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import Result from './Result';
import { Select, Input, Button } from 'antd';
import { events } from '@src/shared/constants/common';
import { ControlOutlined, ReloadOutlined } from '@ant-design/icons';
import { PRODUCT_NAME } from '@src/shared/constants/common';

import '@pages/popup/Popup.scss';

type ApiInfo = { apiList: ApiData[]; commonParameters: ApiParam[]; sheetDisplayDataKey?: string };
type SelectionInfo = { apiId?: string; parameterName?: string; selection?: string };

interface IProps { }

const Popup: React.FC<IProps> = () => {
  const apiInfo = useStorage(apiInfoStorage);
  const selectionInfo = useStorage(selectionInfoStorage);
  const defaultSelectApiId = apiInfo?.apiList?.[0]?.apiId;
  const forceUpdate = useForceUpdate();

  const getSelectApiId = () => {
    return selectionInfo?.apiId || defaultSelectApiId;
  }

  const updateParamValueBySelection = (apiInfo: ApiInfo, selectionInfo: SelectionInfo) => {
    const apiParams = apiInfo?.apiList?.find?.((a) => a?.apiId === getSelectApiId())?.apiParams || [];
    if (selectionInfo?.parameterName) {
      // update param value
      const foundParam = apiParams?.find?.((p) => p?.name === selectionInfo?.parameterName);
      if (foundParam && foundParam.value !== selectionInfo?.selection) {
        foundParam.value = selectionInfo?.selection;
      }
    }
    return apiInfo;
  };

  const clonedApiInfo = (apiInfo: ApiInfo, selectionInfo: SelectionInfo) => {
    const cached = cloneDeep(apiInfo);
    updateParamValueBySelection(cached, selectionInfo);
    return cached;
  }

  // clone data for value change
  const [loading, setLoading] = useState(false);
  const [cachedApiInfo, setCachedApiInfo] = useState<ApiInfo>(clonedApiInfo(apiInfo, selectionInfo));
  const [result, setResult] = useState(undefined);
  const [queryError, setQueryError] = useState(undefined);
  // use reloading flag to refresh whole page
  const [reloading, setReloading] = useState(false);
  const apiParams = cachedApiInfo?.apiList?.find?.((a) => a?.apiId === getSelectApiId())?.apiParams || [];

  /** open option page */
  const openOptionsPage = () => {
    chrome?.runtime?.openOptionsPage?.();
  };

  const clearSelectionAndReloadPage = async () => {
    await selectionInfoStorage?.clear?.(); // clear selection storage
    setQueryError(undefined);
    setResult(undefined);
    delay(() => {
      setCachedApiInfo(clonedApiInfo(apiInfo, {}));
      setReloading(true);
    }, 500);
  };

  useEffect(() => {

    // did mount
    document.title = intl.get('appName').d('数据服务API');

    // when popup open
    chrome.runtime.onMessage.addListener(async function (request) {
      if (request?.action === events.PASSING_SELECTION && request?.selectionInfo) {
        console.debug('received passing selection event');
        return true;
      }
    });

  }, []);

  useEffect(() => {
    if (reloading) setReloading(false);
  }, [reloading]);

  useEffect(() => {
    setCachedApiInfo(clonedApiInfo(apiInfo, selectionInfo));
  }, [apiInfo]);

  useEffect(() => {
    // update selection values
    setCachedApiInfo(clonedApiInfo(cachedApiInfo, selectionInfo));
  }, [selectionInfo]);

  const getSelectedApi = (apiList: ApiData[]) => apiList?.find?.((a) => a?.apiId === getSelectApiId());

  const onQuery = async () => {
    // query api
    setLoading(true);
    setResult(undefined);
    setQueryError(undefined);
    try {
      const { commonParameters, apiList } = cachedApiInfo;
      const api = getSelectedApi(apiList);
      if (api) {
        const apiParams = api?.apiParams || [];
        const mergedParams = [...commonParameters, ...apiParams];
        const requestHeaderContentType = api?.requestHeaderContentType;

        // deal with api path
        let apiPath = api?.apiPath || '';
        for (let i = mergedParams?.length - 1; i >= 0; i--) {
          const apiParam = mergedParams?.[i];
          const pathVarStr = `{${apiParam?.name}}`;
          if (apiPath?.includes?.(pathVarStr)) {
            // replace path var
            apiPath = apiPath?.replaceAll?.(pathVarStr, apiParam.value);
            // remove param
            mergedParams?.splice?.(i, 1);
          }
        }

        let query;
        if (api?.apiMethod === 'POST') {
          let _params;
          if (requestHeaderContentType?.includes?.('/json')) {
            _params = {};
            mergedParams?.forEach?.((p) => {
              if (p?.name?.includes?.('.')) {
                const keys = p?.name?.split?.('.');
                const firstKey = keys?.shift?.();
                const restKeys = keys;
                const temp = {};
                set(temp, restKeys, p?.value);
                _params[firstKey] = temp;
              } else {
                _params[p?.name] = p?.value;
              }
            });
          } else {
            _params = mergedParams?.map?.((p) => ({ [p?.name]: p?.value }));
          }
          const options: RequestInit = { method: api?.apiMethod, body: JSON.stringify(_params) };
          if (requestHeaderContentType) options.headers = { 'Content-Type': requestHeaderContentType };
          query = await fetch(apiPath, options);
        } else {
          const url = new URL(apiPath);
          const params: { [key: string]: any } = {};
          mergedParams?.forEach?.((p) => params[p?.name] = p?.value);
          url.search = new URLSearchParams(params).toString();
          const options: RequestInit = { method: api?.apiMethod };
          if (requestHeaderContentType) options.headers = { 'Content-Type': requestHeaderContentType };
          query = await fetch(url, options);
        }

        let result;
        try {
          if (requestHeaderContentType?.includes?.('xml')) {
            // result = new window?.DOMParser?.()?.parseFromString(query?.text?.(), "text/xml");
            result = { result: await query?.text?.() };
          } else result = await query?.json?.();
        } catch (e) {
          result = { result: await query?.text?.() };
        }

        if (result) setResult(result);
      }
    } catch (e) {
      console.error(e);
      setQueryError(e?.message);
    }
    setLoading(false);
  };

  if (reloading) return <div className="app popup reloading"> {intl.get('reloading').d('重新载入')} ... </div>;

  return (
    <div className="app popup" onKeyDown={(e) => {
      if (e?.key === 'Enter') onQuery?.();
    }}>
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <div className="header-text">{PRODUCT_NAME}</div>
        <ReloadOutlined className="reload-icon" onClick={() => clearSelectionAndReloadPage()} />
        <ControlOutlined className="option-icon" onClick={openOptionsPage} />
      </header>
      <div className="content">
        <div className="api-name-title">{intl.get('apiName').d('API名称')}</div>
        <div className="api-selector-wrapper">
          <Select
            key={getSelectApiId()}
            defaultValue={getSelectApiId()}
            onChange={(v: string) => selectionInfoStorage?.set?.({ ...selectionInfo, apiId: v })}
            options={apiInfo?.apiList?.map?.((a) => ({ value: a?.apiId, label: a?.apiName })) || []}
          />
        </div>
        {
          apiParams?.length > 0 && (
            <>
              <div className="api-parameters-title">{intl.get('apiParameters').d('参数值')}</div>
              <div className="api-parameters">
                {
                  apiParams?.map?.((param: ApiParam, index: number) => (
                    <div className="param-item" key={`${JSON.stringify(selectionInfo || {})}_${getSelectApiId()}_${param?.name}_${param?.value}`}>
                      <div className="item-name">{param?.name}</div>
                      <div className="item-value">
                        <Input
                          defaultValue={param?.value}
                          onChange={(e: { target: { value: string } }) => param.value = e?.target?.value}
                        />
                      </div>
                    </div>
                  ))
                }
              </div>
            </>
          )
        }
        <Button className="query-btn" type="primary" size="small" loading={loading} onClick={onQuery}>{intl.get('query').d('请求')}</Button>
        <div className="query-result-title">{intl.get('queryResult').d('结果')}</div>
        <div className="query-result">
          <Result apiData={getSelectedApi(apiInfo?.apiList)} source={result} error={queryError} />
        </div>
      </div>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> {intl.get('loading').d('载入中')} ... </div>), <div> {intl.get('errorOccur').d('发生错误')} </div>);
