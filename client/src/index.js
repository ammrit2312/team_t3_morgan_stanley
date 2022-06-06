import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import './config/firebase.config'
import 'react-notifications-component/dist/theme.css';
// redux
import { store, persistor } from './redux';
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider as ReduxProvider } from "react-redux";

// others
import { BrowserRouter as Router } from "react-router-dom";
import { ReactNotifications } from "react-notifications-component";

// Mui Theme
import { ThemeProvider } from "@mui/material/styles";
import theme from "./constants/muiTheme.constants";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReactNotifications />
    <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
    </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
