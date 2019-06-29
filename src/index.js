import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import * as serviceWorker from './serviceWorker';
import './App.scss'
import WebFont from 'webfontloader'
import store from './redux/store'
import { Provider } from 'react-redux';

WebFont.load({
  google: {
    families: ['Dosis:400,500', 'sans-serif']
  }
});

ReactDOM.render(
  <Provider store={store}>
    <div className="app container-fluid">
      <AppRouter />
    </div>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
