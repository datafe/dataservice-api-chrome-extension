
import React, { useState, useEffect } from 'react';
import intl from 'react-intl-universal';
import { Button, Input, Select, message } from 'antd';
import '@pages/options/ApiCreation.scss';

interface IProps {
  onAdded: (apiData: ApiData) => void;
  visible: boolean;
}

type Cached = { apiData: ApiData };

const defaultApiData: ApiData = { apiMethod: 'GET' };

const ApiCreation: React.FC<IProps> = (props) => {

  const { visible } = props;

  const [cached, setCached] = useState<Cached>({ apiData: { ...defaultApiData } });

  useEffect(() => {
    // reset cached
    if (visible) setCached({ apiData: { ...defaultApiData } });
  }, [visible]);

  const onAddApi = () => {
    const apiData = cached?.apiData;
    if (!apiData?.apiId || !apiData?.apiName || !apiData?.apiPath || !apiData?.apiMethod) {
      message.error('Please fill in required fields');
      return;
    }
    props?.onAdded?.(cached.apiData);
  };

  return (
    <div className="api-creation-content">
      <div className="item">
        <div className="label required">{intl.get('apiId').d('API ID')}</div>
        <Input
          value={cached.apiData.apiId}
          onChange={(e: { target: { value: string } }) => cached.apiData.apiId = e?.target?.value}
        />
      </div>
      <div className="item">
        <div className="label required">{intl.get('apiName').d('API名称')}</div>
        <Input
          value={cached.apiData.apiName}
          onChange={(e: { target: { value: string } }) => cached.apiData.apiName = e?.target?.value} />
      </div>

      <div className="item">
        <div className="label required">{intl.get('apiMethod').d('API方法')}</div>
        <Select
          defaultValue="GET"
          value={cached.apiData.apiMethod}
          onChange={(v: ApiMethod) => cached.apiData.apiMethod = v}
          options={[
            { value: 'GET', label: 'GET' },
            { value: 'POST', label: 'POST' },
            { value: 'PUT', label: 'PUT' },
            { value: 'DELETE', label: 'DELETE' },
          ]}
        />
      </div>

      <div className="item">
        <div className="label required">{intl.get('apiPath').d('API路径')}</div>
        <Input
          value={cached.apiData.apiPath}
          onChange={(e: { target: { value: string } }) => cached.apiData.apiPath = e?.target?.value}
        />
      </div>

      <div className="item">
        <div className="label">{intl.get('description').d('描述')}</div>
        <Input
          value={cached.apiData.description}
          onChange={(e: { target: { value: string } }) => cached.apiData.description = e?.target?.value}
        />
      </div>

      <Button type="primary" onClick={onAddApi}>{intl.get('add').d('添加')}</Button>
    </div>
  );
};

export default ApiCreation;
