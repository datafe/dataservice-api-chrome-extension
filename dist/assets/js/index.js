import { r as reactExports, j as jsxRuntimeExports, a as addHmrIntoView, c as createRoot } from "./client.js";
import "./_commonjsHelpers.js";
function App() {
  reactExports.useEffect(() => {
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {});
}
const injectedStyle = "";
addHmrIntoView("pages/content");
const root = document.createElement("div");
root.id = "chrome-extension-data-service-api-content-view-root";
document.body.append(root);
const rootIntoShadow = document.createElement("div");
rootIntoShadow.id = "shadow-root";
const shadowRoot = root.attachShadow({ mode: "open" });
shadowRoot.appendChild(rootIntoShadow);
const styleElement = document.createElement("style");
styleElement.innerHTML = injectedStyle;
shadowRoot.appendChild(styleElement);
createRoot(rootIntoShadow).render(/* @__PURE__ */ jsxRuntimeExports.jsx(App, {}));
