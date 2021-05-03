
import React from 'react';
import { Route } from '@selise-react/shared';
import { Provider } from 'react-redux';
import { createStore,  } from 'redux';
import {rootReducer}  from '@selise-react/shared';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
    <Provider store={store}>
      <Route></Route>
    </Provider>
);

export default App;
