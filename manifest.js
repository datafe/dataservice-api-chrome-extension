import packageJson from './package.json' assert { type: 'json' };

/**
 * After changing, please reload the extension at `chrome://extensions`
 * @type {chrome.runtime.ManifestV3}
 */
const manifest = {
  manifest_version: 3,
  name: '__MSG_appName__',
  version: packageJson.version,
  description: '__MSG_appDescription__',
  permissions: ['activeTab', 'storage', 'sidePanel', 'contextMenus', 'webNavigation'],
  "host_permissions": [
    "https://*/"
  ],
  side_panel: {
    default_path: 'src/pages/sidepanel/index.html',
  },
  options_page: 'src/pages/options/index.html',
  default_locale: "zh_CN",
  background: {
    service_worker: 'src/pages/background/index.js',
    type: 'module',
  },
  action: {
    default_popup: 'src/pages/popup/index.html',
    default_icon: 'logo-128.png',
    // "pinned": true
  },
  icons: {
    128: 'logo-128.png',
    64: 'logo-64.png',
    32: 'logo-32.png',
    16: 'logo-16.png'
  },
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*', '<all_urls>'],
      js: ['src/pages/content/index.js'],
      // KEY for cache invalidation
      css: ['assets/css/contentStyle<KEY>.chunk.css'],
    },
  ],
  devtools_page: 'src/pages/devtools/index.html',
  web_accessible_resources: [
    {
      resources: ['assets/js/*.js', 'assets/css/*.css', 'icon-128.png', 'icon-32.png'],
      matches: ['*://*/*'],
    },
  ],
};

export default manifest;