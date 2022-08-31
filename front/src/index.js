// React
import React from "react";
import ReactDOM from "react-dom/client";
// Redux
import { Provider } from "react-redux";
import store from "./store/store-index";
// Components
import App from "./App";
// Styles
import "./index.css";
import 'antd/dist/antd.css'
import theme from "./utils/theme";
import { ThemeProvider } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const bgColor = theme.palette.background.main
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App/>      
    </ThemeProvider>
  </Provider>
);
