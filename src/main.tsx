import { QuickBloxUIKitProvider } from 'quickblox-react-ui-kit';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';

export const QBconfig = {
  credentials: {
    appId: 99744,
    authKey: 'YEXy7Y6TpLKpdps',
    authSecret: 'whnC5eWffPxzg8u',
    accountKey: '_sAK7MuuZMxTZHmFeGva',
    // sessionToken: '',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuickBloxUIKitProvider
      accountData={QBconfig.credentials}
      maxFileSize={100 * 1000000} //set max size for attachments
    >
      <App />
    </QuickBloxUIKitProvider>
  </React.StrictMode>
);
