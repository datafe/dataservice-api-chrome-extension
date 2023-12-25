import { c as createStorage, S as StorageType } from "./base.js";
const storage = createStorage("theme-storage-key", "light", {
  storageType: StorageType.Local,
  liveUpdate: true
});
const exampleThemeStorage = {
  ...storage,
  // TODO: extends your own methods
  toggle: () => {
    storage.set((currentTheme) => {
      return currentTheme === "light" ? "dark" : "light";
    });
  }
};
async function toggleTheme() {
  console.log("initial theme", await exampleThemeStorage.get());
  exampleThemeStorage.toggle();
  console.log("toggled theme", await exampleThemeStorage.get());
}
void toggleTheme();
