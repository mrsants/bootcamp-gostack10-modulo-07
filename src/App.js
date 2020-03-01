import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import "./config/ReactotronConfig";
import Routes from "./routes";
import store from "./store";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <GlobalStyles />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
