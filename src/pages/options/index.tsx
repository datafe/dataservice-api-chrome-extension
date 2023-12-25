import React from 'react';
import Options from '@pages/options/Options';
import useIntl from '@src/shared/utils/useIntl';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';
import { createRoot } from 'react-dom/client';

import '@pages/options/index.scss';

refreshOnUpdate('pages/options');

const App: React.FC = () => {
  const { initDone } = useIntl();
  return !initDone ? <div /> : <Options />;
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
