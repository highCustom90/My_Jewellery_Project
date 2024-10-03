import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store/store.js'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
)
