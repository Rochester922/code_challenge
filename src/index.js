import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './shared/store';

import App from './screens/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
