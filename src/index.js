import React from 'react';
import App from './App';
import ReactDom from "react-dom"
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store=createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))

ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
