import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from "redux-thunk";
import playlistReducer from './reducers/playlistReducer';
import colorsReducer from './reducers/colorsReducer';
import tokenReducer from './reducers/tokenReducer';
import libraryReducer from './reducers/libraryReducer';
import userReducer from './reducers/userReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    colors: colorsReducer,
    playlist: playlistReducer,
    token: tokenReducer,
    library: libraryReducer,
    user: userReducer,
  }
);

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App className="app-root"/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
