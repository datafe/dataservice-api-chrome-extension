var _a, _b, _c, _d, _e;
try {
  (_e = (_b = (_a = chrome == null ? void 0 : chrome.devtools) == null ? void 0 : _a.panels) == null ? void 0 : _b.create) == null ? void 0 : _e.call(_b, (_d = (_c = chrome == null ? void 0 : chrome.i18n) == null ? void 0 : _c.getMessage) == null ? void 0 : _d.call(_c, "appName"), "logo-64.png", "src/pages/panel/index.html");
} catch (e) {
  console.error(e);
}
