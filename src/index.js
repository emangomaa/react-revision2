import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import RouterApp from './RouterApp'
import HookApp from './HookApp'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HookApp/>
    {/* <RouterApp/> */}
    {/* <App /> */}
  </React.StrictMode>
);

