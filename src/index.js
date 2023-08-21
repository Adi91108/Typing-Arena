import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { TestModeContextProvider } from './context/TestModeContext';
import {ThemeContextProvider} from './context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
// import {BrowserRouter} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ThemeContextProvider>
<TestModeContextProvider>
<BrowserRouter>
    <App/>
</BrowserRouter>
  </TestModeContextProvider>
  </ThemeContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals