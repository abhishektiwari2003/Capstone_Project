import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import store from "./Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>

      <Auth0Provider
        domain="dev-00k0owvjwq1sf0bt.jp.auth0.com"
        clientId="fcjFLXUvBOfgmDPANrWwEAOCxpFLodd0"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0Provider>
    </React.StrictMode>
  </Provider>
);
reportWebVitals();
