import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from './app/store.js'
import { Provider } from 'react-redux'
import { ThemeProvider } from './context/ThemeContext.jsx'
import CssBaseline from '@mui/material/CssBaseline';
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline/>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)

/**
 * Global state that is needed across the app should go in the Redux store. 
 * State that's only needed in one place should be kept in component state.
 */