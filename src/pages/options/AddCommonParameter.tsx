import React, { useState } from 'react';
import intl from 'react-intl-universal';
import { message, Popconfirm, Input, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


interface IProps {
  onAdded: (key: string, value: any) => void;
}


const AddCommonParameter: React.FC<IProps> = (props) => {

  const [name, setName] = useState<string>();
  const [value, setValue] = useState<any>();

  const onAdd = () => {
    if (!name || !value) {
      message.error('Please fill in all fields');
      return;
    }
    props?.onAdded?.(name, value);
    setName(undefined);
    setValue(undefined);
  };

  return (
    <Popconfirm
      title={intl.get('addCommonParameter').d('添加共同参数')}
      description={
        <div className="add-common-parameter">
          <span className="tip">{intl.get('plsFillParameter').d('请输入参数')}</span>
          <div className="config-item">
            <div className="config-content common-parameter">
              <Input
                value={name}
                placeholder={intl.get('parameterName').d('参数名')}
                onChange={(e: { target: { value: string } }) => setName(e?.target?.value)}
              />
              <Input
                value={value}
                placeholder={intl.get('parameterValue').d('参数值')}
                onChange={(e: { target: { value: string } }) => setValue(e?.target?.value)}
              />
            </div>
          </div>
        </div>
      }
      onConfirm={() => onAdd()}
      okText={intl.get('ok').d('确定')}
      cancelText={intl.get('cancel').d('取消')}
    >
      <Button><PlusOutlined />{intl.get('addParameter').d('添加参数')}</Button>
    </Popconfirm>
  );
}

export default AddCommonParameter;
