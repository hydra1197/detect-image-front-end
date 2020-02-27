import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import storeConfigure from './redux/store';
import 'react-toastify/dist/ReactToastify.css';

const store = storeConfigure();

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
      <ToastContainer />
    </Provider>
  );
};

export default App;
