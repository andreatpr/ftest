import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <main>
      <App />
    </main>    
  </React.StrictMode>
);

reportWebVitals();
