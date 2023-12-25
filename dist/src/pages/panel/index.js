import { a as addHmrIntoView, c as createRoot, j as jsxRuntimeExports } from "../../../assets/js/client.js";
import { P as Popup } from "../../../assets/js/Popup.js";
import { u as useIntl } from "../../../assets/js/useIntl.js";
import "../../../assets/js/_commonjsHelpers.js";
import "../../../assets/js/common.js";
import "../../../assets/js/base.js";
import "../../../assets/js/selectionInfoStorage.js";
addHmrIntoView("pages/panel");
const App = () => {
  const { initDone } = useIntl();
  return !initDone ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Popup, {});
};
function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find #app-container");
  }
  const root = createRoot(appContainer);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(App, {}));
}
init();
