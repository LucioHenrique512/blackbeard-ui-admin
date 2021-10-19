import { ThemeProvider } from "styled-components";
import GlobalTheme from "./themes/globalStyle";
import { theme } from "./themes/themes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalTheme />
    </ThemeProvider>
  );
}

export default App;
