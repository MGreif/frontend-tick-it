import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from 'react-router-dom'
import 'antd/dist/antd.css';
import { Provider } from 'react-redux'
import Layout from './components/Layout'
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
