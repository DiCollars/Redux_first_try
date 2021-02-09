import {createStore} from 'redux';
import {Provider} from 'react-redux';

import React from 'react';
import allReducers from './reducers/wrapperObject';
import WebPage from './components/WebPage';

const store = createStore(allReducers);

function App() {
  return (
    <Provider store={store}>
      <WebPage/>
    </Provider>
  );
}

export default App;
