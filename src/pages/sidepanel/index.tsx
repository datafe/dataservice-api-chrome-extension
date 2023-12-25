import React from 'react';
import useIntl from '@src/shared/utils/useIntl';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';
import Popup from '@pages/popup/Popup';
import { createRoot } from 'react-dom/client';

import '@pages/sidepanel/index.scss';

refreshOnUpdate('pages/sidepanel');

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
