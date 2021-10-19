import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Routes } from "./routes";
import GlobalTheme from "./themes/globalStyle";
import { theme } from "./themes/themes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalTheme />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
