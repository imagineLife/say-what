import React from "react";
import { AppProvider } from "./../AppContext";
import AppRouter from "./../AppRouter";

const App = () => (
  <AppProvider>
    <AppRouter />
  </AppProvider>
);

export default App;
