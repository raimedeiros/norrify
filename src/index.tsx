
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import './App.scss'
import store from './redux/store'
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <div className="app container-fluid">
      <AppRouter />
    </div>
  </Provider>,
  document.getElementById('root')
);
