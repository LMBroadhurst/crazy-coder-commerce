import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from "./Application.jsx";
import { UserProvider } from './contexts/User.context';
import { CartProvider } from './contexts/Cart.context';
// import { Provider } from 'react-redux';
// import { store, persistor } from './store/store';
// import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserProvider>
          <CartProvider>
            <App />
          </CartProvider>
      </UserProvider>
  </React.StrictMode>
);

reportWebVitals();
