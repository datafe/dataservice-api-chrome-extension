
import React, { useState, useEffect } from 'react';
import intl from 'react-intl-universal';
import { Button, Input, Select, message } from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';

import '@pages/options/EditApi.scss';

interface IProps {
  apiData: ApiData;
  onEdited: (apiData: ApiData) => void;
  visible: boolean;
}

const defaultApiData: ApiData = { apiMethod: 'GET' };

const EditApi: React.FC<IProps> = (props) => {

  const { visible } = props;

  const [apiData, setApiData] = useState<ApiData>({ ...defaultApiData, ...props?.apiData });
  const [apiParameters, setApiParameters] = useState<ApiParam[]>([...apiData?.apiParams || []]);

  useEffect(() => {
    // reset cached
    if (visible) {
      setApiData({ ...defaultApiData, ...props?.apiData });
      setApiParameters([...props?.apiData?.apiParams || []]);
    }
  }, [visible]);

  // submit changed
  const onEdit = () => {
    if (apiParameters?.findIndex?.((p => !p?.name)) !== -1) {
      message.error(intl.get('parameterNameRequired').d('参数名必填'));
      return;
    }
    const newApiData = { ...apiData, apiParams: apiParameters };
    props?.onEdited?.(newApiData);
    message.info(intl.get('editedSubmit').d('已编辑'));
  };

  const onAddParameter = () => {
    apiParameters?.push?.({ name: '', value: '' });
    setApiParameters([...apiParameters]);
  };

  const onRemoveParameter = (index: number) => {
    if (index >= 0) apiParameters?.splice?.(index, 1);
    setApiParameters([...apiParameters]);
  }

  return (
    <div className="edit-api-content">
      <div className="group-title">{intl.get('apiInfo').d('API信息')}</div>
      <div className="item">
        <div className="label">{intl.get('apiName').d('API名称')}</div>
        <Input
          key={apiData.apiName}
          defaultValue={apiData.apiName}
          onChange={(e: { target: { value: string } }) => apiData.apiName = e?.target?.value}
        />
      </div>
      <div className="item">
        <div className="label">{intl.get('apiMethod').d('API方法')}</div>
        <Select
          key={apiData.apiMethod}
          defaultValue={apiData.apiMethod}
          onChange={(v: ApiMethod) => apiData.apiMethod = v}
          options={[
            { value: 'GET', label: 'GET' },
            { value: 'POST', label: 'POST' },
            { value: 'PUT', label: 'PUT' },
            { value: 'DELETE', label: 'DELETE' },
          ]}
        />
      </div>
      <div className="item">
        <div className="label">{intl.get('apiPath').d('API路径')}</div>
        <Input
          key={apiData.apiPath}
          defaultValue={apiData.apiPath}
          onChange={(e: { target: { value: string } }) => apiData.apiPath = e?.target?.value}
        />
      </div>
      <div className="item">
        <div className="label">{intl.get('description').d('描述')}</div>
        <Input
          key={apiData.apiName}
          defaultValue={apiData.apiName}
          onChange={(e: { target: { value: string } }) => apiData.apiName = e?.target?.value}
        />
      </div>
      <div className="group-title">{intl.get('displayConfigs').d('显示设定')}</div>
      <div className="item">
        <div className="label">{intl.get('displaySheetDataKey').d('数据撷取字段')}</div>
        <Input
          key={apiData.sheetDisplayDataKey}
          defaultValue={apiData.sheetDisplayDataKey}
          onChange={(e: { target: { value: string } }) => apiData.sheetDisplayDataKey = e?.target?.value}
        />
      </div>
      <div className="group-title">{intl.get('requestHeader').d('Request Header')}</div>
      <div className="item">
        <div className="label">{intl.get('contentType').d('Content Type')}</div>
        <Input
          key={apiData.requestHeaderContentType}
          defaultValue={apiData.requestHeaderContentType}
          onChange={(e: { target: { value: string } }) => apiData.requestHeaderContentType = e?.target?.value}
        />
      </div>
      <div className="group-title">{intl.get('requestParameters').d('请求参数')}</div>
      <div className="parameters">
        {apiParameters?.map?.((parameter, index) => {
          return (
            <div className="parameter-item" key={`${index}_${parameter?.name}`}>
              <div className="label required">{intl.get('parameterName').d('参数名')}</div>
              <Input
                defaultValue={apiParameters[index].name}
                onChange={(e: { target: { value: string } }) => apiParameters[index].name = e?.target?.value}
              />
              <div className="label">{intl.get('parameterValue').d('参数值')}</div>
              <Input
                defaultValue={apiParameters[index].value}
                onChange={(e: { target: { value: string } }) => apiParameters[index].value = e?.target?.value}
              />
              <Button type="link" onClick={() => onRemoveParameter(index)}><CloseOutlined /></Button>
            </div>
          );
        })}
      </div>
      <Button type="link" onClick={() => onAddParameter()}><PlusOutlined />{intl.get('addParameter').d('添加参数')}</Button>
      {/* <div className="item">
        <div className="label required">Method</div>
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
        <div className="label required">API Path</div>
        <Input
          value={cached.apiData.apiPath}
          onChange={(e: { target: { value: string } }) => cached.apiData.apiPath = e?.target?.value}
        />
      </div> */}

      <div className="footer">
        <Button type="primary" onClick={onEdit}>{intl.get('submit').d('送出')}</Button>
      </div>
    </div>
  );
};

export default EditApi;
