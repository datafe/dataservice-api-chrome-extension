import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';


const storageKey = 'selection-info-storage-key';

interface SelectionInfo {
  apiId?: string;
  parameterName?: string;
  selection?: string;
};

type SelectionInfoStorage = BaseStorage<SelectionInfo> & {
  clear: () => void;
};

const initData: SelectionInfo = { apiId: undefined, parameterName: undefined, selection: undefined };

const storage = createStorage<SelectionInfo>(storageKey, initData, {
  storageType: StorageType.Local,
  liveUpdate: true,
});

const selectionInfoStorage: SelectionInfoStorage = {
  ...storage,
  // TODO: extends your own methods
  clear: () => {
    storage.set(() => (initData));
  },
};

export default selectionInfoStorage;
