import React, { useState, useEffect } from 'react';
import logo from '@assets/img/logo.svg';
import useStorage from '@src/shared/hooks/useStorage';
import apiInfoStorage from '@src/shared/storages/apiInfoStorage';
import ApiCreation from './ApiCreation';
import AddCommonParameter from './AddCommonParameter';
import EditApi from './EditApi';
import intl from 'react-intl-universal';
import { Button, Table, Space, Card, Drawer, Popconfirm, message } from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { PRODUCT_NAME } from '@src/shared/constants/common';

import '@pages/options/Options.scss';

interface IProps {

}

const selfExtensionId = chrome?.runtime?.id;

const ParameterItem: React.FC<{ item: ApiParam; onDelete: (name: string) => void }> = (props) => {
  const { item, onDelete } = props;
  return (
    <div className="parameter-item-content" key={item?.name}>
      <div className="parameter-item-name">{item?.name}</div>
      <span className="separator">:</span>
      <div className="parameter-item-value">{item?.value}</div>
      <Button type="link" onClick={() => onDelete(item?.name)}><CloseOutlined /></Button>
    </div>
  );
};

const Options: React.FC<IProps> = () => {

  const apiInfo = useStorage(apiInfoStorage);

  const [apiList, setApiList] = useState<ApiData[]>(apiInfo.apiList || []);
  const [editingApi, setEditingApi] = useState<ApiData>();
  const [showApiCreation, setShowApiCreation] = useState<boolean>(false);
  const [commonParameters, setCommonParameters] = useState<ApiParam[]>(apiInfo.commonParameters || []);


  useEffect(() => {
    document.title = intl.get('options').d('设定');
  }, []);

  const onSave = () => {
    apiInfoStorage.set({ apiList, commonParameters });
    message.success(intl.get('saveSuccess').d('保存成功'));
  };

  const onOpenPopup = async () => {
    // send message for extension
    try {
      await chrome?.action?.openPopup?.();
      await chrome.runtime.sendMessage(selfExtensionId, {});
    } catch (e) {
      // if catch error means popup is not opened
      chrome.windows.create({
        url: chrome.runtime.getURL('src/pages/popup/index.html'),
        type: 'popup',
        width: 400, height: 600,
        focused: true,
      });
    }
  }

  const onRemoveApi = (apiId: string) => {
    apiList.splice(apiList.findIndex(item => item.apiId === apiId), 1);
    setApiList([...apiList]);
  }

  const onAddApi = (apiData: ApiData) => {
    setApiList([...apiList, apiData]);
    setShowApiCreation(false);
  }

  const onEditApi = (apiData: ApiData) => {
    const index = apiList.findIndex(item => item.apiId === apiData?.apiId);
    if (index >= 0) apiList[index] = apiData;
    setApiList([...apiList]);
    setEditingApi(undefined);
  }

  const onDeleteCommonParameter = (name: string) => {
    setCommonParameters(commonParameters.filter(item => item.name !== name));
  }

  const onSyncFromAlibabaCloud = () => {

  };

  const columns = [
    {
      title: 'API ID',
      dataIndex: 'apiId',
      key: 'apiId',
      width: 100,
    },
    {
      title: intl.get('apiName').d('API名称'),
      dataIndex: 'apiName',
      key: 'name',
      width: 200,
    },
    {
      title: intl.get('apiMethod').d('API方法'),
      dataIndex: 'apiMethod',
      key: 'apiMethod',
      width: 120,
    },
    {
      title: intl.get('apiPath').d('API路径'),
      dataIndex: 'apiPath',
      key: 'apiPath',
      width: 300,
    },
    {
      title: intl.get('description').d('描述'),
      dataIndex: 'description',
      key: 'description',
      width: 300,
    },
    {
      title: intl.get('operation').d('操作'),
      dataIndex: 'apiId',
      key: 'operation',
      width: 250,
      render: (apiId: string, api: ApiData) => {
        return (
          <div className="api-operation">
            <Button type="link" onClick={() => setEditingApi(api)}>{intl.get('edit').d('编辑')}</Button>
            <Popconfirm
              title={intl.get('removeApi').d('移除API')}
              description={intl.get('removeApiConfirm', { apiId }).d(`您确定要移除此API: ${apiId} ?`)}
              onConfirm={() => onRemoveApi(apiId)}
              okText={intl.get('ok').d('确定')}
              cancelText={intl.get('cancel').d('取消')}
            >
              <Button type="link">{intl.get('remove').d('移除')}</Button>
            </Popconfirm>
          </div>
        );
      }
    },
  ];

  return (
    <div className="app options">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <div className="header-text">{PRODUCT_NAME}</div>
      </header>
      <div className="content">

        <Space className="content-space" direction="vertical" size="middle">
          <Card title={intl.get('commonParameters').d('共同参数')} size="small" extra={
            <div className="common-parameters-toolbar">
              <AddCommonParameter onAdded={(name, value) => setCommonParameters([...commonParameters, { name, value }])} />
            </div>
          }>
            <div className="parameter-item">
              {commonParameters?.length === 0 ? <div className="empty-parameter-tip">{intl.get('plsAddParameters').d('请添加参数')}</div> : commonParameters?.map?.((item) => {
                return <ParameterItem item={item} onDelete={(key) => onDeleteCommonParameter(key)} />;
              })}
            </div>
          </Card>
          <Card title="API List" size="small" extra={
            <div className="api-list-toolbar">
              {/* <Popconfirm
                title={intl.get('syncApiFromAlibabaCloud').d('从阿里云同步')}
                description={
                  <div className="sync-from-alibaba-cloud">
                    <span className="tip">{intl.get('plsFillInAkInfo').d('请输入AK信息以同步API信息')}</span>
                    <div className="config-item">
                      <div className="config-content ak">
                        <Input placeholder='AccessKey Info' />
                        <Input placeholder='AccessKey Secret' />
                      </div>
                    </div>
                  </div>
                }
                onConfirm={() => onSyncFromAlibabaCloud()}
                okText={intl.get('ok').d('确定')}
                cancelText={intl.get('cancel').d('取消')}
              >
                <Button>{intl.get('syncApiFromAlibabaCloud').d('从阿里云同步')}</Button>
              </Popconfirm> */}
              <Button onClick={() => setShowApiCreation(true)}><PlusOutlined />{intl.get('addApi').d('添加API')}</Button>
            </div>
          }>
            <div className="api-list">
              <Table
                // virtual
                id="apiId"
                className="api-list-table"
                dataSource={apiList}
                columns={columns}
                pagination={false}
                scroll={{ x: true, y: 600 }}
              />
            </div>
          </Card>
        </Space>

        <Button className="save-options" type="primary" onClick={onSave}>{intl.get('save').d('保存')}</Button>
        {/* <Button className="open-popup" type="default" onClick={onOpenPopup}>{intl.get('openPopup').d('打开插件')}</Button> */}
      </div>
      <Drawer
        key={editingApi?.apiId}
        title={intl.get('editParameters').d('编辑参数')}
        placement="right"
        size="large"
        onClose={() => setEditingApi(undefined)}
        open={editingApi !== undefined}
      >
        <EditApi
          apiData={editingApi}
          visible={editingApi !== undefined}
          onEdited={onEditApi}
        />
      </Drawer>
      <Drawer
        title={intl.get('addApi').d('添加API')}
        placement="right"
        size="large"
        onClose={() => setShowApiCreation(false)}
        open={showApiCreation}
      >
        <ApiCreation
          visible={showApiCreation}
          onAdded={onAddApi}
        />
      </Drawer>
    </div>
  );
};

export default Options;
