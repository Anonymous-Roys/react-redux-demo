import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';


function App() {
  return (
    <Provider store={ store }>
    <div className="App">
      <HooksCakeContainer/>
      <CakeContainer/>
      <HooksIceCreamContainer/>
    </div>
    </Provider>
  );
}

export default App;
