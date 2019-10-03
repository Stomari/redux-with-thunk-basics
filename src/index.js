import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

// The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.
ReactDOM.render(<Provider store={store}>
                  <App /> 
                </Provider>,
  document.getElementById('root'));
