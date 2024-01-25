import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import './styling/Navbar.less'
import './styling/index.css'
import './styling/Homepage.less'
import './styling/Account.less'
import './styling/Contact.less'
import router from './router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
