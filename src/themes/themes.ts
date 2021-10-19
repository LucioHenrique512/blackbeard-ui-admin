import { createTheme } from "@material-ui/core";

export const theme = {
  primary: "#29292D",
  secondary: "#FFFFFF",
  background: "#F2F1F6",
  foreground: "#E5E5E9",
  black: "#000000",
  paddingSm: "1rem",
  paddingMd: "1.5rem",
  paddingLg: "2rem",
  borderRadius: "1rem",
};

export type ThemeType = typeof theme;


export const muiTheme = createTheme({
  palette: {
    primary: { main: theme.primary },
    secondary: { main: theme.secondary },
  },
});
