import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ContextProvider from './context/Context.jsx'
import {Provider} from "react-redux"
import { Store } from './features/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode></React.StrictMode>
  <Provider store={Store}>
    <ContextProvider>
    <App />
    </ContextProvider>
  </Provider>
)
