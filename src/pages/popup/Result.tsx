import React, { useState, useEffect } from 'react';
import ReactJson from 'react-json-view';
import intl from 'react-intl-universal';
import get from 'lodash/get';
import isArray from 'lodash/isArray';
import isString from 'lodash/isString';
import isNumber from 'lodash/isNumber';
import isBoolean from 'lodash/isBoolean';
import delay from 'lodash/delay';
import { Segmented, Input } from 'antd';
import {
  DataSheetGrid,
  keyColumn,
  textColumn,
} from 'react-datasheet-grid';
import { defaultResultTableDataKey } from '@root/src/shared/constants/common';

import 'react-datasheet-grid/dist/style.css';

interface IProps {
  apiData?: ApiData;
  source?: any;
  error?: string;
}

type DisplayType = 'json' | 'table';

const Result: React.FC<IProps> = (props) => {

  const { apiData, source, error } = props;
  const [displayType, setDisplayType] = useState<DisplayType>('json');
  const [sheetData, setSheetData] = useState<any>([]);
  const [columns, setColumns] = useState<any>([]);
  const [sheetDataKey, setSheetDataKey] = useState<string>(apiData?.sheetDisplayDataKey || defaultResultTableDataKey);

  const extractSheetData = (source: { data?: any }) => {
    try {
      const target = sheetDataKey ? get(source, sheetDataKey) : source;
      if (isArray(target)) {
        const dataKeys = Object.keys(target?.[0]) || [];
        const columns = dataKeys.map((key) => {
          return {
            ...keyColumn(key, textColumn),
            title: key,
            minWidth: 200,
          };
        });
        setColumns(columns);
        delay(() => setSheetData(target || []), 150);
      } else if (isString(target) || isNumber(target) || isBoolean(target)) {
        setColumns([{
          ...keyColumn('content', textColumn),
          title: 'content',
          minWidth: 200,
        }]);
        delay(() => setSheetData([{ content: target }]), 150);
      } else if (target) {
        const dataKeys = Object.keys(target) || [];
        const columns = dataKeys.map((key) => {
          return {
            ...keyColumn(key, textColumn),
            title: key,
            minWidth: 200,
          };
        });
        setColumns(columns);
        delay(() => setSheetData([target]), 150);
      } else setColumns([]);
    } catch (e) {
    }
  };

  useEffect(() => {
    extractSheetData(source);
  }, [source]);

  useEffect(() => {
    setSheetDataKey(apiData?.sheetDisplayDataKey || defaultResultTableDataKey);
  }, [apiData]);

  useEffect(() => {
    if (displayType === 'table') extractSheetData(source);
  }, [sheetDataKey]);

  if (error) return <div className="query-result-error">{error}</div>;

  return !source ? <div className="empty-result" /> : (
    <div className="result-wrap">
      <div className="result-toolbar">
        {
          displayType === 'table' &&
          <div className="sheet-data-key-wrapper">
            <span className="label">{intl.get('displaySheetDataKey').d('数据撷取字段')}</span>
            <Input
              key={displayType}
              value={sheetDataKey}
              placeholder='Ex. temperature.data'
              onChange={(e: { target: { value: string } }) => setSheetDataKey(e?.target?.value)}
            />
          </div>
        }
        <Segmented size="small" value={displayType} onChange={(v: DisplayType) => setDisplayType(v)} options={[{ label: 'JSON', value: 'json' }, { label: 'Table', value: 'table' }]} />
      </div>
      <div className="result-content">
        {
          displayType === 'json' ? (<ReactJson src={source} />) : (
            columns?.length > 0 ? (
              <DataSheetGrid
                key={JSON.stringify(columns || [])}
                disableExpandSelection
                lockRows
                value={sheetData}
                columns={columns}
                headerRowHeight={24}
                rowHeight={24}
              />) : undefined
          )
        }
      </div>
    </div>
  )
};

export default Result;


