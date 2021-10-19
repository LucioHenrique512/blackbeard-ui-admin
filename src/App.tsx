import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Routes } from "./routes";
import GlobalTheme from "./themes/globalStyle";
import { muiTheme, theme } from "./themes/themes";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={muiTheme}>
        <BrowserRouter>
          <GlobalTheme />
          <Routes />
        </BrowserRouter>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;
