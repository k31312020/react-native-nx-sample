
import React from 'react';
import { Route } from '@selise-react/shared';
import { Provider } from 'react-redux';
import { createStore,  } from 'redux';
import rootReducer  from '@selise-react/shared';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'


const store = createStore(rootReducer, applyMiddleware(thunk));
const persistor = persistStore(store)

const App = () => (
  <Provider store={store}>
    <PersistGate persistor = {persistor}>
      <Route></Route>
    </PersistGate>
  </Provider>
);

export default App;
