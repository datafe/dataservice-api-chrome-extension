import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
import apiInfoStorage from '@root/src/shared/storages/apiInfoStorage';
import selectionInfoStorage from '@src/shared/storages/selectionInfoStorage';
import { events } from '@src/shared/constants/common';
import 'webextension-polyfill';

reloadOnUpdate('pages/background');

/**
 * Extension reloading is necessary because the browser automatically caches the css.
 * If you do not use the css of the content script, please delete it.
 */
// reloadOnUpdate('pages/content/style.scss');

// console.log('background loaded');

const selfExtensionId = chrome?.runtime?.id;
const apiParameterNameIdSeparator = ':::';

// want bring which info from page content
const contextType: chrome.contextMenus.ContextType = 'selection'; // ["page", "selection", "link", "editable", "image", "video",
//   "audio"]

chrome.runtime.onInstalled.addListener(d => chrome.contextMenus.removeAll(generateMenu));

// when storage changed，re-initialize menu
chrome.storage.onChanged.addListener(function (changes, areaName) {
  chrome.contextMenus.removeAll(generateMenu);
});

// function waitForWindowId(id, delay, maxTries, callback) {
//   let where = 'watchForWindow';
//   if (maxTries-- <= 0) {
//     //Fail softly. You may want to do something else on failure to find the new window.
//     return;
//   }
//   //This type of window is a type:'tab', not type:'popup'.
//   if (!chrome.extension.getViews({ windowId: id }).some(view => {
//     if (typeof callback === 'function') {
//       callback(view);
//     }
//     return true;
//   })) {
//     //Did not find the view for window ID. Keep trying
//     setTimeout(waitForWindowId, delay, id, delay, maxTries, callback);
//   }
// }

chrome.contextMenus.onClicked.addListener(async (info, tab) => {

  const { selectionText, menuItemId } = info || {};
  if (selectionText && menuItemId) {

    const parentId = String(info?.parentMenuItemId);
    const itemIdStr = String(menuItemId);
    const id = itemIdStr?.substring?.(itemIdStr?.indexOf?.(apiParameterNameIdSeparator))?.replace?.(apiParameterNameIdSeparator, '');

    const selectionInfo = { apiId: parentId, parameterName: id, selection: selectionText };

    // save info into storage for extension parameters
    await selectionInfoStorage.set(selectionInfo);

    // chrome v118+
    // await chrome?.action?.openPopup?.();

    // const openTabCallback = (newTab) => {
    //   // Callback after creating tab to make sure it loaded before sending message
    //   chrome.tabs.onUpdated.addListener(function (tabId) {
    //     if (tabId !== newTab.id) return;
    //     // If tab is loaded, send message
    //     const eventData = { action: events.PASSING_SELECTION, selectionInfo };
    //     chrome.runtime.sendMessage(selfExtensionId, eventData);
    //   });
    //   chrome.tabs.update(newTab.id, { active: true });
    // }

    // Create new tab of Chrome Notes
    // chrome.tabs.create(
    //   {
    //     url: chrome.runtime.getURL('src/pages/options/index.html'),
    //     active: true,
    //   },
    //   openTabCallback,
    // );

    // passing selected text message
    // The chrome.tabs variant sends messages to content scripts, whereas the chrome.extension function sends messages to all other extension components.
    chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {

      try {

        const eventData = { action: events.PASSING_SELECTION, selectionInfo };

        // send message for extension
        try {
          await chrome?.action?.openPopup?.();
          await chrome.runtime.sendMessage(selfExtensionId, eventData);
        } catch (e) {
          // if catch error means popup is not opened
          await chrome.windows.create({
            url: chrome.runtime.getURL('src/pages/popup/index.html'),
            type: 'popup',
            width: 400, height: 600,
            focused: true,
          });
        }

        // send message for content script (if using content script)
        // const contentResponse = await chrome.tabs.sendMessage(tabs?.[0]?.id, eventData);

      } catch (e) {
        // no need to display error, when product mode
      }

    });
  }

});


async function generateMenu() {

  const apiInfo = await apiInfoStorage.get();

  function createSons(par, sons) {
    for (let i = 0; i < sons.length; i++) {
      const son = sons[i];
      chrome.contextMenus.create({
        id: son.id,
        title: son.title,
        enabled: son.enabled ?? true,
        parentId: par,
        contexts: son.contexts || [contextType],
      });
      if (son.children) createSons(son.id, son.children);
    }
  }

  const contextMenuItem = [{
    id: 'data_service_api',
    title: chrome.i18n.getMessage("contextMenuTitle"),
    contexts: [contextType],
    enabled: true,
    children: [
      { id: 'api-name-fixed', title: chrome.i18n.getMessage("contextMenuApiList"), enabled: false },
      ...apiInfo?.apiList?.map?.((api, index) => ({
        id: api.apiId,
        title: api.apiName,
        enabled: true,
        children: [
          { id: `api-${index}-parameter-fixed`, title: chrome.i18n.getMessage("contextMenuParameterList"), enabled: false },
          ...api?.apiParams?.map?.((param) => ({
            id: `${api?.apiId}${apiParameterNameIdSeparator}${param?.name}`,
            title: param.name,
            contexts: [contextType],
            enabled: true,
            children: [],
          })) || []]
      })) || []]
  }];

  for (let i = 0; i < contextMenuItem.length; i++) {
    const item = contextMenuItem[i];
    chrome.contextMenus.create({
      id: item.id,
      title: item.title,
      enabled: item.enabled ?? true,
      contexts: item.contexts,
    });
    if (item.children) createSons(item.id, item.children);
  }

}
