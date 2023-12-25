import { c as createStorage, S as StorageType } from "./base.js";
const storageKey = "selection-info-storage-key";
const initData = { apiId: void 0, parameterName: void 0, selection: void 0 };
const storage = createStorage(storageKey, initData, {
  storageType: StorageType.Local,
  liveUpdate: true
});
const selectionInfoStorage = {
  ...storage,
  // TODO: extends your own methods
  clear: () => {
    storage.set(() => initData);
  }
};
export {
  selectionInfoStorage as s
};
