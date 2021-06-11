import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
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
