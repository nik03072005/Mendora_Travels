import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from '../Redux/store.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {HelmetProvider} from 'react-helmet-async'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>

     <ToastContainer position="top-right" autoClose={3000} />
    <Provider store={store}>
      <CssBaseline />
      
      <App />
    </Provider>
    </HelmetProvider>
  </StrictMode>
);
