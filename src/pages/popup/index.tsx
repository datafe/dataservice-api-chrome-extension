import React from 'react';
import Popup from '@pages/popup/Popup';
import useIntl from '@src/shared/utils/useIntl';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';
import { createRoot } from 'react-dom/client';

import '@pages/popup/index.scss';

refreshOnUpdate('pages/popup');

const App: React.FC = () => {
  const { initDone } = useIntl();
  return !initDone ? <div /> : <Popup />;
}

function init() {
  const appContainer = document.querySelector('#app-container');
  if (!appContainer) {
    throw new Error('Can not find #app-container');
  }
  const root = createRoot(appContainer);
  root.render(<App />);
}

init();
