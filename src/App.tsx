import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.css'
import { Provider } from 'react-redux'
import Layout from './components/Layout'
import { store } from './redux/store'
import { useCookies } from 'react-cookie'

function App() {
  const [cookies]: any = useCookies()

  const token = cookies.token

  console.log(token)

  if (!token) {
    document.location.href =
      process.env.REACT_APP_STANDALONE_ROOT_PATH + '/login'
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  )
}

export default App
