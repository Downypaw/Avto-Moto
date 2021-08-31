import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './store/reducer';
import App from './components/app/app';
import './scss/style.scss';

const store = configureStore({
  reducer: reducer,
});

window.addEventListener('load', () => {
  navigator.serviceWorker.register('/sw.js');
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div>Loading... </div>}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
