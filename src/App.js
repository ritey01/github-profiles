import { createGlobalStyle, ThemeProvider } from "styled-components";
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Theme from "./themes/theme";

const GlobalStyle = createGlobalStyle`
 * {
  box-sizing:border-box;
}
body {
  padding:0;
  font-family: 'Space Mono', monospace;
  margin: 0 auto;
  background-color:${(props) => props.theme.background};
}

/* svg {
  display: block;
  max-width: 100%;
} */
`;

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  return (
    <ThemeProvider theme={isDarkTheme ? Theme.DMColors : Theme.LMColors}>
      <GlobalStyle />
      <Header setTheme={setTheme} isDarkTheme={isDarkTheme} />
    </ThemeProvider>
  );
}

export default App;
