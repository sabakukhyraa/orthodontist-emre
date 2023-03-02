import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { createContext, useState } from "react";

export const StateContext = createContext({
  darkMode: null,
  language: null,
});

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("TR");

  return (
    <BrowserRouter>
      <StateContext.Provider
        value={{ darkMode, language, setDarkMode, setLanguage }}
      >
        <Layout />
      </StateContext.Provider>
    </BrowserRouter>
  );
}

export default App;
